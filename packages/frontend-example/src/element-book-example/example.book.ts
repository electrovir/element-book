import {createExample, defineElementBookChapter, defineElementBookPage} from 'element-book';
import {html, listen} from 'element-vir';

const chapter1 = defineElementBookChapter({title: 'my chapter 1'});
const chapter2 = defineElementBookChapter({title: 'my chapter 2'});

export const entries = [
    chapter1,
    chapter2,
    defineElementBookPage({
        title: 'test',
        parent: chapter1,
        examples: [
            createExample({
                title: 'example 1',
                render() {
                    return 'hi';
                },
            }),
            createExample({
                title: 'example 2',
                render() {
                    return 'hi 2';
                },
            }),
            createExample({
                title: 'example 3',
                stateInit: {
                    yo: 4,
                },
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
    }),
    defineElementBookPage({
        title: 'test 2',
        parent: chapter2,
        examples: [
            createExample({
                title: 'example 1',
                render() {
                    return 'hi';
                },
            }),
        ],
    }),
];
