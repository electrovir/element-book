import {wait} from '@augment-vir/common';
import {TemplateResult, assign, css, html, listen, renderIf, repeat} from 'element-vir';
import {isBookEntry} from '../../../data/book-entry/book-entry';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';

import {Element24Icon, ViraIcon} from 'vira';
import {BaseBookEntry} from '../../../data/book-entry/base-book-entry';
import {
    CurrentControls,
    traverseCurrentControls,
} from '../../../data/book-entry/book-page/current-controls';
import {listUrlBreadcrumbs} from '../../../data/book-entry/url-breadcrumbs';
import {BookTreeNode, flattenTree, isBookTreeNode} from '../../../data/book-tree/book-tree';
import {
    BookFullRoute,
    BookMainRoute,
    BookRouter,
    defaultBookFullRoute,
    extractSearchQuery,
} from '../../../routing/book-routing';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {BookBreadcrumbs} from '../book-breadcrumbs.element';
import {BookError} from '../common/book-error.element';
import {BookRouteLink} from '../common/book-route-link.element';
import {defineBookElement} from '../define-book-element';
import {ElementBookSlotName} from '../element-book-app/element-book-app-slots';
import {BookPageControls} from './book-page-controls.element';
import {BookElementExampleWrapper} from './element-example/book-element-example-wrapper.element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: Readonly<BookFullRoute>;
    currentNode: Readonly<BookTreeNode>;
    router: BookRouter;
    debug: boolean;
    currentControls: CurrentControls;
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

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin-top: 32px;
        }

        .inline-entry + .inline-entry {
            margin-left: 16px;
        }

        * + .block-entry {
            margin-top: 32px;
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

        .page-header .title-group {
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
        const flattenedTree = flattenTree(inputs.currentNode);

        if (inputs.debug) {
            console.info({flattenedTree});
        }

        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const parentBreadcrumbs = listUrlBreadcrumbs(inputs.currentNode.entry, false).reverse();
        const entryTemplates = createFlattenedTreeTemplates({
            flattenedTree,
            parentBreadcrumbs,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
            currentControls: inputs.currentControls,
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
            <div class="all-book-entries-wrapper">${entryTemplates}</div>
            <slot name=${ElementBookSlotName.Footer}></slot>
        `;
    },
});

function createFlattenedTreeTemplates({
    flattenedTree,
    parentBreadcrumbs,
    isTopLevel,
    router,
    isSearching,
    currentControls,
}: {
    flattenedTree: ReadonlyArray<BookTreeNode>;
    parentBreadcrumbs: ReadonlyArray<string>;
    isTopLevel: boolean;
    router: BookRouter;
    isSearching: boolean;
    currentControls: CurrentControls;
}): unknown {
    if (!flattenedTree.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    return repeat(
        flattenedTree,
        (node) => node.fullUrlBreadcrumbs.join('>'),
        (currentNode) => {
            if (isBookTreeNode(currentNode, BookEntryTypeEnum.Page)) {
                const bookPageEntry = currentNode.entry;

                if (!isBookEntry(bookPageEntry, BookEntryTypeEnum.Page)) {
                    throw new Error('nested entry should be a page');
                }

                const hasExamples: boolean = !!Object.keys(currentNode.entry.elementExamples)
                    .length;

                const headerContentsTemplate = html`
                    ${renderIf(
                        hasExamples,
                        html`
                            <${ViraIcon} ${assign(ViraIcon, {icon: Element24Icon})}></${ViraIcon}>
                        `,
                    )}
                    ${bookPageEntry.title}
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
                    ...parentBreadcrumbs.concat(currentNode.urlBreadcrumb),
                ] as const;

                if (currentNode.entry.errors.length) {
                    return html`
                        <${BookError}
                            class="block-entry"
                            ${assign(BookError, {
                                message: currentNode.entry.errors.map((error) => error.message),
                            })}
                        ></${BookError}>
                    `;
                }

                return html`
                    <div class="page-header block-entry">
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
                            ${createDescriptionTemplate(bookPageEntry)}
                            <${BookPageControls}
                                ${assign(BookPageControls, {
                                    config: currentNode.entry.controls,
                                    currentValues: traverseCurrentControls(
                                        currentControls,
                                        currentNode.fullUrlBreadcrumbs,
                                    ),
                                    fullUrlBreadcrumbs: currentNode.fullUrlBreadcrumbs,
                                })}
                            ></${BookPageControls}>
                        </div>
                    </div>
                `;
            } else if (isBookTreeNode(currentNode, BookEntryTypeEnum.ElementExample)) {
                const controlsForElementExample = traverseCurrentControls(
                    currentControls,
                    currentNode.fullUrlBreadcrumbs.slice(0, -1),
                );

                return html`
                    <${BookElementExampleWrapper}
                        class="inline-entry"
                        ${assign(BookElementExampleWrapper, {
                            elementExample: currentNode.entry,
                            fullUrlBreadcrumbs: currentNode.fullUrlBreadcrumbs,
                            parentControls: controlsForElementExample,
                        })}
                    ></${BookElementExampleWrapper}>
                `;
            } else if (isBookTreeNode(currentNode, BookEntryTypeEnum.Root)) {
                return '';
            } else {
                return html`
                    <${BookError}
                        class="block-entry"
                        ${assign(BookError, {
                            message: `Unknown entry type for rendering: '${currentNode.entry.entryType}'`,
                        })}
                    ></${BookError}>
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
