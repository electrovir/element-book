import {html, listen} from 'element-vir';
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
                title: 'example 2',
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
        parent: section2,
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
