import {getOrSetFromMap} from '@augment-vir/common';
import {BookEntry} from '../book-entry/book-entry';
import {BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {BookTreeNode} from './book-tree';

const treeCache = new Map<
    ReadonlyArray<BookEntry>,
    Map<string, BookTreeNode<BookEntryTypeEnum.Root>>
>();

export function getTreeFromCache(
    entries: ReadonlyArray<BookEntry>,
    searchString: string,
): BookTreeNode<BookEntryTypeEnum.Root> | undefined {
    return treeCache.get(entries)?.get(searchString);
}

export function addTreeToCache(
    entries: ReadonlyArray<BookEntry>,
    searchString: string,
    tree: BookTreeNode<BookEntryTypeEnum.Root>,
): void {
    getOrSetFromMap(
        treeCache,
        entries,
        () => new Map<string, BookTreeNode<BookEntryTypeEnum.Root>>(),
    ).set(searchString, tree);
}
