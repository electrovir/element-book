import {assign, css, html} from 'element-vir';
import {
    ElementBookFullRoute,
    ElementBookMainRoute,
    ElementBookRouter,
} from '../../routing/element-book-routing';
import {ElementBookRouteLink} from './common/element-book-route-link.element';
import {defineElementBookElement} from './define-book-element';

export const ElementBookBreadcrumbs = defineElementBookElement<{
    currentRoute: Readonly<ElementBookFullRoute>;
    router: ElementBookRouter;
}>()({
    tagName: 'element-book-breadcrumbs',
    styles: css`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,
    renderCallback: ({inputs}) => {
        const bookPaths = inputs.currentRoute.paths.slice(1);

        if (!bookPaths.length) {
            return html`
                &nbsp;
            `;
        }

        return bookPaths.map((currentPath, pathIndex, pathsArray) => {
            const isLastPath = pathIndex >= pathsArray.length - 1;

            const fullPathSoFar = pathsArray.slice(0, pathIndex + 1);

            const spacer = isLastPath
                ? ''
                : html`
                      <span class="spacer">&gt;</span>
                  `;

            return html`
                <${ElementBookRouteLink}
                    ${assign(ElementBookRouteLink, {
                        route: {
                            hash: undefined,
                            search: undefined,
                            paths: [
                                ElementBookMainRoute.Book,
                                ...fullPathSoFar,
                            ],
                        },
                        router: inputs.router,
                    })}
                >
                    ${currentPath}
                </${ElementBookRouteLink}>
                ${spacer}
            `;
        });
    },
});
