import {assertTypeOf} from '@augment-vir/browser-testing';
import {createObservableProperty} from 'element-vir';
import {defineElementBookPage} from './element-book-page';
import {definePageControl} from './element-book-page-controls/element-book-page-control';
import {ElementBookPageControlTypeEnum} from './element-book-page-controls/element-book-page-control-type';
import {insertElementExample} from './element-book-page-example';

describe(insertElementExample.name, () => {
    function createExampleElementBookPage() {
        return defineElementBookPage({
            parent: undefined,
            title: 'example page',
            controls: {
                exampleControl: definePageControl({
                    initValue: 'nope',
                    type: ElementBookPageControlTypeEnum.Text,
                }),
            },
        });
    }

    it('allows observable property state', () => {
        insertElementExample({
            title: 'example with observable property state',
            stateInit: {
                observable: createObservableProperty<number | undefined>(undefined),
            },
            parent: createExampleElementBookPage(),
            renderCallback({state, updateState}) {
                if (state.observable === undefined) {
                    updateState({
                        observable: 5,
                    });
                }
                return '';
            },
        });
    });

    it('errors if there is no render return', () => {
        insertElementExample({
            title: 'example with no render return',
            parent: createExampleElementBookPage(),
            // @ts-expect-error
            renderCallback() {},
        });
    });

    it('propagates control types to the child', () => {
        insertElementExample({
            title: 'example with controls property state',
            parent: createExampleElementBookPage(),
            renderCallback({controls}) {
                assertTypeOf(controls.exampleControl).toEqualTypeOf<string>();
                return '';
            },
        });
    });
});
