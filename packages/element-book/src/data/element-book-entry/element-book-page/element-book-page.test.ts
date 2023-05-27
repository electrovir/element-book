import {assertTypeOf} from '@augment-vir/browser-testing';
import {createObservableProperty} from 'element-vir';
import {defineElementBookPage} from './element-book-page';
import {definePageControl} from './element-book-page-controls/element-book-page-control';
import {ElementBookPageControlTypeEnum} from './element-book-page-controls/element-book-page-control-type';

describe(defineElementBookPage.name, () => {
    it('has proper defineExample types', () => {
        return defineElementBookPage({
            parent: undefined,
            title: 'example page',
            controls: {
                exampleControl: definePageControl({
                    initValue: 'nope',
                    controlType: ElementBookPageControlTypeEnum.Text,
                }),
            },
            defineExamplesCallback({defineExample}) {
                defineExample({
                    title: 'example with observable property state',
                    stateInitStatic: {
                        observable: createObservableProperty<number | undefined>(undefined),
                    },
                    renderCallback({state, updateState}) {
                        if (state.observable === undefined) {
                            updateState({
                                observable: 5,
                            });
                        }
                        return '';
                    },
                });

                // errors if there is no render return
                defineExample({
                    title: 'example with no render return',
                    // @ts-expect-error
                    renderCallback() {},
                });

                // propagates control types to the child
                defineExample({
                    title: 'example with controls property state',
                    renderCallback({controls}) {
                        assertTypeOf(controls.exampleControl).toEqualTypeOf<string>();
                        return '';
                    },
                });
            },
        });
    });
});
