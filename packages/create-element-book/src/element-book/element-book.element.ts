import {defineElement, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {ElementBookEntry} from '../element-book-entry/element-book-entry';
import {entryStorage} from '../element-book-entry/entry-storage/entry-storage';
import {emptyTreeNode, EntryTreeNode} from '../element-book-entry/entry-storage/entry-tree';

export const ElementBook = defineElement<{entries?: ReadonlyArray<ElementBookEntry>}>()({
    tagName: 'vir-element-book',
    stateInit: {
        entriesTree: emptyTreeNode,
    },
    initCallback({updateState, state}) {
        entryStorage.watch((newTree) => {
            updateState({entriesTree: newTree});
        });
    },
    renderCallback: ({state}) => {
        return createNavigationTree(0, state.entriesTree);
    },
});

function createNavigationTree(indent: number, tree: EntryTreeNode): TemplateResult[] {
    if (!tree.children) {
        return [];
    }

    return Object.values(tree.children).map((child) => {
        const childTemplates = createNavigationTree(indent + 1, child);

        return html`
            <div class="nav-tree-entry" style="--indent: ${indent};">
                ${child.entry.title} ${childTemplates}
            </div>
        `;
    });
}
