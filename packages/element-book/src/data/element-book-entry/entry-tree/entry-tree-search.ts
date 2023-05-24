import {filterObject, isTruthy} from '@augment-vir/common';
import {fuzzySearch} from '../../../utilities/search';
import {ElementBookEntry} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookPage} from '../element-book-page/element-book-page';
import {EntryTreeNode, createEmptyEntryTreeRoot} from './entry-tree';
import {addTreeToCache, getTreeFromCache} from './tree-cache';

export function createSearchedTree({
    entries,
    startTree,
    searchQuery,
}: {
    entries: ReadonlyArray<ElementBookEntry>;
    startTree: Readonly<EntryTreeNode<ElementBookEntryTypeEnum.Root>>;
    searchQuery: string;
}): EntryTreeNode {
    const cachedSearchTree = getTreeFromCache(entries, searchQuery);
    if (cachedSearchTree) {
        return cachedSearchTree;
    }

    const newTree = createEmptyEntryTreeRoot('Search Results');

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
        oldTreeNode.entry.entryType !== ElementBookEntryTypeEnum.Root &&
        fuzzySearch({
            searchIn: oldTreeNode.entry.title,
            searchQuery: searchQuery,
        })
    ) {
        newNode.children = oldTreeNode.children;
        return true;
    }

    if ('examples' in oldTreeNode.entry) {
        const filteredExamples = filterObject(oldTreeNode.entry.examples, (exampleName) =>
            fuzzySearch({
                searchIn: exampleName,
                searchQuery,
            }),
        ) as ElementBookPage['examples'];

        const newEntry: ElementBookPage = {
            ...oldTreeNode.entry,
            examples: filteredExamples,
        };

        newNode.entry = newEntry;

        if (Object.values(newEntry.examples).length) {
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
