import {getOrSetFromMap} from '@augment-vir/common';
import {ElementBookEntry} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {EntryTreeNode} from './entry-tree';

const treeCache = new Map<
    ReadonlyArray<ElementBookEntry>,
    Map<string, EntryTreeNode<ElementBookEntryTypeEnum.Root>>
>();

export function getTreeFromCache(
    entries: ReadonlyArray<ElementBookEntry>,
    searchString: string,
): EntryTreeNode<ElementBookEntryTypeEnum.Root> | undefined {
    return treeCache.get(entries)?.get(searchString);
}

export function addTreeToCache(
    entries: ReadonlyArray<ElementBookEntry>,
    searchString: string,
    tree: EntryTreeNode<ElementBookEntryTypeEnum.Root>,
): void {
    getOrSetFromMap(
        treeCache,
        entries,
        () => new Map<string, EntryTreeNode<ElementBookEntryTypeEnum.Root>>(),
    ).set(searchString, tree);
}
