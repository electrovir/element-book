import {PropertyValueType, isLengthAtLeast, typedHasProperties} from '@augment-vir/common';
import {BookEntry, isBookEntry} from '../book-entry/book-entry';
import {AnyBookEntryType, BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {listUrlBreadcrumbs, titleToUrlBreadcrumb} from '../book-entry/url-breadcrumbs';
import {bookEntryVerifiers} from '../book-entry/verify-book-entry';
import {addTreeToCache, getTreeFromCache} from './book-tree-cache';

export function doesNodeHaveEntryType<EntryType extends BookEntryTypeEnum>(
    node: BookTreeNode<any>,
    entryType: EntryType,
): node is BookTreeNode<EntryType> {
    return node.entry.entryType === entryType;
}

export const isBookTreeNodeMarker = '_isBookTreeNode';

type InternalBookTreeNodeType<Entry> = {
    [isBookTreeNodeMarker]: true;
    entry: Entry;
    /** UrlBreadcrumb is different from entry.title because it's modified to support URLs. */
    urlBreadcrumb: string;
    fullUrlBreadcrumbs: ReadonlyArray<string>;
    children: Record<string, BookTreeNode>;
    /**
     * False when an entry has been added by traversing manually added parents. True when the entry
     * was added as an explicit entry.
     */
    manuallyAdded: boolean;
};

export type BookTreeNode<EntryTypes extends BookEntryTypeEnum = AnyBookEntryType> =
    | PropertyValueType<{
          [EntryType in EntryTypes]: InternalBookTreeNodeType<
              Extract<BookEntry, {entryType: EntryType}>
          >;
      }>
    | (AnyBookEntryType extends EntryTypes ? InternalBookTreeNodeType<BookEntry> : never);

export function isBookTreeNode<SpecificType extends BookEntryTypeEnum>(
    input: unknown,
    entryType: SpecificType,
): input is BookTreeNode<SpecificType> {
    return !!(
        typedHasProperties(input, [
            isBookTreeNodeMarker,
            'entry',
        ]) &&
        input[isBookTreeNodeMarker] &&
        (input.entry as BookEntry).entryType === entryType
    );
}

export function createEmptyBookTreeRoot(
    title: string | undefined,
    descriptionParagraphs: ReadonlyArray<string>,
): BookTreeNode<BookEntryTypeEnum.Root> {
    const rootNode: Readonly<BookTreeNode<BookEntryTypeEnum.Root>> = {
        [isBookTreeNodeMarker]: true,
        entry: {
            entryType: BookEntryTypeEnum.Root,
            title: title || 'Everything',
            parent: undefined,
            errors: [],
            descriptionParagraphs,
        },
        urlBreadcrumb: '',
        fullUrlBreadcrumbs: [],
        children: {} as Record<string, BookTreeNode>,
        manuallyAdded: true,
    };

    return rootNode;
}

export function entriesToTree({
    entries,
    everythingTitle,
    everythingDescriptionParagraphs,
    debug,
}: {
    entries: ReadonlyArray<BookEntry>;
    everythingTitle: string | undefined;
    everythingDescriptionParagraphs: ReadonlyArray<string>;
    debug: boolean;
}): BookTreeNode<BookEntryTypeEnum.Root> {
    const cachedTree = getTreeFromCache(entries, '');
    if (cachedTree) {
        return cachedTree;
    }

    const tree = createEmptyBookTreeRoot(everythingTitle, everythingDescriptionParagraphs);

    entries.forEach((newEntry) => addEntryToTree({tree, newEntry, debug, manuallyAdded: true}));

    addTreeToCache(entries, '', tree);

    if (debug) {
        console.info('element-book tree:', tree);
    }

    return tree;
}

function getOrAddImmediateParent(
    tree: BookTreeNode<BookEntryTypeEnum.Root>,
    entry: BookEntry,
    debug: boolean,
): BookTreeNode {
    const immediateParent = traverseToImmediateParent(entry, tree);

    if (immediateParent) {
        return immediateParent;
    }

    if (debug) {
        console.info(`parent of ${entry.title} not found in tree; adding it now.`);
    }

    addEntryToTree({tree, newEntry: entry.parent, debug, manuallyAdded: false});
    const immediateParentAfterAdding = traverseToImmediateParent(entry, tree);

    if (!immediateParentAfterAdding) {
        throw new Error(
            `Failed to find node despite having just added it: ${listUrlBreadcrumbs(entry, false)}`,
        );
    }

    return immediateParentAfterAdding;
}

function addEntryToTree({
    tree,
    newEntry,
    debug,
    manuallyAdded,
}: {
    tree: BookTreeNode<BookEntryTypeEnum.Root>;
    newEntry: BookEntry;
    debug: boolean;
    manuallyAdded: boolean;
}) {
    const errors = bookEntryVerifiers[newEntry.entryType](newEntry);

    newEntry.errors.push(...errors);

    const immediateParent = getOrAddImmediateParent(tree, newEntry, debug);

    const newEntryUrlBreadcrumb = titleToUrlBreadcrumb(newEntry.title);

    const existingChild = immediateParent.children[newEntryUrlBreadcrumb];

    if (existingChild) {
        // ignores multiple entries that have been added by following parent chains
        if (manuallyAdded) {
            if (existingChild.manuallyAdded) {
                existingChild.entry.errors.push(
                    new Error(
                        `Cannot create duplicate entry '${newEntryUrlBreadcrumb}'${
                            immediateParent.urlBreadcrumb
                                ? ` in parent '${immediateParent.urlBreadcrumb}'.`
                                : ''
                        }`,
                    ),
                );

                return;
            }

            existingChild.manuallyAdded = true;
        }

        return;
    }

    const newNode: BookTreeNode = {
        [isBookTreeNodeMarker]: true,
        children: {},
        urlBreadcrumb: newEntryUrlBreadcrumb,
        fullUrlBreadcrumbs: [
            ...immediateParent.fullUrlBreadcrumbs,
            newEntryUrlBreadcrumb,
        ],
        entry: newEntry,
        manuallyAdded,
    };

    immediateParent.children[newEntryUrlBreadcrumb] = newNode;
    bookEntryVerifiers;

    if (
        isBookEntry(newEntry, BookEntryTypeEnum.Page) &&
        Object.values(newEntry.elementExamples ?? {}).length
    ) {
        Object.values(newEntry.elementExamples ?? {}).forEach((elementExample) =>
            addEntryToTree({tree, newEntry: elementExample, debug, manuallyAdded}),
        );
    }
}

function traverseToImmediateParent(
    entry: Readonly<BookEntry>,
    currentTree: Readonly<BookTreeNode>,
) {
    const topDownAncestryChain = listUrlBreadcrumbs(entry, false)
        // reverse so we get the top most ancestor first in the list
        .reverse();
    const immediateParentNode: BookTreeNode | undefined = topDownAncestryChain.reduce(
        (currentAncestor, nextBreadcrumb) => {
            if (!currentAncestor) {
                return undefined;
            }

            return currentAncestor.children[nextBreadcrumb];
        },
        currentTree as typeof currentTree | undefined,
    );

    return immediateParentNode;
}

export function findEntryByBreadcrumbs(
    breadcrumbs: ReadonlyArray<string>,
    tree: Readonly<BookTreeNode>,
): Readonly<BookTreeNode> | undefined {
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

export function getSortedNodeChildren(
    nodeA: Readonly<BookTreeNode>,
    nodeB: Readonly<BookTreeNode>,
): number {
    if (nodeA.entry.entryType !== nodeB.entry.entryType) {
        if (isBookEntry(nodeA.entry, BookEntryTypeEnum.ElementExample)) {
            return -1;
        }
        if (isBookEntry(nodeB.entry, BookEntryTypeEnum.ElementExample)) {
            return 1;
        }
    }

    return nodeA.entry.title.localeCompare(nodeB.entry.title);
}

export function flattenTree(node: Readonly<BookTreeNode>): BookTreeNode[] {
    const entries: BookTreeNode[] = [
        node,
        ...Object.values(node.children)
            .sort(getSortedNodeChildren)
            .map((child) => flattenTree(child)),
    ].flat();

    return entries;
}
