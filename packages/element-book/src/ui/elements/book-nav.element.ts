import {assign, css, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {EntryTreeNode} from '../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookRouter} from '../../routing/element-book-routing';
import {VirElementBookRouteLink} from './common/vir-element-book-route-link.element';
import {defineBookElement} from './define-book-element';

export const BookNav = defineBookElement<{
    tree: EntryTreeNode;
    router: ElementBookRouter | undefined;
}>()({
    tagName: 'book-nav',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: #f5f5f5;
        }

        .title-row:hover {
            background-color: grey;
        }

        .title-row {
            display: block;
            ${VirElementBookRouteLink.cssVarNames
                .anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 24px);
        }

        ${VirElementBookRouteLink} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
    `,
    renderCallback({inputs}) {
        const navTree = createNavigationTree(0, inputs.tree, [], inputs.router);

        return html`
            <ul>
                ${navTree}
            </ul>
        `;
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
                <li class=${child.entry.type}>
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
                </li>
                ${childTemplates}
            </div>
        `;
    });
}
