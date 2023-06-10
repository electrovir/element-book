import {assert} from '@open-wc/testing';
import {BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {BookPage} from '../book-entry/book-page/book-page';
import {defineBookPage} from '../book-entry/book-page/define-book-page';
import {BookTreeNode, createEmptyBookTreeRoot, isBookTreeNodeMarker} from './book-tree';
import {createSearchedTree} from './book-tree-search';

describe(createSearchedTree.name, () => {
    it('creates a new searchedTree', () => {
        const originalTree: BookTreeNode<BookEntryTypeEnum.Root> = createEmptyBookTreeRoot(
            'root',
            [],
        );

        const childA = defineBookPage({
            parent: undefined,
            title: 'child A',
        });

        const children = {
            'child-a': {
                urlBreadcrumb: 'child-a',
                fullUrlBreadcrumbs: ['child-a'],
                children: {
                    'child-c': {
                        urlBreadcrumb: 'child-c',
                        fullUrlBreadcrumbs: [
                            'child-a',
                            'child-c',
                        ],
                        children: {},
                        [isBookTreeNodeMarker]: true,
                        manuallyAdded: true,
                        entry: defineBookPage({
                            parent: childA,
                            title: 'child-c',
                            elementExamplesCallback({defineExample}) {
                                defineExample({
                                    renderCallback() {
                                        return 'yo';
                                    },
                                    title: 'example A',
                                });
                            },
                        }),
                    },
                },
                entry: childA,
                [isBookTreeNodeMarker]: true,
                manuallyAdded: true,
            },
            'child-b': {
                urlBreadcrumb: 'child-b',
                fullUrlBreadcrumbs: ['child-b'],
                children: {},
                entry: defineBookPage({
                    parent: undefined,
                    title: 'child-b',
                }),
                [isBookTreeNodeMarker]: true,
                manuallyAdded: true,
            },
        } as const satisfies BookTreeNode['children'];

        originalTree.children = children;

        const searchedTree = createSearchedTree({
            entries: [],
            searchQuery: 'A',
            startTree: originalTree,
        });

        assert.containsAllKeys(searchedTree.children, ['child-a']);
        assert.containsAllKeys(searchedTree.children['child-a']!.children, ['child-c']);
        assert.containsAllKeys(searchedTree.children['child-a']!.children['child-c']!.entry, [
            'elementExamples',
        ]);
        assert.containsAllKeys(
            (searchedTree.children['child-a']!.children['child-c']!.entry as BookPage)
                .elementExamples,
            ['example-a'],
        );
        assert.doesNotHaveAnyKeys(searchedTree.children, ['child-c']);

        assert.containsAllKeys(originalTree.children, [
            'child-a',
            'child-b',
        ]);
    });
});
