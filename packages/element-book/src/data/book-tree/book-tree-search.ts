import {isTruthy} from '@augment-vir/common';
import {fuzzySearch} from '../../util/search';
import {BookEntry} from '../book-entry/book-entry';
import {BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {BookTreeNode, createEmptyBookTreeRoot} from './book-tree';
import {addTreeToCache, getTreeFromCache} from './book-tree-cache';

export function createSearchedTree({
    entries,
    startTree,
    searchQuery,
}: {
    entries: ReadonlyArray<BookEntry>;
    startTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>;
    searchQuery: string;
}): BookTreeNode {
    const cachedSearchTree = getTreeFromCache(entries, searchQuery);
    if (cachedSearchTree) {
        return cachedSearchTree;
    }

    const newTree = createEmptyBookTreeRoot('Search Results', []);

    recursivelySearchTree(startTree, newTree, searchQuery);

    addTreeToCache(entries, searchQuery, newTree);
    return newTree;
}

function recursivelySearchTree(
    oldTreeNode: Readonly<BookTreeNode>,
    newNode: BookTreeNode,
    searchQuery: string,
): boolean {
    if (
        oldTreeNode.entry.entryType !== BookEntryTypeEnum.Root &&
        fuzzySearch({
            searchIn: [
                oldTreeNode.entry.title,
                ...oldTreeNode.entry.descriptionParagraphs,
            ].join(' '),
            searchQuery: searchQuery,
        })
    ) {
        newNode.children = oldTreeNode.children;
        return true;
    }

    const searchedChildEntries = Object.entries(oldTreeNode.children)
        .map(
            ([
                childName,
                childNode,
            ]) => {
                const newChildNode = {
                    ...childNode,
                    children: {},
                };
                if (recursivelySearchTree(childNode, newChildNode, searchQuery)) {
                    return [
                        childName,
                        newChildNode,
                    ];
                } else {
                    return undefined;
                }
            },
        )
        .filter(isTruthy);

    if (searchedChildEntries.length) {
        newNode.children = Object.fromEntries(searchedChildEntries);
        return true;
    } else {
        return false;
    }
}
