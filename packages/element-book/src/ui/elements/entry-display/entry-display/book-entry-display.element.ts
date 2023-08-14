import {css, html, renderIf, unsafeCSS} from 'element-vir';
import {BookEntryTypeEnum} from '../../../../data/book-entry/book-entry-type';

import {ControlsWrapper} from '../../../../data/book-entry/book-page/controls-wrapper';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {BookFullRoute, BookRouter, extractSearchQuery} from '../../../../routing/book-routing';
import {defineBookElement} from '../../define-book-element';
import {ElementBookSlotName} from '../../element-book-app/element-book-app-slots';
import {BookBreadcrumbsBar} from '../book-breadcrumbs-bar.element';
import {createNodeTemplates} from './create-node-templates';
import {loadingClassName} from './is-entry-loading-showing';

export const BookEntryDisplay = defineBookElement<{
    controls: ControlsWrapper;
    currentNodes: ReadonlyArray<BookTreeNode>;
    currentRoute: Readonly<BookFullRoute>;
    debug: boolean;
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>;
    router: BookRouter | undefined;
    showLoading: boolean;
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

        .${unsafeCSS(loadingClassName)} {
            flex-grow: 1;
            padding: 64px;
        }
    `,
    renderCallback: ({inputs}) => {
        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const entryTemplates = createNodeTemplates({
            currentNodes: inputs.currentNodes,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
            controls: inputs.controls,
            originalTree: inputs.originalTree,
        });

        return html`
            <${BookBreadcrumbsBar.assign({
                currentSearch,
                currentRoute: inputs.currentRoute,
                router: inputs.router,
            })}></${BookBreadcrumbsBar}>

            ${renderIf(
                inputs.showLoading,
                html`
                    <div class=${loadingClassName}>Loading...</div>
                `,
                html`
                    <div class="all-book-entries-wrapper">${entryTemplates}</div>
                `,
            )}
            <slot name=${ElementBookSlotName.Footer}></slot>
        `;
    },
});
