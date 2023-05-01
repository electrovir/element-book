import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {ElementBookApp} from '../../create-element-book';
import {entries} from '../../element-book/example.element.book';

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
