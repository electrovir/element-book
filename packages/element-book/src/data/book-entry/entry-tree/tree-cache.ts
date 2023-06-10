import {getOrSetFromMap} from '@augment-vir/common';
import {BookEntry} from '../book-entry';
import {BookEntryTypeEnum} from '../book-entry-type';
import {EntryTreeNode} from './entry-tree';

const treeCache = new Map<
    ReadonlyArray<BookEntry>,
    Map<string, EntryTreeNode<BookEntryTypeEnum.Root>>
>();

export function getTreeFromCache(
    entries: ReadonlyArray<BookEntry>,
    searchString: string,
): EntryTreeNode<BookEntryTypeEnum.Root> | undefined {
    return treeCache.get(entries)?.get(searchString);
}

export function addTreeToCache(
    entries: ReadonlyArray<BookEntry>,
    searchString: string,
    tree: EntryTreeNode<BookEntryTypeEnum.Root>,
): void {
    getOrSetFromMap(
        treeCache,
        entries,
        () => new Map<string, EntryTreeNode<BookEntryTypeEnum.Root>>(),
    ).set(searchString, tree);
}
