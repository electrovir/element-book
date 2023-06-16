import {assign, css, html, repeat} from 'element-vir';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';

import {
    CurrentControls,
    traverseCurrentControls,
} from '../../../data/book-entry/book-page/current-controls';
import {isBookTreeNode} from '../../../data/book-tree/book-tree';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node';
import {BookFullRoute, BookRouter, extractSearchQuery} from '../../../routing/book-routing';
import {BookError} from '../common/book-error.element';
import {defineBookElement} from '../define-book-element';
import {ElementBookSlotName} from '../element-book-app/element-book-app-slots';
import {BookBreadcrumbsBar} from './book-breadcrumbs-bar.element';
import {BookPageWrapper} from './book-page/book-page-wrapper.element';
import {BookElementExampleWrapper} from './element-example/book-element-example-wrapper.element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: Readonly<BookFullRoute>;
    currentNodes: ReadonlyArray<BookTreeNode>;
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

        h1 {
            margin: 0;
            padding: 0;
        }
    `,
    renderCallback: ({inputs}) => {
        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const entryTemplates = createFlattenedTreeTemplates({
            currentNodes: inputs.currentNodes,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
            currentControls: inputs.currentControls,
        });

        return html`
            <${BookBreadcrumbsBar}
                ${assign(BookBreadcrumbsBar, {
                    currentSearch,
                    currentRoute: inputs.currentRoute,
                    router: inputs.router,
                })}
            ></${BookBreadcrumbsBar}>
            <div class="all-book-entries-wrapper">${entryTemplates}</div>
            <slot name=${ElementBookSlotName.Footer}></slot>
        `;
    },
});

function createFlattenedTreeTemplates({
    currentNodes,
    isTopLevel,
    router,
    isSearching,
    currentControls,
}: {
    currentNodes: ReadonlyArray<BookTreeNode>;
    isTopLevel: boolean;
    router: BookRouter;
    isSearching: boolean;
    currentControls: CurrentControls;
}): unknown {
    if (!currentNodes.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    return repeat(
        currentNodes,
        (node) => node.fullUrlBreadcrumbs.join('>'),
        (currentNode) => {
            if (isBookTreeNode(currentNode, BookEntryTypeEnum.Page)) {
                return html`
                    <${BookPageWrapper}
                        class="block-entry"
                        ${assign(BookPageWrapper, {
                            isTopLevel,
                            pageNode: currentNode,
                            currentControls,
                            router,
                        })}
                    ></${BookPageWrapper}>
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
                            elementExampleNode: currentNode,
                            currentPageControls: controlsForElementExample,
                            router,
                        })}
                    ></${BookElementExampleWrapper}>
                `;
            } else if (isBookTreeNode(currentNode, BookEntryTypeEnum.Root)) {
                return html`
                    <h1>${currentNode.entry.title}</h1>
                `;
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
