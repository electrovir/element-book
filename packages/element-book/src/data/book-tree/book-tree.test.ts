import {assertTypeOf, itCases} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {defineBookPage} from '../book-entry/book-page/define-book-page';
import {
    createBookTreeFromEntries,
    createEmptyBookTreeRoot,
    doesNodeHaveEntryType,
    flattenTree,
} from './book-tree';
import {BookTreeNode, isBookTreeNodeMarker} from './book-tree-node';

const page1 = defineBookPage({
    parent: undefined,
    title: 'page 1',
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 1',
            renderCallback() {
                return 'hi';
            },
        });
    },
});

const exampleEntries = [
    page1,
    defineBookPage({
        parent: undefined,
        title: 'page 2',
    }),
    defineBookPage({
        parent: page1,
        title: 'page 1 child',
    }),
    defineBookPage({
        parent: page1,
        title: 'aaaaaaaa',
        descriptionParagraphs: ['this page should be sorted above page 1 child'],
    }),
];

const exampleTreeInputs = {
    entries: exampleEntries,
    debug: false,
    everythingDescriptionParagraphs: [],
    everythingTitle: 'all',
} as const;

const exampleTree = createBookTreeFromEntries(exampleTreeInputs);

const expectedTree = {
    [isBookTreeNodeMarker]: true,
    manuallyAdded: true,
    children: {
        'page-1': {
            [isBookTreeNodeMarker]: true,
            manuallyAdded: true,
            children: {
                'example-1': {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: page1.elementExamples['example-1']!,
                    urlBreadcrumb: 'example-1',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'example-1',
                    ],
                },
                'page-1-child': {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: exampleEntries[2]!,
                    urlBreadcrumb: 'page-1-child',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'page-1-child',
                    ],
                },
                aaaaaaaa: {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: exampleEntries[3]!,
                    urlBreadcrumb: 'aaaaaaaa',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'aaaaaaaa',
                    ],
                },
            },
            entry: page1,
            fullUrlBreadcrumbs: [
                'page-1',
            ],
            urlBreadcrumb: 'page-1',
        },
        'page-2': {
            [isBookTreeNodeMarker]: true,
            manuallyAdded: true,
            children: {},
            entry: exampleEntries[1]!,
            urlBreadcrumb: 'page-2',
            fullUrlBreadcrumbs: [
                'page-2',
            ],
        },
    },
    entry: {
        descriptionParagraphs: [],
        entryType: BookEntryTypeEnum.Root,
        errors: [],
        parent: undefined,
        title: 'all',
    },
    urlBreadcrumb: '',
    fullUrlBreadcrumbs: [],
} satisfies BookTreeNode<BookEntryTypeEnum.Root>;

describe(createBookTreeFromEntries.name, () => {
    it('produces a correct tree', () => {
        assert.deepStrictEqual(createBookTreeFromEntries(exampleTreeInputs).tree, expectedTree);
    });
});

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        const emptyTreeRootNode = createEmptyBookTreeRoot('empty title', []) as any;

        assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<BookTreeNode<BookEntryTypeEnum.Page>>();
        if (doesNodeHaveEntryType(emptyTreeRootNode, BookEntryTypeEnum.Page)) {
            assertTypeOf(emptyTreeRootNode).toEqualTypeOf<BookTreeNode<BookEntryTypeEnum.Page>>();
            assertTypeOf(emptyTreeRootNode.entry.entryType).toEqualTypeOf<
                typeof BookEntryTypeEnum.Page
            >();
            assertTypeOf(emptyTreeRootNode).not.toEqualTypeOf<
                BookTreeNode<BookEntryTypeEnum.Root>
            >();
        }
    });
});

describe(flattenTree.name, () => {
    itCases(flattenTree, [
        {
            it: 'flattens a basic tree',
            input: exampleTree.tree,
            expect: [
                exampleTree.tree,
                exampleTree.tree.children['page-1']!,
                exampleTree.tree.children['page-1']!.children['example-1']!,
                exampleTree.tree.children['page-1']!.children['page-1-child']!,
                exampleTree.tree.children['page-1']!.children['aaaaaaaa']!,
                exampleTree.tree.children['page-2']!,
            ],
        },
    ]);
});
