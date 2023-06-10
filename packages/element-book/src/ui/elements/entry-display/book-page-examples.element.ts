import {mapObjectValues} from '@augment-vir/common';
import {assign, css, html, listen, renderIf, repeat} from 'element-vir';
import {BookPage} from '../../../data/book-entry/book-page/book-page';
import {unsetInternalState} from '../../../data/unset';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {defineBookElement} from '../define-book-element';
import {BookExampleControls} from './book-example-controls.element';
import {BookExampleViewer} from './book-example-viewer.element';
import {BookPageControls} from './book-page-controls.element';

export const BookPageExamples = defineBookElement<{
    page: BookPage;
    parentBreadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'book-page-examples',
    styles: css`
        :host {
            display: flex;
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

        .individual-example-wrapper:hover ${BookExampleControls} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    stateInitStatic: {
        unset: unsetInternalState,
    },
    renderCallback({inputs, state, updateState}) {
        if (state.unset === unsetInternalState) {
            const newState: any = mapObjectValues(inputs.page.controls, (key, value) => {
                return value.initValue;
            });
            updateState({
                unset: undefined,
                ...newState,
            });
        }

        /**
         * Use the repeat directive here, instead of just a map, so that lit doesn't keep state
         * cached between element book pages.
         */
        const examplesTemplate = repeat(
            inputs.page.examples,
            (example) =>
                inputs.parentBreadcrumbs
                    .concat(example instanceof Error ? example.message : example.title)
                    .join('>'),
            (example) => {
                if (example instanceof Error) {
                    return html`
                        <p class="error">${example.message}</p>
                    `;
                }

                const exampleBreadcrumbs = inputs.parentBreadcrumbs.concat(example.title);

                return html`
                    <div class="individual-example-wrapper">
                        <${BookExampleControls}
                            ${assign(BookExampleControls, {
                                example,
                            })}
                        ></${BookExampleControls}>
                        <${BookExampleViewer}
                            ${assign(BookExampleViewer, {
                                example,
                                breadcrumbs: exampleBreadcrumbs,
                                currentPageControls: state,
                            })}
                        ></${BookExampleViewer}>
                    </div>
                `;
            },
        );

        return html`
            ${renderIf(
                !!Object.keys(inputs.page.controls).length,
                html`
                    <${BookPageControls}
                        ${assign(BookPageControls, {
                            config: inputs.page.controls,
                            currentValues: state as any,
                        })}
                        ${listen(BookPageControls.events.controlValueChange, (event) => {
                            updateState({[event.detail.name]: event.detail.value});
                        })}
                    ></${BookPageControls}>
                `,
            )}
            <section class="examples-wrapper">${examplesTemplate}</section>
        `;
    },
    options: {
        allowPolymorphicState: true,
    },
});
