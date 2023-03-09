import {assign, css, defineElement, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {EntryTreeNode} from '../../data/element-book-entry/entry-storage/entry-tree';
import {ElementBookRouter} from '../../routing/element-book-routing';
import {VirElementBookRouteLink} from './common/vir-element-book-route-link.element';

export const VirElementBookNav = defineElement<{
    tree: EntryTreeNode;
    router: ElementBookRouter | undefined;
}>()({
    tagName: 'vir-element-book-nav',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-row:hover {
            background-color: grey;
        }

        .title-row {
            padding-left: calc(16px * var(--indent, 0));
        }
    `,
    renderCallback({inputs}) {
        return createNavigationTree(0, inputs.tree, [], inputs.router);
    },
});

function createNavigationTree(
    indent: number,
    tree: EntryTreeNode,
    currentPath: ReadonlyArray<string>,
    router: ElementBookRouter | undefined,
): TemplateResult[] {
    if (!tree.children) {
        return [];
    }

    return Object.values(tree.children).map((child) => {
        const childRoute = currentPath.concat(child.entry.title);

        const childTemplates = createNavigationTree(indent + 1, child, childRoute, router);

        return html`
            <div class="nav-tree-entry" style="--indent: ${indent};">
                <${VirElementBookRouteLink}
                    ${assign(VirElementBookRouteLink, {
                        router: router,
                        route: {
                            paths: childRoute,
                        },
                    })}
                    class="title-row"
                >
                    ${child.entry.title}
                </${VirElementBookRouteLink}>
                ${childTemplates}
            </div>
        `;
    });
}
