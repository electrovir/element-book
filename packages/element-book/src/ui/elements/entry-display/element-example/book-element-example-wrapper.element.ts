import {assign, css, html} from 'element-vir';
import {BookElementExample} from '../../../../data/book-entry/book-element-example/book-element-example';
import {BookPageControlsValues} from '../../../../data/book-entry/book-page/book-page-controls';
import {colorThemeCssVars} from '../../../color-theme/color-theme';
import {BookError} from '../../common/book-error.element';
import {defineBookElement} from '../../define-book-element';
import {BookElementExampleControls} from './book-element-example-controls.element';
import {BookElementExampleViewer} from './book-element-example-viewer.element';

export const BookElementExampleWrapper = defineBookElement<{
    elementExample: BookElementExample;
    fullUrlBreadcrumbs: ReadonlyArray<string>;
    parentControls: BookPageControlsValues;
}>()({
    tagName: 'book-element-example-wrapper',
    styles: css`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .individual-example-wrapper:hover ${BookElementExampleControls} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback({inputs}) {
        if (inputs.elementExample.errors.length) {
            return html`
                <${BookError}
                    ${assign(BookError, {
                        message: inputs.elementExample.errors.map((error) => error.message),
                    })}
                ></${BookError}>
            `;
        }

        return html`
            <div class="individual-example-wrapper">
                <${BookElementExampleControls}
                    ${assign(BookElementExampleControls, {
                        elementExample: inputs.elementExample,
                    })}
                ></${BookElementExampleControls}>
                <${BookElementExampleViewer}
                    ${assign(BookElementExampleViewer, {
                        elementExample: inputs.elementExample,
                        fullUrlBreadcrumbs: inputs.fullUrlBreadcrumbs,
                        currentPageControls: inputs.parentControls,
                    })}
                ></${BookElementExampleViewer}>
            </div>
        `;
    },
});
