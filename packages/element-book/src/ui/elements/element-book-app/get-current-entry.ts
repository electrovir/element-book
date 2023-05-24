import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {
    EntryTreeNode,
    findEntryByBreadcrumbs,
} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {
    ElementBookFullRoute,
    ElementBookMainRoute,
    ValidElementBookPaths,
    defaultElementBookFullRoute,
} from '../../../routing/element-book-routing';

export function getCurrentTreeEntry(
    entriesTree: EntryTreeNode<ElementBookEntryTypeEnum.Root>,
    paths: Readonly<ValidElementBookPaths>,
    updateRoutes: (newRoute: Partial<ElementBookFullRoute>) => void,
): EntryTreeNode {
    if (paths[0] === ElementBookMainRoute.Search) {
        return entriesTree;
    }

    const entryTreeNodeByInitialPath = findEntryByBreadcrumbs(paths.slice(1), entriesTree);

    if (!entryTreeNodeByInitialPath) {
        updateRoutes(defaultElementBookFullRoute);
    }

    const currentEntryTreeNode = findEntryByBreadcrumbs(paths.slice(1), entriesTree);

    if (!currentEntryTreeNode) {
        throw new Error(`Tried to self-correct for invalid path ${paths.join('/')}
                        but failed to do so.`);
    }

    return currentEntryTreeNode;
}
