import {ElementBookApp} from 'element-book';
import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {entries} from '../../element-book-example/example.element.book';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }
    `,
    renderCallback: () => {
        return html`
            <${ElementBookApp} ${assign(ElementBookApp, {entries})}></${ElementBookApp}>
        `;
    },
});
