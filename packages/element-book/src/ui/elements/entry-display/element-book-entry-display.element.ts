import {VirIcon} from '@electrovir/icon-element';
import {assign, css, html, renderIf} from 'element-vir';
import {ElementBookEntryTypeEnum} from '../../../data/element-book-entry/element-book-entry-type';
import {ElementBookPage} from '../../../data/element-book-entry/element-book-page/element-book-page';
import {
    EntryTreeNode,
    listBreadcrumbs,
} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {ElementBookFullRoute} from '../../../routing/element-book-routing';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {Element24Icon} from '../../icons/element-24.icon';
import {defineElementBookElement} from '../define-book-element';
import {ElementBookBreadcrumbs} from '../element-book-breadcrumbs.element';
import {ElementBookPageExamples} from './element-book-page-examples.element';

export const ElementBookEntryDisplay = defineElementBookElement<{
    currentRoute: Readonly<ElementBookFullRoute>;
    currentNode: Readonly<EntryTreeNode>;
}>()({
    tagName: 'element-book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .title-bar {
            position: sticky;
            top: 0;
            border-bottom: 1px solid #f8f8f8;
            padding: 4px 8px;
            background-color: white;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        h2 {
            margin: 0;
            margin-bottom: 24px;
            padding: 0;
            display: flex;
            gap: 16px;
            align-items: center;
        }

        ${VirIcon} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback: ({inputs}) => {
        const descendantPages = extractAllDescendantPages(inputs.currentNode);

        const entryBreadcrumbs = listBreadcrumbs(inputs.currentNode.entry, true);
        const showPageTitles = inputs.currentNode.entry.type !== ElementBookEntryTypeEnum.Page;
        const exampleTemplates = descendantPages.map((descendantPage) => {
            return html`
                <div class="page-examples">
                    ${renderIf(
                        showPageTitles,
                        html`
                            <h2>
                                <${VirIcon} ${assign(VirIcon, {icon: Element24Icon})}></${VirIcon}>
                                ${descendantPage.title}
                            </h2>
                        `,
                    )}
                    <${ElementBookPageExamples}
                        ${assign(ElementBookPageExamples, {
                            page: descendantPage,
                            parentBreadcrumbs: entryBreadcrumbs,
                        })}
                    ></${ElementBookPageExamples}>
                </div>
            `;
        });

        return html`
            <div class="title-bar">
                <${ElementBookBreadcrumbs}
                    ${assign(ElementBookBreadcrumbs, {currentRoute: inputs.currentRoute})}
                ></${ElementBookBreadcrumbs}>
            </div>
            <div class="all-examples-wrapper">${exampleTemplates}</div>
        `;
    },
});

function extractAllDescendantPages(node: Readonly<EntryTreeNode>): ElementBookPage[] {
    if (node.entry.type === ElementBookEntryTypeEnum.Page) {
        return [node.entry];
    }
    return Object.values(node.children).map(extractAllDescendantPages).flat();
}
