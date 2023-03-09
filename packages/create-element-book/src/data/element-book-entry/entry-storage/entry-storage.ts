import {createSimpleObservable} from '../../../augments/simple-observable';
import {ElementBookEntry} from '../element-book-entry';
import {emptyTreeNode, EntryTreeNode, traverseToImmediateParent} from './entry-tree';

export const entryStorage = createSimpleObservable<EntryTreeNode>(emptyTreeNode);

export function addEntry(newEntry: Readonly<ElementBookEntry>) {
    if (!newEntry.title) {
        throw new Error(`Cannot have an elementBook entry with an empty title.`);
    }

    const currentTree = entryStorage.readCopy();

    const immediateParent = traverseToImmediateParent(newEntry, currentTree);

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

    entryStorage.update(currentTree);
}
