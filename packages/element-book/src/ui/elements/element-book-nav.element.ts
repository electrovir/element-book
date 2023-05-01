import {areJsonEqual} from '@augment-vir/common';
import {assign, classMap, css, html} from 'element-vir';
import {TemplateResult} from 'lit';
import {EntryTreeNode} from '../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookRouter} from '../../routing/element-book-routing';
import {ElementBookRouteLink} from './common/element-book-route-link.element';
import {defineElementBookElement} from './define-book-element';

export const ElementBookNav = defineElementBookElement<{
    tree: EntryTreeNode;
    selectedPath: ReadonlyArray<string>;
    router: ElementBookRouter | undefined;
}>()({
    tagName: 'element-book-nav',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: #f8f8f8;
        }

        .title-row:hover {
            background-color: #ccc;
        }

        .title-row {
            display: block;
            ${ElementBookRouteLink.cssVarNames
                .anchorPadding}: 4px 24px 4px calc(calc(16px * var(--indent, 0)) + 24px);
        }

        ${ElementBookRouteLink} {
            font-size: 20px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected {
            background-color: #ddd;
        }
    `,
    renderCallback({inputs}) {
        const navTree = createNavigationTree({
            indent: 0,
            tree: inputs.tree,
            rootPath: [],
            router: inputs.router,
            selectedPath: inputs.selectedPath,
        });

        return html`
            <ul>
                ${navTree}
            </ul>
        `;
    },
});

function createNavigationTree({
    indent,
    tree,
    rootPath,
    selectedPath,
    router,
}: {
    indent: number;
    tree: EntryTreeNode;
    rootPath: ReadonlyArray<string>;
    selectedPath: ReadonlyArray<string>;
    router: ElementBookRouter | undefined;
}): TemplateResult[] {
    if (!tree.children) {
        return [];
    }

    return Object.values(tree.children).map((child) => {
        const childPath = rootPath.concat(child.entry.title);

        const childTemplates = createNavigationTree({
            indent: indent + 1,
            tree: child,
            rootPath: childPath,
            selectedPath,
            router,
        });

        return html`
            <div class="nav-tree-entry" style="--indent: ${indent};">
                <li class=${child.entry.type}>
                    <${ElementBookRouteLink}
                        ${assign(ElementBookRouteLink, {
                            router: router,
                            route: {
                                paths: childPath,
                            },
                        })}
                        class=${classMap({
                            'title-row': true,
                            selected: areJsonEqual(selectedPath, childPath),
                        })}
                    >
                        ${child.entry.title}
                    </${ElementBookRouteLink}>
                </li>
                ${childTemplates}
            </div>
        `;
    });
}
