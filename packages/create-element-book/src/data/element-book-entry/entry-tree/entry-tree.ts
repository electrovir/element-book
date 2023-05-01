import {ensureType, isLengthAtLeast} from '@augment-vir/common';
import {ReadonlyDeep} from 'type-fest';
import {ElementBookEntry} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export function doesNodeHaveEntryType<EntryType extends ElementBookEntryTypeEnum>(
    node: EntryTreeNode<any>,
    type: EntryType,
): node is EntryTreeNode<EntryType> {
    return node.entry.type === type;
}

export type EntryTreeNode<EntryType extends ElementBookEntryTypeEnum = ElementBookEntryTypeEnum> = {
    entry: Extract<ElementBookEntry, {type: EntryType}>;
    children: Record<string, EntryTreeNode>;
};

export const entryTreeRootNode: Readonly<EntryTreeNode> = ensureType<
    Readonly<EntryTreeNode<ElementBookEntryTypeEnum.Root>>
>({
    entry: {
        type: ElementBookEntryTypeEnum.Root,
        title: 'element book tree root',
        parent: undefined,
    },
    children: {} as Record<string, EntryTreeNode>,
});

export function entriesToTree(entries: ReadonlyArray<ElementBookEntry>) {
    const tree = entryTreeRootNode;

    entries.forEach((newEntry) => {
        const immediateParent = traverseToImmediateParent(newEntry, tree);

        if (newEntry.title in immediateParent.children) {
            throw new Error(
                `Cannot create duplicate entry titled '${newEntry.title}' in parent '${immediateParent.entry.title}'.`,
            );
        }

        const newNode: EntryTreeNode = {
            children: {},
            entry: newEntry,
        };

        immediateParent.children[newEntry.title] = newNode;
    });

    return tree;
}

export function traverseToImmediateParent(
    entry: Readonly<ElementBookEntry>,
    currentTree: Readonly<EntryTreeNode>,
) {
    const topDownAncestryChain = listTitleBreadcrumbs(entry)
        // reverse so we get the top most ancestor first in the list
        .reverse();
    const immediateParentNode = topDownAncestryChain.reduce((currentParent, currentTitle) => {
        const nextParent = currentParent.children[currentTitle];
        if (!nextParent) {
            throw new Error(
                `Failed to find parent ElementBookEntry by name of '${currentTitle}' in entry '${currentParent.entry.title}'`,
            );
        }
        return nextParent;
    }, currentTree);

    return immediateParentNode;
}

export function listTitleBreadcrumbs(entry: ElementBookEntry, includeSelf?: boolean): string[] {
    if (entry.parent) {
        return [
            entry.parent.title,
            ...listTitleBreadcrumbs(entry.parent, false),
        ].concat(includeSelf ? [entry.title] : []);
    } else if (includeSelf) {
        return [entry.title];
    } else {
        return [];
    }
}

export function findEntryByBreadcrumbs(
    titles: ReadonlyArray<string>,
    tree: ReadonlyDeep<EntryTreeNode>,
): ReadonlyDeep<EntryTreeNode> {
    if (!isLengthAtLeast(titles, 1)) {
        return tree;
    }

    const nextEntryTitle = titles[0];

    const nextTree = tree.children[nextEntryTitle];

    if (!nextTree) {
        throw new Error(`Failed to find '${tree.entry.title}' > '${nextEntryTitle}'.`);
    }

    return findEntryByBreadcrumbs(titles.slice(1), nextTree);
}
