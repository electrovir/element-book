import {assign, css, html} from 'element-vir';
import {BookEntryTypeEnum} from '../../../../data/book-entry/book-entry-type';
import {BookPageControlsValues} from '../../../../data/book-entry/book-page/book-page-controls';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {BookRouter} from '../../../../routing/book-routing';
import {colorThemeCssVars} from '../../../color-theme/color-theme';
import {defineBookElement} from '../../define-book-element';
import {BookElementExampleControls} from './book-element-example-controls.element';
import {BookElementExampleViewer} from './book-element-example-viewer.element';

export const BookElementExampleWrapper = defineBookElement<{
    elementExampleNode: BookTreeNode<BookEntryTypeEnum.ElementExample>;
    currentPageControls: BookPageControlsValues;
    router: BookRouter;
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

        ${BookElementExampleControls} {
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
        }

        :host(:hover) ${BookElementExampleControls} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback({inputs}) {
        return html`
            <div class="individual-example-wrapper">
                <${BookElementExampleControls}
                    ${assign(BookElementExampleControls, inputs)}
                ></${BookElementExampleControls}>
                <${BookElementExampleViewer}
                    ${assign(BookElementExampleViewer, inputs)}
                ></${BookElementExampleViewer}>
            </div>
        `;
    },
});
