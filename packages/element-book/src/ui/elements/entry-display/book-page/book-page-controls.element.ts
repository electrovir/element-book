import {extractEventTarget} from '@augment-vir/browser';
import {PropertyValueType} from '@augment-vir/common';
import {css, defineElementEvent, html, listen} from 'element-vir';
import {BookPage} from '../../../../data/book-entry/book-page/book-page';
import {
    BookPageControl,
    BookPageControlInit,
    BookPageControlTypeEnum,
    BookPageControlsValues,
    isControlInitType,
} from '../../../../data/book-entry/book-page/book-page-controls';
import {defineBookElement} from '../../define-book-element';

export const BookPageControls = defineBookElement<{
    config: BookPage['controls'];
    fullUrlBreadcrumbs: ReadonlyArray<string>;
    currentValues: Record<string, BookPageControl['initValue']>;
}>()({
    tagName: 'book-page-controls',
    events: {
        controlValueChange: defineElementEvent<{
            fullUrlBreadcrumbs: ReadonlyArray<string>;
            newValues: BookPageControlsValues;
        }>(),
    },
    styles: css`
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
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
        return Object.entries(inputs.config).map(
            ([
                controlName,
                controlInit,
            ]) => {
                const controlInputTemplate = createControlInput(
                    inputs.currentValues[controlName],
                    controlInit,
                    (newValue) => {
                        dispatch(
                            new events.controlValueChange({
                                fullUrlBreadcrumbs: inputs.fullUrlBreadcrumbs,
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
