import {assertTypeOf} from '@augment-vir/browser-testing';
import {BookEntryTypeEnum} from '../book-entry-type';
import {EntryTreeNode, createEmptyEntryTreeRoot, doesNodeHaveEntryType} from './entry-tree';

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        const emptyTreeRootNode = createEmptyEntryTreeRoot('empty title', []) as any;

        assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<EntryTreeNode<BookEntryTypeEnum.Page>>();
        if (doesNodeHaveEntryType(emptyTreeRootNode, BookEntryTypeEnum.Page)) {
            assertTypeOf(emptyTreeRootNode).toEqualTypeOf<EntryTreeNode<BookEntryTypeEnum.Page>>();
            assertTypeOf(emptyTreeRootNode.entry.entryType).toEqualTypeOf<
                typeof BookEntryTypeEnum.Page
            >();
            assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
                EntryTreeNode<BookEntryTypeEnum.Root>
            >();
        }
    });
});
