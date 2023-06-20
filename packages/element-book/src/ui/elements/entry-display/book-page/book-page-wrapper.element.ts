import {combineErrors} from '@augment-vir/common';
import {assign, css, html} from 'element-vir';
import {BookEntryTypeEnum} from '../../../../data/book-entry/book-entry-type';
import {
    CurrentControls,
    traverseCurrentControls,
} from '../../../../data/book-entry/book-page/current-controls';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {BookMainRoute, BookRouter} from '../../../../routing/book-routing';
import {BookError} from '../../common/book-error.element';
import {BookRouteLink} from '../../common/book-route-link.element';
import {defineBookElement} from '../../define-book-element';
import {BookEntryDescription} from '../book-entry-description.element';
import {BookPageControls} from './book-page-controls.element';

export const BookPageWrapper = defineBookElement<{
    isTopLevel: boolean;
    pageNode: BookTreeNode<BookEntryTypeEnum.Page>;
    router: BookRouter;
    currentControls: CurrentControls;
}>()({
    tagName: 'book-page-wrapper',
    styles: css`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${BookRouteLink} {
            display: inline-block;
        }
    `,
    renderCallback({inputs}) {
        const titleTemplate = inputs.isTopLevel
            ? html`
                  <h2 class="header-with-icon">${inputs.pageNode.entry.title}</h2>
              `
            : html`
                  <h3 class="header-with-icon">${inputs.pageNode.entry.title}</h3>
              `;

        const linkPaths = [
            BookMainRoute.Book,
            ...inputs.pageNode.fullUrlBreadcrumbs,
        ] as const;

        const error = combineErrors(inputs.pageNode.entry.errors);
        if (error) {
            console.error(error);
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
                            router: inputs.router,
                        })}
                    >
                        ${titleTemplate}
                    </${BookRouteLink}>
                    ${!!error
                        ? html`
                              <${BookError}
                                  ${assign(BookError, {message: error.message})}
                              ></${BookError}>
                          `
                        : html`
                              <${BookEntryDescription}
                                  ${assign(BookEntryDescription, {
                                      descriptionParagraphs:
                                          inputs.pageNode.entry.descriptionParagraphs ?? [],
                                  })}
                              ></${BookEntryDescription}>
                              <${BookPageControls}
                                  ${assign(BookPageControls, {
                                      config: inputs.pageNode.entry.controls,
                                      currentValues: traverseCurrentControls(
                                          inputs.currentControls,
                                          inputs.pageNode.fullUrlBreadcrumbs,
                                      ),
                                      fullUrlBreadcrumbs: inputs.pageNode.fullUrlBreadcrumbs,
                                  })}
                              ></${BookPageControls}>
                          `}
                </div>
            </div>
        `;
    },
});
