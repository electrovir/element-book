import {ElementBookApp, defineElementBookChapter} from 'element-book';
import {assign, css, defineElementNoInputs, html, listen} from 'element-vir';

export const VirApp = defineElementNoInputs({
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
            overflow: hidden;
            max-width: 100%;
            box-sizing: border-box;
        }

        h1 {
            padding-left: 16px;
            margin: 0;
            margin-bottom: 16px;
        }
    `,
    stateInit: {
        themeColor: undefined as string | undefined,
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <label>
                Theme color
                <input
                    ${listen('input', (event) => {
                        const element = event.currentTarget;
                        if (!(element instanceof HTMLInputElement)) {
                            throw new Error('input element not found for input event');
                        }
                        updateState({themeColor: element.value});
                    })}
                    type="color"
                />
            </label>
            <${ElementBookApp}
                ${assign(ElementBookApp, {
                    entries: [
                        defineElementBookChapter({
                            parent: undefined,
                            title: '',
                        }),
                    ],
                    themeColor: state.themeColor,
                    internalRouterConfig: {
                        useInternalRouter: true,
                    },
                    everythingTitle: 'All',
                })}
            >
                <h1 slot="nav-header">My Title</h1>
            </${ElementBookApp}>
        `;
    },
});
