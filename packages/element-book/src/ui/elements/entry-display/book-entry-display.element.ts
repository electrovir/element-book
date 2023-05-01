import {assign, css, html} from 'element-vir';
import {ReadonlyDeep} from 'type-fest';
import {ElementBookEntry} from '../../../data/element-book-entry/element-book-entry';
import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {ElementBookPageExample} from '../../../data/element-book-entry/element-book-page/element-book-page-example';
import {listTitleBreadcrumbs} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookFullRoute} from '../../../routing/element-book-routing';
import {BookBreadcrumbs} from '../book-breadcrumbs.element';
import {defineBookElement} from '../define-book-element';
import {BookExampleViewer} from './book-example-viewer.element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: ReadonlyDeep<ElementBookFullRoute>;
    currentEntry: ReadonlyDeep<ElementBookEntry>;
}>()({
    tagName: 'book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 32px;
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
            <${BookBreadcrumbs}
                ${assign(BookBreadcrumbs, {currentRoute: inputs.currentRoute})}
            ></${BookBreadcrumbs}>
            <div class="examples-wrapper">${exampleTemplates}</div>
        `;
    },
});

function makeExampleTemplates(
    examples: ReadonlyArray<ReadonlyDeep<ElementBookPageExample>>,
    parentBreadcrumbs: ReadonlyArray<string>,
) {
    return examples.map((example) => {
        return html`
            <${BookExampleViewer}
                ${assign(BookExampleViewer, {
                    example,
                    parentBreadcrumbs,
                })}
            ></${BookExampleViewer}>
        `;
    });
}
