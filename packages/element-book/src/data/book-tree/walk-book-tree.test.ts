import {assertTypeOf} from '@augment-vir/browser-testing';
import {createEmptyBookTreeRoot} from './book-tree';
import {walkEntryTree} from './walk-book-tree';

describe(walkEntryTree.name, () => {
    it('has proper types', async () => {
        const emptyTreeRootNode = createEmptyBookTreeRoot('empty title', []);

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
