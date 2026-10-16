import {defineBookPage} from '../index.js';

export const myPage = defineBookPage({
    /** Use `undefined` if your page is at the top level. */
    parent: undefined,
    title: 'My Page',
});
