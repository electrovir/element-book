import {ElementBookEntry} from '../element-book-entry';

export type EntryTreeNode = {
    entry: ElementBookEntry;
    children: Record<string, EntryTreeNode>;
};

export const emptyTreeNode: Readonly<EntryTreeNode> = {
    entry: {title: 'entry tree root'} as ElementBookEntry,
    children: {} as Record<string, EntryTreeNode>,
};

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
