import {ElementBookApp} from 'element-book';
import {css, defineElement, html, listen} from 'element-vir';
import {pages} from '../../element-book-example/example.book.js';

export const VirApp = defineElement()({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${ElementBookApp} {
            flex-grow: 1;
            max-width: 100%;
            box-sizing: border-box;
        }

        h1 {
            padding-left: 16px;
            margin: 0;
            margin-bottom: 16px;
        }

        .controls {
            display: flex;
            gap: 16px;
            padding: 0 16px;
            align-items: center;
        }
    `,
    state() {
        return {
            themeColor: undefined as string | undefined,
            darkMode: undefined as boolean | undefined,
            paths: ['book'] as ReadonlyArray<string>,
        };
    },
    render: ({state, updateState}) => {
        return html`
            <div class="controls">
                <label>
                    Theme color
                    <input
                        ${listen('input', (event) => {
                            const element = event.currentTarget;
                            if (!(element instanceof HTMLInputElement)) {
                                throw new TypeError('input element not found for input event');
                            }
                            updateState({
                                themeColor: element.value,
                            });
                        })}
                        type="color"
                    />
                </label>
                <label>
                    Dark mode
                    <input
                        type="checkbox"
                        .checked=${state.darkMode ?? false}
                        ${listen('change', (event) => {
                            const element = event.currentTarget;
                            if (!(element instanceof HTMLInputElement)) {
                                throw new TypeError('input element not found for change event');
                            }
                            updateState({
                                darkMode: element.checked,
                            });
                        })}
                    />
                </label>
            </div>
            <${ElementBookApp.assign({
                pages,
                themeColor: state.themeColor,
                darkMode: state.darkMode,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'element-book',
                },
                _debug: true,

                globalValues: {
                    testGlobalControl: 'it worked!',
                },
            })}
                ${listen(ElementBookApp.events.pathUpdate, (event) => {
                    updateState({
                        paths: event.detail,
                    });
                })}
            >
                <h1 slot=${ElementBookApp.slotNames.navHeader}>My Title</h1>
                <footer slot=${ElementBookApp.slotNames.footer}>Example Footer</footer>
            </${ElementBookApp}>
        `;
    },
});
