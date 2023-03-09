import {css, html} from 'element-vir';
import {ReadonlyDeep} from 'type-fest';
import {ElementBookFullRoute} from '../../routing/element-book-routing';
import {defineBookElement} from './define-book-element';

export const BookBreadcrumbs = defineBookElement<{
    currentRoute: ReadonlyDeep<ElementBookFullRoute>;
}>()({
    tagName: 'book-breadcrumbs',
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
