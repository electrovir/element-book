import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {BookApp} from '../../create-element-book';
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
            <${BookApp} ${assign(BookApp, {entries})}></${BookApp}>
        `;
    },
});
