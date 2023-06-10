import {extractErrorMessage} from '@augment-vir/common';
import {assign, html, renderIf} from 'element-vir';
import {BookElementExample} from '../../../../data/book-entry/book-element-example/book-element-example';
import {unsetInternalState} from '../../../../data/unset';
import {BookError} from '../../common/book-error.element';
import {defineBookElement} from '../../define-book-element';

export const BookElementExampleViewer = defineBookElement<{
    elementExample: BookElementExample;
    fullUrlBreadcrumbs: ReadonlyArray<string>;
    currentPageControls: Record<string, any>;
}>()({
    tagName: 'book-element-example-viewer',
    stateInitStatic: {
        isUnset: unsetInternalState,
    } as any,
    renderCallback({state, inputs, updateState}) {
        if (
            !inputs.elementExample.renderCallback ||
            typeof inputs.elementExample.renderCallback === 'string'
        ) {
            throw new Error(
                `Failed to render example '${inputs.elementExample.title}': renderCallback is not a function`,
            );
        }

        if (state.isUnset === unsetInternalState) {
            updateState({
                isUnset: undefined,
                ...inputs.elementExample.stateInitStatic,
            });
        }

        try {
            const output = inputs.elementExample.renderCallback({
                state,
                updateState,
                controls: inputs.currentPageControls,
            });
            if (output instanceof Promise) {
                throw new Error('renderCallback output cannot be a promise');
            }

            return html`
                ${renderIf(
                    !!inputs.elementExample.styles,
                    html`
                        <style>
                            ${inputs.elementExample.styles}
                        </style>
                    `,
                )}
                ${output}
            `;
        } catch (error) {
            console.error(error);
            return html`
                <${BookError}
                    ${assign(BookError, {
                        message: `inputs.fullUrlBreadcrumbs.join(' > ')} failed: ${extractErrorMessage(
                            error,
                        )}`,
                    })}
                ></${BookError}>
            `;
        }
    },
    options: {
        allowPolymorphicState: true,
    },
});
