import {assertTypeOf, itCases} from '@augment-vir/browser-testing';
import {defineElementBookChapter} from './element-book-chapter/element-book-chapter';
import {ElementBookEntry, listBreadcrumbs, titleToBreadcrumb} from './element-book-entry';
import {ElementBookEntryTypeEnum} from './element-book-entry-type';
import {defineElementBookPage} from './element-book-page/element-book-page';

describe('ElementBookEntry', () => {
    it('has correct property types', () => {
        assertTypeOf<ElementBookEntry>().toMatchTypeOf<{
            title: string;
            parent?: ElementBookEntry | undefined;
            entryType: ElementBookEntryTypeEnum;
        }>();
    });
});

describe(listBreadcrumbs.name, () => {
    const exampleTopLevelChapter = defineElementBookChapter({
        title: 'top level title',
        parent: undefined,
    });
    const exampleChapter = defineElementBookChapter({
        title: 'chapter title',
        parent: exampleTopLevelChapter,
    });
    const examplePage = defineElementBookPage({
        title: 'page title',
        parent: exampleChapter,
    });

    itCases(listBreadcrumbs, [
        {
            it: 'finds nothing when entry has no parent',
            inputs: [exampleTopLevelChapter],
            expect: [],
        },
        {
            it: 'finds a parent',
            inputs: [exampleChapter],
            expect: [exampleTopLevelChapter.title].map(titleToBreadcrumb),
        },
        {
            it: 'finds multiple ancestors',
            inputs: [examplePage],
            expect: [
                exampleChapter.title,
                exampleTopLevelChapter.title,
            ].map(titleToBreadcrumb),
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
            ].map(titleToBreadcrumb),
        },
    ]);
});
