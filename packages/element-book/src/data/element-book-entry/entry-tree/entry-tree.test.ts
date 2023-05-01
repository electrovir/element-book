import {assertTypeOf, itCases} from '@augment-vir/browser-testing';
import {defineElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {defineElementBookPage} from '../element-book-page/element-book-page';
import {
    EntryTreeNode,
    createEmptyEntryTreeRoot,
    doesNodeHaveEntryType,
    listTitleBreadcrumbs,
} from './entry-tree';

describe(listTitleBreadcrumbs.name, () => {
    const exampleTopLevelChapter = defineElementBookChapter({
        title: 'top level title',
    });
    const exampleChapter = defineElementBookChapter({
        title: 'chapter title',
        parent: exampleTopLevelChapter,
    });
    const examplePage = defineElementBookPage({
        examples: [],
        title: 'page title',
        parent: exampleChapter,
    });

    itCases(listTitleBreadcrumbs, [
        {
            it: 'finds nothing when entry has no parent',
            inputs: [exampleTopLevelChapter],
            expect: [],
        },
        {
            it: 'finds a parent',
            inputs: [exampleChapter],
            expect: [exampleTopLevelChapter.title],
        },
        {
            it: 'finds multiple ancestors',
            inputs: [examplePage],
            expect: [
                exampleChapter.title,
                exampleTopLevelChapter.title,
            ],
        },
        {
            it: 'includes title of given entry when includeSelf is true',
            inputs: [
                examplePage,
                true,
            ],
            expect: [
                exampleChapter.title,
                exampleTopLevelChapter.title,
                examplePage.title,
            ],
        },
    ]);
});

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        const emptyTreeRootNode = createEmptyEntryTreeRoot();

        assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
            EntryTreeNode<ElementBookEntryTypeEnum.Page>
        >();
        if (doesNodeHaveEntryType(emptyTreeRootNode, ElementBookEntryTypeEnum.Page)) {
            assertTypeOf(emptyTreeRootNode).toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Page>
            >();
            assertTypeOf(emptyTreeRootNode.entry.type).toEqualTypeOf<
                typeof ElementBookEntryTypeEnum.Page
            >();
            assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Root>
            >();
        }
    });
});
