import {extractErrorMessage} from '@augment-vir/common';
import {html, renderIf} from 'element-vir';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {defineElementBookElement} from '../define-book-element';

const unsetInternalState = Symbol('unset-internal-state');

export const ElementBookExampleViewer = defineElementBookElement<{
    example: ElementBookPageExample;
    parentBreadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'element-book-example-viewer',
    stateInit: {
        internalState: unsetInternalState as any,
    },
    renderCallback({state, inputs, updateState}) {
        const fullExampleBreadcrumbs = inputs.parentBreadcrumbs.concat(inputs.example.title);

        if (state.internalState === unsetInternalState) {
            updateState({internalState: inputs.example.stateInit});
        }

        try {
            const output = inputs.example.render({
                state: state.internalState,
                updateState: (newState) => {
                    updateState({
                        internalState: {
                            ...state.internalState,
                            ...newState,
                        },
                    });
                },
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
            return `${fullExampleBreadcrumbs.join(' > ')} failed: ${extractErrorMessage(error)}`;
        }
    },
});
