import {assert} from '@open-wc/testing';
import {defineElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookPage, defineElementBookPage} from '../element-book-page/element-book-page';
import {insertElementExample} from '../element-book-page/element-book-page-example';
import {EntryTreeNode, createEmptyEntryTreeRoot} from './entry-tree';
import {createSearchedTree} from './entry-tree-search';

describe(createSearchedTree.name, () => {
    it('creates a new searchedTree', () => {
        const originalTree: EntryTreeNode<ElementBookEntryTypeEnum.Root> =
            createEmptyEntryTreeRoot('root');

        const childA = defineElementBookChapter({
            parent: undefined,
            title: 'childA',
        });

        const children = {
            childA: {
                breadcrumb: 'childA',
                children: {
                    childC: {
                        breadcrumb: 'childC',
                        children: {},
                        isElementBookEntryTreeNode: true,
                        entry: defineElementBookPage({
                            parent: childA,
                            title: 'childC',
                        }),
                    },
                },
                entry: childA,
                isElementBookEntryTreeNode: true,
            },
            childB: {
                breadcrumb: 'childB',
                children: {},
                entry: defineElementBookPage({
                    parent: undefined,
                    title: 'childB',
                }),
                isElementBookEntryTreeNode: true,
            },
        } as const satisfies EntryTreeNode['children'];

        originalTree.children = children;

        insertElementExample({
            parent: children.childA.children.childC.entry,
            renderCallback() {
                return 'yo';
            },
            title: 'exampleA',
        });

        const searchedTree = createSearchedTree({
            entries: [],
            searchQuery: 'A',
            startTree: originalTree,
        });

        assert.containsAllKeys(searchedTree.children, ['childA']);
        assert.containsAllKeys(searchedTree.children.childA!.children, ['childC']);
        assert.containsAllKeys(searchedTree.children.childA!.children.childC!.entry, ['examples']);
        assert.containsAllKeys(
            (searchedTree.children.childA!.children.childC!.entry as ElementBookPage).examples,
            ['exampleA'],
        );
        assert.doesNotHaveAnyKeys(searchedTree.children, ['childB']);

        assert.containsAllKeys(originalTree.children, [
            'childA',
            'childB',
        ]);
    });
});
