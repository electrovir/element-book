import {areJsonEqual} from '@augment-vir/common';
import {VirIcon} from '@electrovir/icon-element';
import {assign, classMap, css, html, renderIf} from 'element-vir';
import {TemplateResult} from 'lit';
import {ElementBookEntryTypeEnum} from '../../data/element-book-entry/element-book-entry-type';
import {EntryTreeNode} from '../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookMainRoute, ElementBookRouter} from '../../routing/element-book-routing';
import {colorThemeCssVars} from '../color-theme/color-theme';
import {Element16Icon} from '../icons/element-16.icon';
import {ElementBookRouteLink} from './common/element-book-route-link.element';
import {defineElementBookElement} from './define-book-element';
import {ElementBookSlotName} from './element-book-app/element-book-app-slots';

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
            padding-right: 16px;
            display: block;
            ${ElementBookRouteLink.cssVarNames
                .anchorPadding}: 1px 24px 1px calc(calc(16px * var(--indent, 0)) + 8px);
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
            font-size: 0.75em;
        }

        ${VirIcon} {
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
    entryTreeNode: EntryTreeNode;
    rootPath: ReadonlyArray<string>;
    selectedPath: ReadonlyArray<string>;
    router: ElementBookRouter | undefined;
}): TemplateResult {
    const entryPath = entryTreeNode.breadcrumb
        ? rootPath.concat(entryTreeNode.breadcrumb)
        : rootPath;

    const isPage: boolean = entryTreeNode.entry.entryType === ElementBookEntryTypeEnum.Page;

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
                <${ElementBookRouteLink}
                    ${assign(ElementBookRouteLink, {
                        router: router,
                        route: {
                            paths: [
                                ElementBookMainRoute.Book,
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
                            isPage,
                            html`
                                <${VirIcon} ${assign(VirIcon, {icon: Element16Icon})}></${VirIcon}>
                            `,
                        )}
                        ${entryTreeNode.entry.title}
                    </div>
                </${ElementBookRouteLink}>
            </li>
            ${childTemplates}
        </div>
    `;
}
