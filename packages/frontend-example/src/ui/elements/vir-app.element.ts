import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {VirElementBook} from '../../create-element-book';
import {entries} from '../../element-book/example.element.book';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            padding: 64px;
            box-sizing: border-box;
        }
    `,
    renderCallback: () => {
        return html`
            <${VirElementBook} ${assign(VirElementBook, {entries})}></${VirElementBook}>
        `;
    },
});
