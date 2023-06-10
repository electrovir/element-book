import {isTruthy} from '@augment-vir/common';
import {fuzzySearch} from '../../../util/search';
import {BookEntry} from '../book-entry';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPage} from '../book-page/book-page';
import {EntryTreeNode, createEmptyEntryTreeRoot} from './entry-tree';
import {addTreeToCache, getTreeFromCache} from './tree-cache';

export function createSearchedTree({
    entries,
    startTree,
    searchQuery,
}: {
    entries: ReadonlyArray<BookEntry>;
    startTree: Readonly<EntryTreeNode<BookEntryTypeEnum.Root>>;
    searchQuery: string;
}): EntryTreeNode {
    const cachedSearchTree = getTreeFromCache(entries, searchQuery);
    if (cachedSearchTree) {
        return cachedSearchTree;
    }

    const newTree = createEmptyEntryTreeRoot('Search Results', []);

    recursivelySearchTree(startTree, newTree, searchQuery);

    addTreeToCache(entries, searchQuery, newTree);
    return newTree;
}

function recursivelySearchTree(
    oldTreeNode: Readonly<EntryTreeNode>,
    newNode: EntryTreeNode,
    searchQuery: string,
): boolean {
    if (
        oldTreeNode.entry.entryType !== BookEntryTypeEnum.Root &&
        fuzzySearch({
            searchIn: oldTreeNode.entry.title,
            searchQuery: searchQuery,
        })
    ) {
        newNode.children = oldTreeNode.children;
        return true;
    }

    if ('examples' in oldTreeNode.entry) {
        const filteredExamples = oldTreeNode.entry.examples.filter((elementExample) =>
            fuzzySearch({
                searchIn: elementExample.title.concat(
                    (elementExample.descriptionParagraphs ?? []).join(''),
                ),
                searchQuery,
            }),
        );

        const newEntry: BookPage = {
            ...oldTreeNode.entry,
            examples: filteredExamples,
        };

        newNode.entry = newEntry;

        if (newEntry.examples.length) {
            return true;
        } else {
            return false;
        }
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
