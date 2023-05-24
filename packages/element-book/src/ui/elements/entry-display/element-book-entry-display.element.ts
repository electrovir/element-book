import {wait} from '@augment-vir/common';
import {VirIcon} from '@electrovir/icon-element';
import {HTMLTemplateResult, TemplateResult, assign, css, html, listen, renderIf} from 'element-vir';
import {BaseElementBookEntry} from '../../../data/element-book-entry/element-book-chapter/element-book-chapter';
import {isElementBookEntry} from '../../../data/element-book-entry/element-book-entry';
import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {
    EntryTreeNode,
    isEntryNode,
    listBreadcrumbs,
} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {
    ElementBookFullRoute,
    ElementBookMainRoute,
    ElementBookRouter,
    defaultElementBookFullRoute,
    extractSearchQuery,
} from '../../../routing/element-book-routing';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {Element24Icon} from '../../icons/element-24.icon';
import {ElementBookRouteLink} from '../common/element-book-route-link.element';
import {defineElementBookElement} from '../define-book-element';
import {ElementBookBreadcrumbs} from '../element-book-breadcrumbs.element';
import {ElementBookPageExamples} from './element-book-page-examples.element';

export const ElementBookEntryDisplay = defineElementBookElement<{
    currentRoute: Readonly<ElementBookFullRoute>;
    currentNode: Readonly<EntryTreeNode>;
    router: ElementBookRouter;
}>()({
    tagName: 'element-book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid
                ${colorThemeCssVars['element-book-page-foreground-faint-level-2-color'].value};
            padding: 4px 8px;
            background-color: ${colorThemeCssVars['element-book-page-background-color'].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        h2,
        h3 {
            font-size: 1.5em;
        }

        ${ElementBookRouteLink} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${VirIcon} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }

        .page-examples .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            margin-bottom: 24px;
        }

        .description {
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${colorThemeCssVars['element-book-page-foreground-color'].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
        }
    `,
    renderCallback: ({inputs, dispatch}) => {
        const nestedPages = extractNestedPages(inputs.currentNode);

        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const entryBreadcrumbs = listBreadcrumbs(inputs.currentNode.entry, false).reverse();
        const exampleTemplates = createNestedPagesTemplates({
            nestedPages,
            parentBreadcrumbs: entryBreadcrumbs,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
        });

        return html`
            <div class="title-bar">
                ${renderIf(
                    !!currentSearch,
                    html`
                        &nbsp;
                    `,
                    html`
                        <${ElementBookBreadcrumbs}
                            ${assign(ElementBookBreadcrumbs, {
                                currentRoute: inputs.currentRoute,
                                router: inputs.router,
                            })}
                        ></${ElementBookBreadcrumbs}>
                    `,
                )}
                <input
                    placeholder="search"
                    .value=${currentSearch}
                    ${listen('input', async (event) => {
                        const inputElement = event.currentTarget;

                        if (!(inputElement instanceof HTMLInputElement)) {
                            throw new Error('Failed to find input element for search.');
                        }
                        const preThrottleValue = inputElement.value;
                        // throttle it a bit
                        await wait(500);

                        if (inputElement.value !== preThrottleValue) {
                            return;
                        }

                        if (inputElement.value) {
                            dispatch(
                                new ChangeRouteEvent({
                                    paths: [
                                        ElementBookMainRoute.Search,
                                        encodeURIComponent(inputElement.value),
                                    ],
                                }),
                            );
                        } else {
                            dispatch(new ChangeRouteEvent(defaultElementBookFullRoute));
                        }
                    })}
                />
            </div>
            <div class="all-examples-wrapper">${exampleTemplates}</div>
        `;
    },
});

type NestedPages = ReadonlyArray<
    | EntryTreeNode<ElementBookEntryTypeEnum.Page>
    | Record<string, {node: EntryTreeNode; nested: NestedPages}>
>;

function createNestedPagesTemplates({
    nestedPages,
    parentBreadcrumbs,
    isTopLevel,
    router,
    isSearching,
}: {
    nestedPages: NestedPages;
    parentBreadcrumbs: ReadonlyArray<string>;
    isTopLevel: boolean;
    router: ElementBookRouter;
    isSearching: boolean;
}): HTMLTemplateResult[] {
    if (!nestedPages.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    return nestedPages
        .map((nestingNode) => {
            if (isEntryNode(nestingNode, ElementBookEntryTypeEnum.Page)) {
                const bookEntry = nestingNode.entry;

                if (!isElementBookEntry(bookEntry, ElementBookEntryTypeEnum.Page)) {
                    throw new Error('nested entry should be a page');
                }

                const headerContentsTemplate = html`
                    <${VirIcon} ${assign(VirIcon, {icon: Element24Icon})}></${VirIcon}>
                    ${bookEntry.title}
                `;
                const titleTemplate = isTopLevel
                    ? html`
                          <h2 class="header-with-icon">${headerContentsTemplate}</h2>
                      `
                    : html`
                          <h3 class="header-with-icon">${headerContentsTemplate}</h3>
                      `;

                const linkPaths = [
                    ElementBookMainRoute.Book,
                    ...parentBreadcrumbs.concat(nestingNode.breadcrumb),
                ] as const;

                return html`
                    <div class="page-examples">
                        <div class="title-group">
                            <${ElementBookRouteLink}
                                ${assign(ElementBookRouteLink, {
                                    route: {
                                        paths: linkPaths,
                                        hash: undefined,
                                        search: undefined,
                                    },
                                    router,
                                })}
                            >
                                ${titleTemplate}
                            </${ElementBookRouteLink}>
                            ${createDescriptionTemplate(bookEntry)}
                        </div>
                        <${ElementBookPageExamples}
                            ${assign(ElementBookPageExamples, {
                                page: bookEntry,
                                parentBreadcrumbs: parentBreadcrumbs,
                            })}
                        ></${ElementBookPageExamples}>
                    </div>
                `;
            } else {
                return Object.entries(nestingNode).map(
                    ([
                        title,
                        currentNested,
                    ]) => {
                        const titleTemplate = isTopLevel
                            ? html`
                                  <h1>${title}</h1>
                              `
                            : html`
                                  <h2>${title}</h2>
                              `;

                        const linkPaths = [
                            ElementBookMainRoute.Book,
                            ...parentBreadcrumbs.concat(currentNested.node.breadcrumb),
                        ] as const;

                        return html`
                            <div class="title-group">
                                <${ElementBookRouteLink}
                                    ${assign(ElementBookRouteLink, {
                                        route: {
                                            paths: linkPaths,
                                            hash: undefined,
                                            search: undefined,
                                        },
                                        router,
                                    })}
                                >
                                    ${titleTemplate}
                                </${ElementBookRouteLink}>
                                ${createDescriptionTemplate(currentNested.node.entry)}
                            </div>
                            ${createNestedPagesTemplates({
                                nestedPages: currentNested.nested,
                                /** An empty breadcrumb represents the top level node. */
                                parentBreadcrumbs: currentNested.node.breadcrumb
                                    ? parentBreadcrumbs.concat(currentNested.node.breadcrumb)
                                    : parentBreadcrumbs,
                                isTopLevel: false,
                                router,
                                isSearching,
                            })}
                        `;
                    },
                );
            }
        })
        .flat();
}

function createDescriptionTemplate(entry: BaseElementBookEntry): TemplateResult {
    const paragraphs: TemplateResult[] = (entry.descriptionParagraphs ?? []).map((paragraph) => {
        return html`
            <p>${paragraph}</p>
        `;
    });

    return html`
        <div class="description">${paragraphs}</div>
    `;
}

function extractNestedPages(node: Readonly<EntryTreeNode>): NestedPages {
    if (node.entry.entryType === ElementBookEntryTypeEnum.Page) {
        return [node as EntryTreeNode<ElementBookEntryTypeEnum.Page>];
    }

    const nestedPages: NestedPages = [
        {
            [node.entry.title]: {
                node: node,
                nested: Object.values(node.children).map(extractNestedPages).flat(),
            },
        },
    ];

    return nestedPages;
}
