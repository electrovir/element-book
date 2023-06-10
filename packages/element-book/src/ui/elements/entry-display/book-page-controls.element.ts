import {css, defineElementEvent, html, listen} from 'element-vir';
import {BookPage} from '../../../data/book-entry/book-page/book-page';
import {
    BookPageControl,
    BookPageControlTypeEnum,
} from '../../../data/book-entry/book-page/book-page-controls';
import {defineBookElement} from '../define-book-element';

export const BookPageControls = defineBookElement<{
    config: BookPage['controls'];
    currentValues: Record<string, BookPageControl['initValue']>;
}>()({
    tagName: 'book-page-controls',
    events: {
        controlValueChange: defineElementEvent<{name: string; value: unknown}>(),
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
                    controlInit.controlType,
                    (newValue) => {
                        dispatch(
                            new events.controlValueChange({
                                name: controlName,
                                value: newValue,
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
    controlType: BookPageControlTypeEnum,
    valueChange: (newValue: unknown) => void,
) {
    if (controlType === BookPageControlTypeEnum.Text) {
        return html`
            <input
                type="text"
                .value=${value || ''}
                ${listen('input', (event) => {
                    const inputElement = event.currentTarget;

                    if (!(inputElement instanceof HTMLInputElement)) {
                        throw new Error("Din't get an input element from the event target.");
                    }

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else {
        return html`
            <p class="error">${controlType} controls are not implemented yet.</p>
        `;
    }
}
