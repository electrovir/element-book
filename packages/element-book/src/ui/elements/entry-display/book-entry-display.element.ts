import {wait} from '@augment-vir/common';
import {TemplateResult, assign, css, html, listen, renderIf, repeat} from 'element-vir';
import {isBookEntry} from '../../../data/book-entry/book-entry';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';

import {Element24Icon, ViraIcon} from 'vira';
import {BaseBookEntry} from '../../../data/book-entry/base-book-entry';
import {listBreadcrumbs} from '../../../data/book-entry/breadcrumbs';
import {EntryTreeNode, isEntryNode} from '../../../data/book-entry/entry-tree/entry-tree';
import {
    BookFullRoute,
    BookMainRoute,
    BookRouter,
    defaultBookFullRoute,
    extractSearchQuery,
} from '../../../routing/book-routing';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {BookSlotName} from '../book-app/book-app-slots';
import {BookBreadcrumbs} from '../book-breadcrumbs.element';
import {BookRouteLink} from '../common/book-route-link.element';
import {defineBookElement} from '../define-book-element';
import {BookPageExamples} from './book-page-examples.element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: Readonly<BookFullRoute>;
    currentNode: Readonly<EntryTreeNode>;
    router: BookRouter;
}>()({
    tagName: 'book-entry-display',
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
            flex-grow: 1;
            box-sizing: border-box;
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

        ${BookRouteLink} {
            display: inline-block;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${ViraIcon} {
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
                        <${BookBreadcrumbs}
                            ${assign(BookBreadcrumbs, {
                                currentRoute: inputs.currentRoute,
                                router: inputs.router,
                            })}
                        ></${BookBreadcrumbs}>
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
                                        BookMainRoute.Search,
                                        encodeURIComponent(inputElement.value),
                                    ],
                                }),
                            );
                        } else {
                            dispatch(new ChangeRouteEvent(defaultBookFullRoute));
                        }
                    })}
                />
            </div>
            <div class="all-examples-wrapper">${exampleTemplates}</div>
            <slot name=${BookSlotName.Footer}></slot>
        `;
    },
});

type NestedPages = ReadonlyArray<
    | EntryTreeNode<BookEntryTypeEnum.Page>
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
    router: BookRouter;
    isSearching: boolean;
}): unknown {
    if (!nestedPages.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    return repeat(
        nestedPages,
        (page) => page.urlBreadcrumb,
        (nestingNode) => {
            if (isEntryNode(nestingNode, BookEntryTypeEnum.Page)) {
                const bookEntry = nestingNode.entry;

                if (!isBookEntry(bookEntry, BookEntryTypeEnum.Page)) {
                    throw new Error('nested entry should be a page');
                }

                const headerContentsTemplate = html`
                    <${ViraIcon} ${assign(ViraIcon, {icon: Element24Icon})}></${ViraIcon}>
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
                    BookMainRoute.Book,
                    ...parentBreadcrumbs.concat(nestingNode.urlBreadcrumb),
                ] as const;

                return html`
                    <div class="page-examples">
                        <div class="title-group">
                            <${BookRouteLink}
                                ${assign(BookRouteLink, {
                                    route: {
                                        paths: linkPaths,
                                        hash: undefined,
                                        search: undefined,
                                    },
                                    router,
                                })}
                            >
                                ${titleTemplate}
                            </${BookRouteLink}>
                            ${createDescriptionTemplate(bookEntry)}
                        </div>
                        <${BookPageExamples}
                            ${assign(BookPageExamples, {
                                page: bookEntry,
                                parentBreadcrumbs: parentBreadcrumbs,
                            })}
                        ></${BookPageExamples}>
                    </div>
                `;
            } else {
                const templates = Object.entries(nestingNode).map(
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
                            BookMainRoute.Book,
                            ...parentBreadcrumbs.concat(currentNested.node.urlBreadcrumb),
                        ] as const;

                        return html`
                            <div class="title-group">
                                <${BookRouteLink}
                                    ${assign(BookRouteLink, {
                                        route: {
                                            paths: linkPaths,
                                            hash: undefined,
                                            search: undefined,
                                        },
                                        router,
                                    })}
                                >
                                    ${titleTemplate}
                                </${BookRouteLink}>
                                ${createDescriptionTemplate(currentNested.node.entry)}
                            </div>
                            ${createNestedPagesTemplates({
                                nestedPages: currentNested.nested,
                                /** An empty breadcrumb represents the top level node. */
                                parentBreadcrumbs: currentNested.node.urlBreadcrumb
                                    ? parentBreadcrumbs.concat(currentNested.node.urlBreadcrumb)
                                    : parentBreadcrumbs,
                                isTopLevel: false,
                                router,
                                isSearching,
                            })}
                        `;
                    },
                );

                return html`
                    ${templates}
                `;
            }
        },
    );
}

function createDescriptionTemplate(entry: BaseBookEntry): TemplateResult {
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
    if (node.entry.entryType === BookEntryTypeEnum.Page) {
        return [node as EntryTreeNode<BookEntryTypeEnum.Page>];
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
