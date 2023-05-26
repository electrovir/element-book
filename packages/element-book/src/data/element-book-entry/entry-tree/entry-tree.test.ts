import {assertTypeOf} from '@augment-vir/browser-testing';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {EntryTreeNode, createEmptyEntryTreeRoot, doesNodeHaveEntryType} from './entry-tree';

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        const emptyTreeRootNode = createEmptyEntryTreeRoot('empty title') as any;

        assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
            EntryTreeNode<ElementBookEntryTypeEnum.Page>
        >();
        if (doesNodeHaveEntryType(emptyTreeRootNode, ElementBookEntryTypeEnum.Page)) {
            assertTypeOf(emptyTreeRootNode).toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Page>
            >();
            assertTypeOf(emptyTreeRootNode.entry.entryType).toEqualTypeOf<
                typeof ElementBookEntryTypeEnum.Page
            >();
            assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Root>
            >();
        }
    });
});
