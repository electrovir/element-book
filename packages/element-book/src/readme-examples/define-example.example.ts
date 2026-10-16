import {html} from 'element-vir';
import {defineBookPage} from '../index.js';

export const myPage = defineBookPage({
    /** Use `undefined` if your page is at the top level. */
    parent: undefined,
    title: 'My Page',
    defineExamples({defineExample}) {
        defineExample({
            title: 'My Example',
            render() {
                return html`
                    <p>Render your element here.</p>
                `;
            },
        });
    },
});
