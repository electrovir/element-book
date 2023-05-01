import {assertTypeOf} from '@augment-vir/browser-testing';
import {entryTreeRootNode} from './entry-tree';
import {walkEntryTree} from './walk-entry-tree';

describe(walkEntryTree.name, () => {
    it('has proper types', async () => {
        assertTypeOf(
            walkEntryTree(entryTreeRootNode, () => {
                return true;
            }),
        ).toEqualTypeOf<boolean>();
        assertTypeOf(
            walkEntryTree(entryTreeRootNode, async () => {
                return true;
            }),
        ).toEqualTypeOf<Promise<boolean>>();
    });
});
