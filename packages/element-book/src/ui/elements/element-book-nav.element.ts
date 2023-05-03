import {areJsonEqual} from '@augment-vir/common';
import {VirIcon} from '@electrovir/icon-element';
import {assign, classMap, css, html, renderIf} from 'element-vir';
import {TemplateResult} from 'lit';
import {ElementBookEntryTypeEnum} from '../../data/element-book-entry/element-book-entry-type';
import {EntryTreeNode} from '../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookRouter} from '../../routing/element-book-routing';
import {colorThemeCssVars} from '../color-theme/color-theme';
import {Element16Icon} from '../icons/element-16.icon';
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
            background-color: ${colorThemeCssVars['element-book-nav-hover-background-color'].value};
            color: ${colorThemeCssVars['element-book-nav-hover-foreground-color'].value};
        }

        .title-row:active {
            background-color: ${colorThemeCssVars['element-book-nav-active-background-color']
                .value};
            color: ${colorThemeCssVars['element-book-nav-active-foreground-color'].value};
        }

        .title-row {
            padding-right: 16px;
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

        .selected,
        .selected:hover {
            background-color: ${colorThemeCssVars['element-book-nav-selected-background-color']
                .value};
            color: ${colorThemeCssVars['element-book-nav-selected-foreground-color'].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-flex;
            gap: 8px;
            align-items: center;
        }

        ${VirIcon} {
            display: inline-flex;
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
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
        const childPath = rootPath.concat(child.breadcrumb);

        const childTemplates = createNavigationTree({
            indent: indent + 1,
            tree: child,
            rootPath: childPath,
            selectedPath,
            router,
        });

        const hasExamples: boolean = child.entry.type === ElementBookEntryTypeEnum.Page;

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
                        <div class="title-text">
                            ${renderIf(
                                hasExamples,
                                html`
                                    <${VirIcon}
                                        ${assign(VirIcon, {icon: Element16Icon})}
                                    ></${VirIcon}>
                                `,
                            )}
                            ${child.entry.title}
                        </div>
                    </${ElementBookRouteLink}>
                </li>
                ${childTemplates}
            </div>
        `;
    });
}
