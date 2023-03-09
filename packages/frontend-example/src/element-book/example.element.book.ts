import {
    createExample,
    defineElementBookPage,
    defineElementBookSection,
} from '../create-element-book';

const section = defineElementBookSection('my section');
const section2 = defineElementBookSection('my section 2');

export const entries = [
    section,
    section2,
    defineElementBookPage({
        title: 'test',
        parent: section,
        examples: [
            createExample({
                render() {
                    return 'hi';
                },
            }),
            createExample({
                render() {
                    return 'hi 2';
                },
            }),
        ],
    }),
    defineElementBookPage({
        title: 'test 2',
        parent: section2,
        examples: [],
    }),
];
