import {css, html} from 'element-vir';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {defineElementBookElement} from '../define-book-element';

/** At least take up vertical space, if not any horizontal space. */
const defaultTitle = html`
    &nbsp;
`;

export const ElementBookExampleControls = defineElementBookElement<{
    example: ElementBookPageExample;
}>()({
    tagName: 'element-book-example-controls',
    styles: css`
        :host {
            display: flex;
            color: #ccc;
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,
    renderCallback({inputs}) {
        const title = inputs.example.hideControls ? '' : inputs.example.title;

        return html`
            <span>
                ${title || defaultTitle}
                <span></span>
            </span>
        `;
    },
});
