import {
    ElementBookChapter,
    ElementBookPageControlTypeEnum,
    defineElementBookChapter,
    defineElementBookPage,
    insertElementExample,
} from 'element-book';

const chapter1 = defineElementBookChapter({title: 'My Chapter 1', parent: undefined});
const chapter2 = defineElementBookChapter({title: 'My Chapter 2', parent: undefined});
const subChapter = defineElementBookChapter({title: 'Sub Chapter 1', parent: chapter1});

function createExamplePage(index: number, parent: ElementBookChapter) {
    return defineElementBookPage({
        title: `test ${index}`,
        parent,
    });
}

const testPage2 = defineElementBookPage({
    title: 'test 2',
    parent: chapter2,
    descriptionParagraphs: [
        'This is the description. It has stuff in it.',
        'Yay stuff!',
    ],
});
const testPage3 = defineElementBookPage({
    title: 'test 3',
    controls: {
        thing: {
            initValue: 'yo',
            controlType: ElementBookPageControlTypeEnum.Text,
        },
    },
    parent: chapter2,
});

insertElementExample({
    title: 'example 3 1',
    parent: testPage3,
    hideExampleControls: true,
    renderCallback() {
        return 'hi';
    },
});
insertElementExample({
    title: 'example 3 2',
    parent: testPage3,
    hideExampleControls: true,
    renderCallback({controls}) {
        return `hello ${controls.thing}`;
    },
});

insertElementExample({
    title: 'example 1',
    parent: testPage2,
    renderCallback() {
        return 'hi';
    },
});
insertElementExample({
    title: 'example 2',
    hideExampleControls: true,
    parent: testPage2,
    renderCallback() {
        return 'hi';
    },
});

export const entries = [
    chapter1,
    createExamplePage(0, chapter1),
    subChapter,
    ...Array(100)
        .fill(0)
        .map((_value, index) => createExamplePage(index + 1, subChapter)),
    chapter2,
    testPage2,
    testPage3,
];

console.info({entries});
