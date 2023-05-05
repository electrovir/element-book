import {ElementBookApp} from 'element-book';
import {assign, css, defineElementNoInputs, html, listen} from 'element-vir';
import {entries} from '../../element-book-example/example.book';

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
                    entries,
                    themeColor: state.themeColor,
                    baseRoute: '/',
                    everythingTitle: 'All',
                })}
            >
                <h1 slot="nav-header">DERP</h1>
            </${ElementBookApp}>
        `;
    },
});
