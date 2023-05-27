import {extractErrorMessage} from '@augment-vir/common';
import {html, renderIf} from 'element-vir';
import {ElementBookPageExampleInit} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {unsetInternalState} from '../../../data/unset';
import {defineElementBookElement} from '../define-book-element';

export const ElementBookExampleViewer = defineElementBookElement<{
    example: ElementBookPageExampleInit<any, any, any>;
    breadcrumbs: ReadonlyArray<string>;
    currentPageControls: Record<string, any>;
}>()({
    tagName: 'element-book-example-viewer',
    stateInitStatic: {
        isUnset: unsetInternalState,
    } as any,
    renderCallback({state, inputs, updateState}) {
        if (!inputs.example.renderCallback || typeof inputs.example.renderCallback === 'string') {
            throw new Error(
                `Failed to render example '${inputs.example.title}': renderCallback is not a function`,
            );
        }

        if (state.isUnset === unsetInternalState) {
            updateState({
                isUnset: undefined,
                ...inputs.example.stateInitStatic,
            });
        }

        try {
            const output = inputs.example.renderCallback({
                state,
                updateState,
                controls: inputs.currentPageControls,
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
