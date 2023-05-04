import {css, html} from 'element-vir';
import {ElementBookFullRoute} from '../../routing/element-book-routing';
import {defineElementBookElement} from './define-book-element';

export const ElementBookBreadcrumbs = defineElementBookElement<{
    currentRoute: Readonly<ElementBookFullRoute>;
}>()({
    tagName: 'element-book-breadcrumbs',
    styles: css`
        :host {
            display: flex;
            color: #999;
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
            const spacer = isLastPath
                ? ''
                : html`
                      &gt;
                  `;

            return html`
                ${currentPath} ${spacer}
            `;
        });
    },
});
