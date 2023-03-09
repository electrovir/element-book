import {ensureType, isLengthAtLeast} from '@augment-vir/common';
import {ReadonlyDeep} from 'type-fest';
import {ElementBookEntry, ElementBookRoot} from '../element-book-entry';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export type EntryTreeNode<EntryType extends ElementBookEntry = ElementBookEntry> = {
    entry: EntryType;
    children: Record<string, EntryTreeNode>;
};

export const emptyTreeNode: Readonly<EntryTreeNode> = ensureType<
    Readonly<EntryTreeNode<ElementBookRoot>>
>({
    entry: {
        type: ElementBookEntryTypeEnum.Root,
        title: 'element book tree root',
        parent: undefined,
    },
    children: {} as Record<string, EntryTreeNode>,
});

export function traverseToImmediateParent(
    entry: Readonly<ElementBookEntry>,
    currentTree: Readonly<EntryTreeNode>,
) {
    const topDownAncestryChain = findTitleAncestry(entry)
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

export function findTitleAncestry(entry: ElementBookEntry): string[] {
    if (entry.parent) {
        return [
            entry.parent.title,
            ...findTitleAncestry(entry.parent),
        ];
    } else {
        return [];
    }
}

export function findEntryByTitles(
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

    return findEntryByTitles(titles.slice(1), nextTree);
}
