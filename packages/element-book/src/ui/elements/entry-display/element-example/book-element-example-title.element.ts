import {css, html} from 'element-vir';
import {viraTheme} from 'vira';
import {type BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {type BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {type BookRouter} from '../../../../routing/book-router.js';
import {BookMainRoute, type ValidBookPaths} from '../../../../routing/book-routing.js';
import {BookRouteLink} from '../../common/book-route-link.element.js';
import {defineBookElement} from '../../define-book-element.js';

export const BookElementExampleTitle = defineBookElement<{
    blockNavigation: boolean;
    elementExampleNode: BookTreeNode<BookEntryType.ElementExample>;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-element-example-title',
    styles: css`
        :host {
            display: flex;
            color: ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,
    render({inputs}) {
        if (inputs.blockNavigation) {
            return inputs.elementExampleNode.entry.title;
        }

        const linkPaths: ValidBookPaths = [
            BookMainRoute.Book,
            ...inputs.elementExampleNode.fullUrlBreadcrumbs,
        ];

        return html`
            <${BookRouteLink.assign({
                route: {
                    paths: linkPaths,
                    hash: undefined,
                    search: undefined,
                },
                router: inputs.router,
            })}>
                ${inputs.elementExampleNode.entry.title}
            </${BookRouteLink}>
        `;
    },
});
