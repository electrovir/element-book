import {extractErrorMessage} from '@augment-vir/common';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {defineBookElement} from '../define-book-element';

const unsetInternalState = Symbol('unset-internal-state');

export const BookExampleViewer = defineBookElement<{
    example: ElementBookPageExample;
    parentBreadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'book-example-viewer',
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
            return output;
        } catch (error) {
            console.error(error);
            return `${fullExampleBreadcrumbs.join(' > ')} failed: ${extractErrorMessage(error)}`;
        }
    },
});
