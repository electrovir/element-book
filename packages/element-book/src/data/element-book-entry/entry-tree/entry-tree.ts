import {collapseWhiteSpace, isLengthAtLeast, typedHasProperties} from '@augment-vir/common';
import {ElementBookEntry} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export function doesNodeHaveEntryType<EntryType extends ElementBookEntryTypeEnum>(
    node: EntryTreeNode<any>,
    type: EntryType,
): node is EntryTreeNode<EntryType> {
    return node.entry.type === type;
}

const markerKeyName = 'isElementBookEntryTreeNode';

export type EntryTreeNode<EntryType extends ElementBookEntryTypeEnum = ElementBookEntryTypeEnum> = {
    [markerKeyName]: true;
    entry: Extract<ElementBookEntry, {type: EntryType}>;
    breadcrumb: string;
    children: Record<string, EntryTreeNode>;
};

export function isEntryNode<SpecificType extends ElementBookEntryTypeEnum>(
    input: unknown,
    type: SpecificType,
): input is EntryTreeNode<SpecificType> {
    return !!(
        typedHasProperties(input, [
            markerKeyName,
            'entry',
        ]) &&
        input[markerKeyName] &&
        (input.entry as any).type === type
    );
}

export function createEmptyEntryTreeRoot(title: string | undefined): EntryTreeNode {
    const rootNode: Readonly<EntryTreeNode<ElementBookEntryTypeEnum.Root>> = {
        [markerKeyName]: true,
        entry: {
            type: ElementBookEntryTypeEnum.Root,
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
) {
    const tree = createEmptyEntryTreeRoot(everythingTitle);

    entries.forEach((newEntry) => {
        const immediateParent = traverseToImmediateParent(newEntry, tree);
        const breadcrumb = titleToBreadcrumb(newEntry.title);

        if (breadcrumb in immediateParent.children) {
            throw new Error(
                `Cannot create duplicate entry '${breadcrumb}' in parent '${immediateParent.breadcrumb}'.`,
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
