import {collapseWhiteSpace, isLengthAtLeast, typedHasProperties} from '@augment-vir/common';
import {ElementBookEntry} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {addTreeToCache, getTreeFromCache} from './tree-cache';

export function doesNodeHaveEntryType<EntryType extends ElementBookEntryTypeEnum>(
    node: EntryTreeNode<any>,
    entryType: EntryType,
): node is EntryTreeNode<EntryType> {
    return node.entry.entryType === entryType;
}

const markerKeyName = 'isElementBookEntryTreeNode';

export type EntryTreeNode<EntryType extends ElementBookEntryTypeEnum = any> = {
    [markerKeyName]: true;
    entry: Extract<ElementBookEntry, {entryType: EntryType}>;
    /** Breadcrumb is different from entry.title because it's modified to support URLs. */
    breadcrumb: string;
    children: Record<string, EntryTreeNode>;
};

export function isEntryNode<SpecificType extends ElementBookEntryTypeEnum>(
    input: unknown,
    entryType: SpecificType,
): input is EntryTreeNode<SpecificType> {
    return !!(
        typedHasProperties(input, [
            markerKeyName,
            'entry',
        ]) &&
        input[markerKeyName] &&
        (input.entry as ElementBookEntry).entryType === entryType
    );
}

export function createEmptyEntryTreeRoot(
    title: string | undefined,
): EntryTreeNode<ElementBookEntryTypeEnum.Root> {
    const rootNode: Readonly<EntryTreeNode<ElementBookEntryTypeEnum.Root>> = {
        [markerKeyName]: true,
        entry: {
            entryType: ElementBookEntryTypeEnum.Root,
            title: title || 'Everything',
            parent: undefined,
        },
        breadcrumb: '',
        children: {} as Record<string, EntryTreeNode>,
    };

    return rootNode;
}

export function titleToBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}

export function entriesToTree(
    entries: ReadonlyArray<ElementBookEntry>,
    everythingTitle: string | undefined,
): EntryTreeNode<ElementBookEntryTypeEnum.Root> {
    const baseTree = createBaseTree(entries, everythingTitle);

    return baseTree;
}

function createBaseTree(
    entries: ReadonlyArray<ElementBookEntry>,
    everythingTitle: string | undefined,
) {
    const cachedTree = getTreeFromCache(entries, '');
    if (cachedTree) {
        return cachedTree;
    }

    const tree = createEmptyEntryTreeRoot(everythingTitle);

    entries.forEach((newEntry) => {
        /**
         * The type for newEntry does not include Error but if errors occur during entry definition
         * they will be replaced with errors.
         */
        if (newEntry instanceof Error) {
            throw newEntry;
        }

        const immediateParent = traverseToImmediateParent(newEntry, tree);
        const breadcrumb = titleToBreadcrumb(newEntry.title);

        if (breadcrumb in immediateParent.children) {
            throw new Error(
                `Cannot create duplicate entry '${breadcrumb}'${
                    immediateParent.breadcrumb ? ` in parent '${immediateParent.breadcrumb}'.` : ''
                }`,
            );
        }

        const newNode: EntryTreeNode = {
            [markerKeyName]: true,
            children: {},
            breadcrumb,
            entry: newEntry,
        };

        immediateParent.children[breadcrumb] = newNode;
    });

    addTreeToCache(entries, '', tree);

    return tree;
}

function traverseToImmediateParent(
    entry: Readonly<ElementBookEntry>,
    currentTree: Readonly<EntryTreeNode>,
) {
    const topDownAncestryChain = listBreadcrumbs(entry)
        // reverse so we get the top most ancestor first in the list
        .reverse();
    const immediateParentNode = topDownAncestryChain.reduce((currentAncestor, nextBreadcrumb) => {
        const nextAncestor = currentAncestor.children[nextBreadcrumb];
        if (!nextAncestor) {
            throw new Error(
                `Failed to find parent ElementBookEntry by name of '${nextBreadcrumb}' in entry '${currentAncestor.entry.title}'`,
            );
        }
        return nextAncestor;
    }, currentTree);

    return immediateParentNode;
}

export function listBreadcrumbs(entry: ElementBookEntry, includeSelf?: boolean): string[] {
    const entryBreadcrumb = titleToBreadcrumb(entry.title);

    if (entry.parent) {
        return [
            titleToBreadcrumb(entry.parent.title),
            ...listBreadcrumbs(entry.parent, false),
        ].concat(includeSelf ? [entryBreadcrumb] : []);
    } else if (includeSelf) {
        return [entryBreadcrumb];
    } else {
        return [];
    }
}

export function findEntryByBreadcrumbs(
    breadcrumbs: ReadonlyArray<string>,
    tree: Readonly<EntryTreeNode>,
): Readonly<EntryTreeNode> | undefined {
    if (!isLengthAtLeast(breadcrumbs, 1)) {
        return tree;
    }

    const nextBreadcrumb = breadcrumbs[0];

    const nextTree = tree.children[nextBreadcrumb];

    if (!nextTree) {
        return undefined;
    }

    return findEntryByBreadcrumbs(breadcrumbs.slice(1), nextTree);
}
