import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';
import {
    EntryTreeNode,
    findEntryByBreadcrumbs,
} from '../../../data/book-entry/entry-tree/entry-tree';
import {
    BookFullRoute,
    BookMainRoute,
    ValidBookPaths,
    defaultBookFullRoute,
} from '../../../routing/book-routing';

export function getCurrentTreeEntry(
    entriesTree: EntryTreeNode<BookEntryTypeEnum.Root>,
    paths: Readonly<ValidBookPaths>,
    updateRoutes: (newRoute: Partial<BookFullRoute>) => void,
): EntryTreeNode {
    if (paths[0] === BookMainRoute.Search) {
        return entriesTree;
    }

    const entryTreeNodeByInitialPath = findEntryByBreadcrumbs(paths.slice(1), entriesTree);

    if (!entryTreeNodeByInitialPath) {
        updateRoutes(defaultBookFullRoute);
    }

    const currentEntryTreeNode = findEntryByBreadcrumbs(paths.slice(1), entriesTree);

    if (!currentEntryTreeNode) {
        throw new Error(`Tried to self-correct for invalid path ${paths.join('/')}
                        but failed to do so.`);
    }

    return currentEntryTreeNode;
}
