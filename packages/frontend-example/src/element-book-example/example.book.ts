import {
    ElementBookChapter,
    createExample,
    defineElementBookChapter,
    defineElementBookPage,
} from 'element-book';
import {css, html, listen} from 'element-vir';

const chapter1 = defineElementBookChapter({title: 'My Chapter 1', parent: undefined});
const chapter2 = defineElementBookChapter({title: 'My Chapter 2', parent: undefined});
const subChapter = defineElementBookChapter({title: 'Sub Chapter 1', parent: chapter1});

function createExamplePage(index: number, parent: ElementBookChapter) {
    return defineElementBookPage({
        title: `test ${index}`,
        parent,
        descriptionParagraphs: [
            'This is the description. It has stuff in it.',
            'Yay stuff!',
        ],
        examples: [
            createExample({
                title: 'example 1',
                render() {
                    return 'hi';
                },
            }),
            createExample({
                title: 'example 2',
                hideControls: true,
                render() {
                    return 'hi 2';
                },
            }),
            createExample({
                title: 'example 2.5',
                render() {
                    return 'hi 2';
                },
            }),
            createExample({
                title: 'example 3',
                stateInit: {
                    yo: 4,
                },
                styles: css`
                    button {
                        border: 2px solid green;
                        background-color: white;
                        border-radius: 4px;
                        cursor: pointer;
                    }

                    :host {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                `,
                render({state, updateState}) {
                    return html`
                        state: ${state.yo}
                        <button
                            ${listen('click', () => {
                                updateState({yo: state.yo + 1});
                            })}
                        >
                            click
                        </button>
                    `;
                },
            }),
        ],
    });
}

export const entries = [
    chapter1,
    createExamplePage(0, chapter1),
    subChapter,
    ...Array(100)
        .fill(0)
        .map((_value, index) => createExamplePage(index + 1, subChapter)),
    chapter2,
    defineElementBookPage({
        title: 'test 2',
        parent: chapter2,
        descriptionParagraphs: [
            'This is the description. It has stuff in it.',
            'Yay stuff!',
        ],
        examples: [
            createExample({
                title: 'example 1',
                hideControls: true,
                render() {
                    return 'hi';
                },
            }),
            createExample({
                title: 'example 2',
                hideControls: true,
                render() {
                    return 'hi';
                },
            }),
        ],
    }),
];

console.log({entries});
