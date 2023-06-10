import {isLengthAtLeast, typedHasProperties} from '@augment-vir/common';
import {BookEntry} from '../book-entry';
import {BookEntryTypeEnum} from '../book-entry-type';
import {listBreadcrumbs, titleToBreadcrumb} from '../breadcrumbs';
import {addTreeToCache, getTreeFromCache} from './tree-cache';

export function doesNodeHaveEntryType<EntryType extends BookEntryTypeEnum>(
    node: EntryTreeNode<any>,
    entryType: EntryType,
): node is EntryTreeNode<EntryType> {
    return node.entry.entryType === entryType;
}

const markerKeyName = '_isBookEntryTreeNode';

export type EntryTreeNode<EntryType extends BookEntryTypeEnum = any> = {
    [markerKeyName]: true;
    entry: Extract<BookEntry, {entryType: EntryType}>;
    /** UrlBreadcrumb is different from entry.title because it's modified to support URLs. */
    urlBreadcrumb: string;
    children: Record<string, EntryTreeNode>;
};

export function isEntryNode<SpecificType extends BookEntryTypeEnum>(
    input: unknown,
    entryType: SpecificType,
): input is EntryTreeNode<SpecificType> {
    return !!(
        typedHasProperties(input, [
            markerKeyName,
            'entry',
        ]) &&
        input[markerKeyName] &&
        (input.entry as BookEntry).entryType === entryType
    );
}

export function createEmptyEntryTreeRoot(
    title: string | undefined,
    descriptionParagraphs: ReadonlyArray<string>,
): EntryTreeNode<BookEntryTypeEnum.Root> {
    const rootNode: Readonly<EntryTreeNode<BookEntryTypeEnum.Root>> = {
        [markerKeyName]: true,
        entry: {
            entryType: BookEntryTypeEnum.Root,
            title: title || 'Everything',
            parent: undefined,
            errors: [],
            descriptionParagraphs,
        },
        urlBreadcrumb: '',
        children: {} as Record<string, EntryTreeNode>,
    };

    return rootNode;
}

export function entriesToTree(
    entries: ReadonlyArray<BookEntry>,
    everythingTitle: string | undefined,
    everythingDescriptionParagraphs: ReadonlyArray<string>,
): EntryTreeNode<BookEntryTypeEnum.Root> {
    const baseTree = createBaseTree(entries, everythingTitle, everythingDescriptionParagraphs);

    return baseTree;
}

function createBaseTree(
    entries: ReadonlyArray<BookEntry>,
    everythingTitle: string | undefined,
    everythingDescriptionParagraphs: ReadonlyArray<string>,
) {
    const cachedTree = getTreeFromCache(entries, '');
    if (cachedTree) {
        return cachedTree;
    }

    const tree = createEmptyEntryTreeRoot(everythingTitle, everythingDescriptionParagraphs);

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
                    immediateParent.urlBreadcrumb
                        ? ` in parent '${immediateParent.urlBreadcrumb}'.`
                        : ''
                }`,
            );
        }

        const newNode: EntryTreeNode = {
            [markerKeyName]: true,
            children: {},
            urlBreadcrumb: breadcrumb,
            entry: newEntry,
        };

        immediateParent.children[breadcrumb] = newNode;
    });

    addTreeToCache(entries, '', tree);

    return tree;
}

function traverseToImmediateParent(
    entry: Readonly<BookEntry>,
    currentTree: Readonly<EntryTreeNode>,
) {
    const topDownAncestryChain = listBreadcrumbs(entry, false)
        // reverse so we get the top most ancestor first in the list
        .reverse();
    const immediateParentNode = topDownAncestryChain.reduce((currentAncestor, nextBreadcrumb) => {
        const nextAncestor = currentAncestor.children[nextBreadcrumb];
        if (!nextAncestor) {
            throw new Error(
                `Failed to find parent BookEntry by name of '${nextBreadcrumb}' in entry '${currentAncestor.entry.title}'`,
            );
        }
        return nextAncestor;
    }, currentTree);

    return immediateParentNode;
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
