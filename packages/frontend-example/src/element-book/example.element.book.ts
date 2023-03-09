import {defineElementBookPage, defineElementBookSection} from '@element-book/create-element-book';

const section = defineElementBookSection('my section');
const section2 = defineElementBookSection('my section 2');

export const entries = [
    section,
    section2,
    defineElementBookPage('test', section),
    defineElementBookPage('test 2', section2),
];
