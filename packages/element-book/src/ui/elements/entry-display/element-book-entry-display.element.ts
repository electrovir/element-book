import {VirIcon} from '@electrovir/icon-element';
import {HTMLTemplateResult, TemplateResult, assign, css, html} from 'element-vir';
import {BaseElementBookEntry} from '../../../data/element-book-entry/element-book-chapter/element-book-chapter';
import {
    ElementBookEntry,
    isElementBookEntry,
} from '../../../data/element-book-entry/element-book-entry';
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
            border-bottom: 1px solid
                ${colorThemeCssVars['element-book-page-foreground-faint-level-2-color'].value};
            padding: 4px 8px;
            background-color: ${colorThemeCssVars['element-book-page-background-color'].value};
            z-index: 9999999999;
        }

        .all-examples-wrapper {
            padding: 32px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        h1,
        h2,
        h3 {
            margin: 0;
            padding: 0;
        }

        .header-with-icon {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ${VirIcon} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }

        .page-examples .title-group {
            margin-bottom: 24px;
        }

        .description {
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        .description:hover {
            color: ${colorThemeCssVars['element-book-page-foreground-color'].value};
        }

        .description p {
            margin: 0;
            padding: 0;
        }

        .description p:first-child {
            margin-top: 8px;
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

type NestedPages = ReadonlyArray<
    ElementBookPage | Record<string, {entry: ElementBookEntry; nested: NestedPages}>
>;

function createNestedPagesTemplates(
    nestedPages: NestedPages,
    parentBreadcrumbs: ReadonlyArray<string>,
    isTopLevel: boolean,
): HTMLTemplateResult[] {
    return nestedPages
        .map((nestingEntry) => {
            if (isElementBookEntry(nestingEntry, ElementBookEntryTypeEnum.Page)) {
                const headerContentsTemplate = html`
                    <${VirIcon} ${assign(VirIcon, {icon: Element24Icon})}></${VirIcon}>
                    ${nestingEntry.title}
                `;
                const headerTemplate = isTopLevel
                    ? html`
                          <h2 class="header-with-icon">${headerContentsTemplate}</h2>
                      `
                    : html`
                          <h3 class="header-with-icon">${headerContentsTemplate}</h3>
                      `;

                return html`
                    <div class="page-examples">
                        <div class="title-group">
                            ${headerTemplate} ${createDescriptionTemplate(nestingEntry)}
                        </div>
                        <${ElementBookPageExamples}
                            ${assign(ElementBookPageExamples, {
                                page: nestingEntry,
                                parentBreadcrumbs: parentBreadcrumbs,
                            })}
                        ></${ElementBookPageExamples}>
                    </div>
                `;
            } else {
                return Object.entries(nestingEntry).map(
                    ([
                        title,
                        currentEntry,
                    ]) => {
                        const titleTemplate = isTopLevel
                            ? html`
                                  <h1>${title}</h1>
                              `
                            : html`
                                  <h2>${title}</h2>
                              `;

                        return html`
                            <div class="title-group">
                                ${titleTemplate} ${createDescriptionTemplate(currentEntry.entry)}
                            </div>
                            ${createNestedPagesTemplates(
                                currentEntry.nested,
                                parentBreadcrumbs,
                                false,
                            )}
                        `;
                    },
                );
            }
        })
        .flat();
}

function createDescriptionTemplate(entry: BaseElementBookEntry): TemplateResult {
    const paragraphs: TemplateResult[] = (entry.descriptionParagraphs ?? []).map((paragraph) => {
        return html`
            <p>${paragraph}</p>
        `;
    });

    return html`
        <div class="description">${paragraphs}</div>
    `;
}

function extractNestedPages(node: Readonly<EntryTreeNode>): NestedPages {
    if (node.entry.type === ElementBookEntryTypeEnum.Page) {
        return [node.entry];
    }

    const nestedPages: NestedPages = [
        {
            [node.entry.title]: {
                entry: node.entry,
                nested: Object.values(node.children).map(extractNestedPages).flat(),
            },
        },
    ];

    return nestedPages;
}
