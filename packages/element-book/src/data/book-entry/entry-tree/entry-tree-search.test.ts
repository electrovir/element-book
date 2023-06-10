import {assert} from '@open-wc/testing';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPage} from '../book-page/book-page';
import {defineBookPage} from '../book-page/define-book-page';
import {EntryTreeNode, createEmptyEntryTreeRoot} from './entry-tree';
import {createSearchedTree} from './entry-tree-search';

describe(createSearchedTree.name, () => {
    it('creates a new searchedTree', () => {
        const originalTree: EntryTreeNode<BookEntryTypeEnum.Root> = createEmptyEntryTreeRoot(
            'root',
            [],
        );

        const childA = defineBookPage({
            parent: undefined,
            title: 'childA',
        });

        const children = {
            childA: {
                urlBreadcrumb: 'childA',
                children: {
                    childC: {
                        urlBreadcrumb: 'childC',
                        children: {},
                        _isBookEntryTreeNode: true,
                        entry: defineBookPage({
                            parent: childA,
                            title: 'childC',
                            elementExamplesCallback({defineExample}) {
                                defineExample({
                                    renderCallback() {
                                        return 'yo';
                                    },
                                    title: 'exampleA',
                                });
                            },
                        }),
                    },
                },
                entry: childA,
                _isBookEntryTreeNode: true,
            },
            childB: {
                urlBreadcrumb: 'childB',
                children: {},
                entry: defineBookPage({
                    parent: undefined,
                    title: 'childB',
                }),
                _isBookEntryTreeNode: true,
            },
        } as const satisfies EntryTreeNode['children'];

        originalTree.children = children;

        const searchedTree = createSearchedTree({
            entries: [],
            searchQuery: 'A',
            startTree: originalTree,
        });

        assert.containsAllKeys(searchedTree.children, ['childA']);
        assert.containsAllKeys(searchedTree.children.childA!.children, ['childC']);
        assert.containsAllKeys(searchedTree.children.childA!.children.childC!.entry, ['examples']);
        assert.containsAllKeys(
            (searchedTree.children.childA!.children.childC!.entry as BookPage).examples,
            ['exampleA'],
        );
        assert.doesNotHaveAnyKeys(searchedTree.children, ['childB']);

        assert.containsAllKeys(originalTree.children, [
            'childA',
            'childB',
        ]);
    });
});
