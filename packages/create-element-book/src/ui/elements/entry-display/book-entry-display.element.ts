import {assign, css, html} from 'element-vir';
import {ReadonlyDeep} from 'type-fest';
import {ElementBookEntry} from '../../../data/element-book-entry/element-book-entry';
import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {ElementBookFullRoute} from '../../../routing/element-book-routing';
import {BookBreadcrumbs} from '../book-breadcrumbs.element';
import {defineBookElement} from '../define-book-element';

export const BookEntryDisplay = defineBookElement<{
    currentRoute: ReadonlyDeep<ElementBookFullRoute>;
    currentEntry: ElementBookEntry;
}>()({
    tagName: 'book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }
    `,
    renderCallback: ({inputs}) => {
        const examples =
            inputs.currentEntry.type === ElementBookEntryTypeEnum.Page
                ? inputs.currentEntry.examples
                : [];

        return html`
            <${BookBreadcrumbs}
                ${assign(BookBreadcrumbs, {currentRoute: inputs.currentRoute})}
            ></${BookBreadcrumbs}>
            <div class="examples-wrapper">
                ${examples.map((example) => {
                    return html`
                        hi this is an example
                    `;
                })}
            </div>
        `;
    },
});
