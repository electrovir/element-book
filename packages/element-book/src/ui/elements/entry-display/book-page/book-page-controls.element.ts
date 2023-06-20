import {extractEventTarget} from '@augment-vir/browser';
import {PropertyValueType, isRuntimeTypeOf} from '@augment-vir/common';
import {css, defineElementEvent, html, listen} from 'element-vir';
import {BookPage} from '../../../../data/book-entry/book-page/book-page';
import {
    BookPageControl,
    BookPageControlInit,
    BookPageControlTypeEnum,
    BookPageControlsValues,
    isControlInitType,
} from '../../../../data/book-entry/book-page/book-page-controls';
import {colorThemeCssVars} from '../../../color-theme/color-theme';
import {defineBookElement} from '../../define-book-element';

export const BookPageControls = defineBookElement<{
    config: BookPage['controls'];
    /**
     * If an object (or Record) is given for this input, then each key of the object must correspond
     * to one of the controls from the input config and the value for each key will be the
     * breadcrumbs for that specific config.
     */
    fullUrlBreadcrumbs: ReadonlyArray<string> | Record<string, ReadonlyArray<string>>;
    currentValues: Record<string, BookPageControl['initValue']>;
}>()({
    tagName: 'book-page-controls',
    events: {
        controlValueChange: defineElementEvent<{
            fullUrlBreadcrumbs: ReadonlyArray<string>;
            newValues: BookPageControlsValues;
        }>(),
    },
    hostClasses: {
        'book-page-controls-has-controls': ({inputs}) => !!Object.keys(inputs.config).length,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-wrap: wrap;
            opacity: 0.7;
            gap: 16px;
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
        }

        ${hostClasses['book-page-controls-has-controls'].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }
    `,
    renderCallback({inputs, dispatch, events}) {
        if (!Object.entries(inputs.config).length) {
            return '';
        }

        return Object.entries(inputs.config).map(
            ([
                controlName,
                controlInit,
            ]) => {
                if (controlInit.controlType === BookPageControlTypeEnum.Hidden) {
                    return '';
                }

                const controlInputTemplate = createControlInput(
                    inputs.currentValues[controlName],
                    controlInit,
                    (newValue) => {
                        const fullUrlBreadcrumbs = isRuntimeTypeOf(
                            inputs.fullUrlBreadcrumbs,
                            'array',
                        )
                            ? inputs.fullUrlBreadcrumbs
                            : inputs.fullUrlBreadcrumbs[controlName];

                        if (!fullUrlBreadcrumbs) {
                            throw new Error(
                                `Failed to find breadcrumbs from given control name: '${controlName}'`,
                            );
                        }

                        dispatch(
                            new events.controlValueChange({
                                fullUrlBreadcrumbs,
                                newValues: {
                                    ...inputs.currentValues,
                                    [controlName]: newValue,
                                },
                            }),
                        );
                    },
                );
                return html`
                    <label class="control-wrapper">
                        <span>${controlName}</span>
                        ${controlInputTemplate}
                    </label>
                `;
            },
        );
    },
});

function createControlInput(
    value: unknown,
    controlInit: BookPageControlInit<any>,
    valueChange: (newValue: PropertyValueType<BookPageControlsValues>) => void,
) {
    if (isControlInitType(controlInit, BookPageControlTypeEnum.Hidden)) {
        return '';
    } else if (isControlInitType(controlInit, BookPageControlTypeEnum.Checkbox)) {
        return html`
            <input
                type="checkbox"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.checked);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlTypeEnum.Color)) {
        return html`
            <input
                type="color"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlTypeEnum.Text)) {
        return html`
            <input
                type="text"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlTypeEnum.Number)) {
        return html`
            <input
                type="number"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlTypeEnum.Dropdown)) {
        return html`
            <select
                .value=${value}
                ${listen('input', (event) => {
                    const selectElement = extractEventTarget(event, HTMLSelectElement);

                    valueChange(selectElement.value);
                })}
            >
                ${controlInit.options.map((optionLabel, optionIndex) => {
                    return html`
                        <option ?selected=${optionIndex === value} value=${optionIndex}>
                            ${optionLabel}
                        </option>
                    `;
                })}
            </select>
        `;
    } else {
        return html`
            <p class="error">${controlInit.controlType} controls are not implemented yet.</p>
        `;
    }
}
