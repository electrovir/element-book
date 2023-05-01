import {assertTypeOf, itCases} from '@augment-vir/browser-testing';
import {defineElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {defineElementBookPage} from '../element-book-page/element-book-page';
import {defineElementBookSection} from '../element-book-section/element-book-section';
import {
    doesNodeHaveEntryType,
    EntryTreeNode,
    entryTreeRootNode,
    listTitleBreadcrumbs,
} from './entry-tree';

describe(listTitleBreadcrumbs.name, () => {
    const exampleSection = defineElementBookSection('section title');
    const exampleChapter = defineElementBookChapter('chapter title', exampleSection);
    const examplePage = defineElementBookPage({
        examples: [],
        title: 'page title',
        parent: exampleChapter,
    });

    itCases(listTitleBreadcrumbs, [
        {
            it: 'finds nothing when entry has no parent',
            inputs: [exampleSection],
            expect: [],
        },
        {
            it: 'finds a parent',
            inputs: [exampleChapter],
            expect: [exampleSection.title],
        },
        {
            it: 'finds multiple ancestors',
            inputs: [examplePage],
            expect: [
                exampleChapter.title,
                exampleSection.title,
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
                exampleSection.title,
                examplePage.title,
            ],
        },
    ]);
});

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        assertTypeOf(entryTreeRootNode).not.toEqualTypeOf<
            EntryTreeNode<ElementBookEntryTypeEnum.Page>
        >();
        if (doesNodeHaveEntryType(entryTreeRootNode, ElementBookEntryTypeEnum.Page)) {
            assertTypeOf(entryTreeRootNode).toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Page>
            >();
            assertTypeOf(entryTreeRootNode.entry.type).toEqualTypeOf<
                typeof ElementBookEntryTypeEnum.Page
            >();
            assertTypeOf(entryTreeRootNode).not.toEqualTypeOf<
                EntryTreeNode<ElementBookEntryTypeEnum.Root>
            >();
        }
    });
});
