import {defineElement, html} from 'element-vir';
import {ElementBookApp} from '../index.js';
import {myPage} from './define-page.example.js';

export const MyApp = defineElement()({
    tagName: 'my-app',
    render() {
        return html`
            <${ElementBookApp.assign({
                pages: [
                    myPage,
                ],
            })}></${ElementBookApp}>
        `;
    },
});
