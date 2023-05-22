import {createObservableProperty} from 'element-vir';
import {createExample} from './element-book-page-example';

describe(createExample.name, () => {
    it('allows observable property state', () => {
        createExample({
            title: 'example with observable property state',
            stateInit: {
                observable: createObservableProperty<number | undefined>(undefined),
            },
            render({state, updateState}) {
                if (state.observable === undefined) {
                    updateState({
                        observable: 5,
                    });
                }
            },
        });
    });
});
