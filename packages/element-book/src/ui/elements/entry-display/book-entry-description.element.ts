import {css, html, type HTMLTemplateResult} from 'element-vir';
import {themeDefaultKey} from 'theme-vir';
import {viraTheme} from 'vira';
import {defineBookElement} from '../define-book-element.js';

export const BookEntryDescription = defineBookElement<{
    descriptionParagraphs: ReadonlyArray<string | HTMLTemplateResult>;
}>()({
    tagName: 'book-entry-description',
    styles: css`
        :host {
            color: ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${viraTheme.colors[themeDefaultKey].foreground.value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }

        code {
            font-size: 1.2em;
        }
    `,
    render({inputs}) {
        return inputs.descriptionParagraphs.map((paragraph) => {
            return html`
                <p>${paragraph}</p>
            `;
        });
    },
});
