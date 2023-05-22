import {extractErrorMessage} from '@augment-vir/common';
import {html, renderIf} from 'element-vir';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {defineElementBookElement} from '../define-book-element';

const unsetInternalState = Symbol('unset-internal-state');

export const ElementBookExampleViewer = defineElementBookElement<{
    example: ElementBookPageExample;
    breadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'element-book-example-viewer',
    stateInit: {
        isUnset: unsetInternalState,
    } as any,
    renderCallback({state, inputs, updateState}) {
        if (state.isUnset === unsetInternalState) {
            updateState({
                isUnset: undefined,
                ...inputs.example.stateInit,
            });
        }

        try {
            const output = inputs.example.render({
                state,
                updateState,
            });
            return html`
                ${renderIf(
                    !!inputs.example.styles,
                    html`
                        <style>
                            ${inputs.example.styles}
                        </style>
                    `,
                )}
                ${output}
            `;
        } catch (error) {
            console.error(error);
            return `${inputs.breadcrumbs.join(' > ')} failed: ${extractErrorMessage(error)}`;
        }
    },
    options: {
        allowPolymorphicState: true,
    },
});
