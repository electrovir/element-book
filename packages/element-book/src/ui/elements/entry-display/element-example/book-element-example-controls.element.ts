import {css, html} from 'element-vir';
import {BookElementExample} from '../../../../data/book-entry/book-element-example/book-element-example';
import {colorThemeCssVars} from '../../../color-theme/color-theme';
import {defineBookElement} from '../../define-book-element';

export const BookElementExampleControls = defineBookElement<{
    elementExample: BookElementExample;
}>()({
    tagName: 'book-element-example-controls',
    styles: css`
        :host {
            display: flex;
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <span>
                ${inputs.elementExample.title}
                <span></span>
            </span>
        `;
    },
});
