import {css, html} from 'element-vir';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {defineElementBookElement} from '../define-book-element';

export const ElementBookExampleControls = defineElementBookElement<{
    example: ElementBookPageExample;
}>()({
    tagName: 'element-book-example-controls',
    styles: css`
        :host {
            display: flex;
            color: #bbb;
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }

        :host(:hover) {
            color: black;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <span>
                ${inputs.example.title}
                <span></span>
            </span>
        `;
    },
});
