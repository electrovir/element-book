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
        }
    `,
    renderCallback: ({inputs}) => {
        return inputs.currentRoute.paths.map((currentPath, pathIndex) => {
            const isLastPath = pathIndex >= inputs.currentRoute.paths.length - 1;
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
