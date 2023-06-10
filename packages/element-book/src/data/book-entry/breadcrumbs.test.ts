import {itCases} from '@augment-vir/browser-testing';
import {defineBookPage} from './book-page/define-book-page';
import {listBreadcrumbs, titleToBreadcrumb} from './breadcrumbs';

describe(listBreadcrumbs.name, () => {
    const exampleTopLevelPage = defineBookPage({
        title: 'top level title',
        parent: undefined,
    });
    const examplePage = defineBookPage({
        title: 'chapter title',
        parent: exampleTopLevelPage,
    });
    const examplePageNested = defineBookPage({
        title: 'page title',
        parent: examplePage,
    });

    itCases(listBreadcrumbs, [
        {
            it: 'finds nothing when entry has no parent',
            inputs: [
                exampleTopLevelPage,
                false,
            ],
            expect: [],
        },
        {
            it: 'finds a parent',
            inputs: [
                examplePage,
                false,
            ],
            expect: [exampleTopLevelPage.title].map(titleToBreadcrumb),
        },
        {
            it: 'finds multiple ancestors',
            inputs: [
                examplePageNested,
                false,
            ],
            expect: [
                examplePage.title,
                exampleTopLevelPage.title,
            ].map(titleToBreadcrumb),
        },
        {
            it: 'includes title of given entry when includeSelf is true',
            inputs: [
                examplePageNested,
                true,
            ],
            expect: [
                examplePage.title,
                exampleTopLevelPage.title,
                examplePageNested.title,
            ].map(titleToBreadcrumb),
        },
    ]);
});
