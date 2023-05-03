import {assign, classMap, css, html, renderIf, repeat} from 'element-vir';
import {ElementBookPage} from '../../../data/element-book-entry/element-book-page/element-book-page';
import {defineElementBookElement} from '../define-book-element';
import {ElementBookExampleControls} from './element-book-example-controls.element';
import {ElementBookExampleViewer} from './element-book-example-viewer.element';

export const ElementBookPageExamples = defineElementBookElement<{
    page: ElementBookPage;
    parentBreadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'element-book-page-examples',
    styles: css`
        :host {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }
        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,
    renderCallback({inputs}) {
        const examples = inputs.page.examples;

        const allControlsHidden = examples.every((example) => example.hideControls);

        /**
         * Use the repeat directive here, instead of just a map, so that lit doesn't accidentally
         * keep state cached between element book pages.
         */
        return repeat(
            examples,
            (example) => inputs.parentBreadcrumbs.concat(example.title).join('>'),
            (example) => {
                const exampleBreadcrumbs = inputs.parentBreadcrumbs.concat(example.title);

                return html`
                    <div class="individual-example-wrapper">
                        ${renderIf(
                            !allControlsHidden,
                            html`
                                <${ElementBookExampleControls}
                                    class=${classMap({'hidden-controls': !!example.hideControls})}
                                    ${assign(ElementBookExampleControls, {example})}
                                ></${ElementBookExampleControls}>
                            `,
                        )}
                        <${ElementBookExampleViewer}
                            ${assign(ElementBookExampleViewer, {
                                example,
                                breadcrumbs: exampleBreadcrumbs,
                            })}
                        ></${ElementBookExampleViewer}>
                    </div>
                `;
            },
        );
    },
});
