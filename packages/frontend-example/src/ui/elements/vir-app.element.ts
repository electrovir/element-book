import {ElementBook} from '@element-book/create-element-book';
import {assign, css, defineElementNoInputs, html} from 'element-vir';
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
            <${ElementBook} ${assign(ElementBook, {entries})}></${ElementBook}>
        `;
    },
});
