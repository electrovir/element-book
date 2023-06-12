import {BookPage, BookPageControlTypeEnum, defineBookPage} from 'element-book';

const parentPage1 = defineBookPage({title: 'Parent Page 1', parent: undefined});
const parentPage2 = defineBookPage({title: 'Parent Page 2', parent: undefined});
const subPage = defineBookPage({title: 'Sub Page 1', parent: parentPage2});

function createExamplePage(index: number, parent: BookPage) {
    const newPage = defineBookPage({
        title: `test ${index}`,
        parent,
        elementExamplesCallback({defineExample}) {
            defineExample({
                title: 'example',
                renderCallback() {
                    return 'element example here';
                },
            });
        },
    });

    return newPage;
}

const duplicateErrorPage = defineBookPage({
    title: 'duplicate error page',
    parent: parentPage1,
    descriptionParagraphs: [
        'This is the description. It has stuff in it.',
        'Yay stuff!',
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 1',
            renderCallback() {
                return 'hi';
            },
        });
        defineExample({
            title: 'example 2',
            renderCallback() {
                return 'hi';
            },
        });
    },
});
const testPage3 = defineBookPage({
    title: 'test 3',
    controls: {
        thing: {
            initValue: 'there',
            controlType: BookPageControlTypeEnum.Text,
        },
    },
    parent: parentPage1,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 3 1',
            renderCallback() {
                return 'hi';
            },
        });
        defineExample({
            title: 'example 3 2',
            renderCallback({controls}) {
                return `hello ${controls.thing}`;
            },
        });
        defineExample({
            title: 'example with error',
            renderCallback({controls}) {
                return `broken`;
            },
        });
        defineExample({
            title: 'example with error',
            renderCallback({controls}) {
                return `broken`;
            },
        });
    },
});

export const entries = [
    createExamplePage(0, parentPage2),
    subPage,
    ...Array(100)
        .fill(0)
        .map((_value, index) => createExamplePage(index + 1, subPage)),
    parentPage1,
    duplicateErrorPage,
    duplicateErrorPage,
    testPage3,
    parentPage2,
];

console.info({entries});
