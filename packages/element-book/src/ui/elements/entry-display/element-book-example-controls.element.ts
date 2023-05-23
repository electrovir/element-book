import {css, html} from 'element-vir';
import {ElementBookPageExampleInit} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {defineElementBookElement} from '../define-book-element';

/** At least take up vertical space, if not any horizontal space. */
const defaultTitle = html`
    &nbsp;
`;

export const ElementBookExampleControls = defineElementBookElement<{
    example: ElementBookPageExampleInit<any, any, any>;
}>()({
    tagName: 'element-book-example-controls',
    styles: css`
        :host {
            display: flex;
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,
    renderCallback({inputs}) {
        const title = inputs.example.hideExampleControls ? '' : inputs.example.title;

        return html`
            <span>
                ${title || defaultTitle}
                <span></span>
            </span>
        `;
    },
});
