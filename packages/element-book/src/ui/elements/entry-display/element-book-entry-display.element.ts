import {assign, classMap, css, html, renderIf} from 'element-vir';
import {ElementBookEntry} from '../../../data/element-book-entry/element-book-entry';
import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {listTitleBreadcrumbs} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookFullRoute} from '../../../routing/element-book-routing';
import {defineElementBookElement} from '../define-book-element';
import {ElementBookBreadcrumbs} from '../element-book-breadcrumbs.element';
import {ElementBookExampleControls} from './element-book-example-controls.element';
import {ElementBookExampleViewer} from './element-book-example-viewer.element';

export const ElementBookEntryDisplay = defineElementBookElement<{
    currentRoute: Readonly<ElementBookFullRoute>;
    currentEntry: Readonly<ElementBookEntry>;
}>()({
    tagName: 'element-book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            border-bottom: 1px solid #f8f8f8;
            padding: 4px 8px;
        }

        .examples-wrapper {
            padding: 32px;
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
    renderCallback: ({inputs}) => {
        const examples =
            inputs.currentEntry.type === ElementBookEntryTypeEnum.Page
                ? inputs.currentEntry.examples
                : [];

        const entryBreadcrumbs = listTitleBreadcrumbs(inputs.currentEntry, true);
        const exampleTemplates = makeExampleTemplates(examples, entryBreadcrumbs);

        return html`
            <div class="title-bar">
                <${ElementBookBreadcrumbs}
                    ${assign(ElementBookBreadcrumbs, {currentRoute: inputs.currentRoute})}
                ></${ElementBookBreadcrumbs}>
            </div>
            <div class="examples-wrapper">${exampleTemplates}</div>
        `;
    },
});

function makeExampleTemplates(
    examples: ReadonlyArray<Readonly<ElementBookPageExample>>,
    parentBreadcrumbs: ReadonlyArray<string>,
) {
    const allControlsHidden = examples.every((example) => example.hideControls);

    return examples.map((example) => {
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
                        parentBreadcrumbs,
                    })}
                ></${ElementBookExampleViewer}>
            </div>
        `;
    });
}
