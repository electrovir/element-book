import {assertTypeOf} from '@augment-vir/browser-testing';
import {createEmptyEntryTreeRoot} from './entry-tree';
import {walkEntryTree} from './walk-entry-tree';

describe(walkEntryTree.name, () => {
    it('has proper types', async () => {
        const emptyTreeRootNode = createEmptyEntryTreeRoot('empty title');

        assertTypeOf(
            walkEntryTree(emptyTreeRootNode, () => {
                return true;
            }),
        ).toEqualTypeOf<boolean>();
        assertTypeOf(
            walkEntryTree(emptyTreeRootNode, async () => {
                return true;
            }),
        ).toEqualTypeOf<Promise<boolean>>();
    });
});
