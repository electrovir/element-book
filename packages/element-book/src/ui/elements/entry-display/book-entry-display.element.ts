import {assign, css, html, repeat} from 'element-vir';
import {BookEntryTypeEnum} from '../../../data/book-entry/book-entry-type';

import {isLengthAtLeast, mapObjectValues} from '@augment-vir/common';
import {BookPageControlsInitBase} from '../../../data/book-entry/book-page/book-page-controls';
import {
    CurrentControls,
    traverseCurrentControls,
} from '../../../data/book-entry/book-page/current-controls';
import {isBookTreeNode, traverseToImmediateParent} from '../../../data/book-tree/book-tree';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node';
import {BookFullRoute, BookRouter, extractSearchQuery} from '../../../routing/book-routing';
import {BookError} from '../common/book-error.element';
import {defineBookElement} from '../define-book-element';
import {ElementBookSlotName} from '../element-book-app/element-book-app-slots';
import {BookBreadcrumbsBar} from './book-breadcrumbs-bar.element';
import {BookPageControls} from './book-page/book-page-controls.element';
import {BookPageWrapper} from './book-page/book-page-wrapper.element';
import {BookElementExampleWrapper} from './element-example/book-element-example-wrapper.element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: Readonly<BookFullRoute>;
    currentNodes: ReadonlyArray<BookTreeNode>;
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>;
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
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }
    `,
    renderCallback: ({inputs}) => {
        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const entryTemplates = createNodeTemplates({
            currentNodes: inputs.currentNodes,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
            currentControls: inputs.currentControls,
            originalTree: inputs.originalTree,
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

type FlattenedControls = {
    config: BookPageControlsInitBase;
    current: CurrentControls;
    breadcrumbs: Record<string, ReadonlyArray<string>>;
};

function getFlattenedControlsFromHiddenParents(
    currentNodes: ReadonlyArray<BookTreeNode>,
    currentControls: CurrentControls,
    currentNode: BookTreeNode,
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>,
): FlattenedControls | undefined {
    const parent = traverseToImmediateParent(currentNode, originalTree);
    const allControls: FlattenedControls[] = [];

    if (parent) {
        const parentControls = getFlattenedControlsFromHiddenParents(
            currentNodes,
            currentControls,
            parent,
            originalTree,
        );
        if (parentControls) {
            allControls.push(parentControls);
        }
    }
    if (
        isBookTreeNode(currentNode, BookEntryTypeEnum.Page) &&
        !currentNodes.includes(currentNode)
    ) {
        const currentEntryControls = traverseCurrentControls(
            currentControls,
            currentNode.fullUrlBreadcrumbs,
        );
        allControls.push({
            config: currentNode.entry.controls,
            current: currentEntryControls,
            breadcrumbs: mapObjectValues(currentEntryControls, () => {
                return currentNode.fullUrlBreadcrumbs;
            }),
        });
    }
    return allControls.reduce(
        (accum, currentControls) => {
            return {
                config: {
                    ...accum.config,
                    ...currentControls.config,
                },
                current: {
                    ...accum.current,
                    ...currentControls.current,
                },
                breadcrumbs: {
                    ...accum.breadcrumbs,
                    ...currentControls.breadcrumbs,
                },
            };
        },
        {config: {}, current: {}, breadcrumbs: {}},
    );
}

function createNodeTemplates({
    currentNodes,
    isTopLevel,
    router,
    isSearching,
    currentControls,
    originalTree,
}: {
    currentNodes: ReadonlyArray<BookTreeNode>;
    isTopLevel: boolean;
    router: BookRouter;
    isSearching: boolean;
    currentControls: CurrentControls;
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>;
}): unknown {
    if (!currentNodes.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    const hiddenAncestorControls = isLengthAtLeast(currentNodes, 1)
        ? getFlattenedControlsFromHiddenParents(
              currentNodes,
              currentControls,
              currentNodes[0],
              originalTree,
          )
        : undefined;

    const hiddenAncestorControlsTemplate =
        hiddenAncestorControls && isLengthAtLeast(currentNodes, 1)
            ? html`
                  <${BookPageControls}
                      ${assign(BookPageControls, {
                          config: hiddenAncestorControls.config,
                          currentValues: hiddenAncestorControls.current,
                          fullUrlBreadcrumbs: hiddenAncestorControls.breadcrumbs,
                      })}
                  ></${BookPageControls}>
              `
            : '';

    const templates = repeat(
        currentNodes,
        (node) => node.fullUrlBreadcrumbs.join('>'),
        (currentNode, index) => {
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

    return [
        hiddenAncestorControlsTemplate,
        templates,
    ];
}
