import {makeWritable, typedHasProperties} from '@augment-vir/common';
import {BookEntry, isBookEntry} from '../book-entry/book-entry';
import {BookEntryTypeEnum} from '../book-entry/book-entry-type';
import {listUrlBreadcrumbs, titleToUrlBreadcrumb} from '../book-entry/url-breadcrumbs';
import {bookEntryVerifiers} from '../book-entry/verify-book-entry';
import {BookTree, BookTreeNode, isBookTreeNodeMarker} from './book-tree-node';
import {addTreeToCache, getTreeFromCache} from './tree-cache';

export function doesNodeHaveEntryType<EntryType extends BookEntryTypeEnum>(
    node: BookTreeNode<any>,
    entryType: EntryType,
): node is BookTreeNode<EntryType> {
    return node.entry.entryType === entryType;
}

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
            descriptionParagraphs: makeWritable(descriptionParagraphs),
        },
        urlBreadcrumb: '',
        fullUrlBreadcrumbs: [],
        children: {} as Record<string, BookTreeNode>,
        manuallyAdded: true,
    };

    return rootNode;
}

export function createBookTreeFromEntries({
    entries,
    everythingTitle,
    everythingDescriptionParagraphs,
    debug,
}: {
    entries: ReadonlyArray<BookEntry>;
    everythingTitle: string | undefined;
    everythingDescriptionParagraphs: ReadonlyArray<string>;
    debug: boolean;
}): BookTree {
    const cachedTree = getTreeFromCache(entries);
    if (cachedTree) {
        return cachedTree;
    }

    const tree = createEmptyBookTreeRoot(everythingTitle, everythingDescriptionParagraphs);

    entries.forEach((newEntry) => addEntryToTree({tree, newEntry, debug, manuallyAdded: true}));

    const flattenedNodes = flattenTree(tree);

    const bookTree: BookTree = {
        tree,
        flattenedNodes,
    };

    addTreeToCache(entries, bookTree);

    if (debug) {
        console.info('element-book tree:', tree);
    }

    return bookTree;
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
                        `Cannot create duplicate '${newEntryUrlBreadcrumb}'${
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
    const hasErrors: boolean = !!node.entry.errors.length;

    const childNodes = hasErrors
        ? []
        : Object.values(node.children)
              .sort(getSortedNodeChildren)
              .map((child) => flattenTree(child));

    const entries: BookTreeNode[] = [
        node,
        ...childNodes,
    ].flat();

    return entries;
}
