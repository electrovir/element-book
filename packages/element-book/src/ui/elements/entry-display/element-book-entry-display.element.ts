import {VirIcon} from '@electrovir/icon-element';
import {HTMLTemplateResult, assign, css, html, renderIf} from 'element-vir';
import {isElementBookEntry} from '../../../data/element-book-entry/element-book-entry';
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
            z-index: 9999999999;
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
        const nestedPages = extractNestedPages(inputs.currentNode);

        const entryBreadcrumbs = listBreadcrumbs(inputs.currentNode.entry, true);
        const exampleTemplates = createNestedPagesTemplates(nestedPages, entryBreadcrumbs, true);

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

type NestedPages = ReadonlyArray<ElementBookPage | Record<string, NestedPages>>;

function createNestedPagesTemplates(
    nestedPages: NestedPages,
    parentBreadcrumbs: ReadonlyArray<string>,
    isTopLevel: boolean,
): HTMLTemplateResult[] {
    const showTitles = !isTopLevel;

    return nestedPages
        .map((nesting) => {
            if (isElementBookEntry(nesting, ElementBookEntryTypeEnum.Page)) {
                return html`
                    <div class="page-examples">
                        ${renderIf(
                            showTitles,
                            html`
                                <h2>
                                    <${VirIcon}
                                        ${assign(VirIcon, {icon: Element24Icon})}
                                    ></${VirIcon}>
                                    ${nesting.title}
                                </h2>
                            `,
                        )}
                        <${ElementBookPageExamples}
                            ${assign(ElementBookPageExamples, {
                                page: nesting,
                                parentBreadcrumbs: parentBreadcrumbs,
                            })}
                        ></${ElementBookPageExamples}>
                    </div>
                `;
            } else {
                return Object.entries(nesting).map(
                    ([
                        title,
                        nextNesting,
                    ]) => {
                        return html`
                            ${renderIf(
                                showTitles,
                                html`
                                    <h1>${title}</h1>
                                `,
                            )}
                            ${createNestedPagesTemplates(nextNesting, parentBreadcrumbs, false)}
                        `;
                    },
                );
            }
        })
        .flat();
}

function extractNestedPages(node: Readonly<EntryTreeNode>): NestedPages {
    if (node.entry.type === ElementBookEntryTypeEnum.Page) {
        return [node.entry];
    }

    const nestedPages = [
        {
            [node.entry.title]: Object.values(node.children).map(extractNestedPages).flat(),
        },
    ];

    return nestedPages;
}
