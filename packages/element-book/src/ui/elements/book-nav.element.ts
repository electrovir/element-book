import {areJsonEqual} from '@augment-vir/common';
import {TemplateResult, assign, classMap, css, html, renderIf} from 'element-vir';
import {Element16Icon, ViraIcon} from 'vira';
import {BookEntryTypeEnum} from '../../data/book-entry/book-entry-type';
import {BookTreeNode, isBookTreeNode} from '../../data/book-tree/book-tree';
import {BookMainRoute, BookRouter} from '../../routing/book-routing';
import {colorThemeCssVars} from '../color-theme/color-theme';
import {BookRouteLink} from './common/book-route-link.element';
import {defineBookElement} from './define-book-element';
import {ElementBookSlotName} from './element-book-app/element-book-app-slots';

export const BookNav = defineBookElement<{
    tree: BookTreeNode;
    selectedPath: ReadonlyArray<string>;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-nav',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${colorThemeCssVars[
                'element-book-page-background-faint-level-2-color'
            ].value};
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
            display: block;
            ${BookRouteLink.cssVars['book-route-link-anchor-padding']
                .name}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
        }

        ${BookRouteLink} {
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
            font-size: 0.75em;
        }

        ${ViraIcon} {
            display: inline-flex;
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback({inputs}) {
        const navTree = createNavigationTree({
            indent: 0,
            entryTreeNode: inputs.tree,
            rootPath: [],
            router: inputs.router,
            selectedPath: inputs.selectedPath.slice(1),
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
    entryTreeNode,
    rootPath,
    selectedPath,
    router,
}: {
    indent: number;
    entryTreeNode: BookTreeNode;
    rootPath: ReadonlyArray<string>;
    selectedPath: ReadonlyArray<string>;
    router: BookRouter | undefined;
}): TemplateResult {
    const entryPath = entryTreeNode.urlBreadcrumb
        ? rootPath.concat(entryTreeNode.urlBreadcrumb)
        : rootPath;

    const childTemplates = Object.values(entryTreeNode.children).map((child) => {
        return createNavigationTree({
            indent: indent + 1,
            entryTreeNode: child,
            rootPath: entryPath,
            selectedPath,
            router,
        });
    });

    return html`
        <div class="nav-tree-entry" style="--indent: ${indent};">
            <slot name=${ElementBookSlotName.NavHeader}></slot>
            <li class=${entryTreeNode.entry.entryType}>
                <${BookRouteLink}
                    ${assign(BookRouteLink, {
                        router: router,
                        route: {
                            paths: [
                                BookMainRoute.Book,
                                ...entryPath,
                            ],
                        },
                    })}
                    class=${classMap({
                        'title-row': true,
                        selected: areJsonEqual(selectedPath, entryPath),
                    })}
                >
                    <div class="title-text">
                        ${renderIf(
                            isBookTreeNode(entryTreeNode, BookEntryTypeEnum.ElementExample),
                            html`
                                <${ViraIcon}
                                    ${assign(ViraIcon, {icon: Element16Icon})}
                                ></${ViraIcon}>
                            `,
                        )}
                        ${entryTreeNode.entry.title}
                    </div>
                </${BookRouteLink}>
            </li>
            ${childTemplates}
        </div>
    `;
}
