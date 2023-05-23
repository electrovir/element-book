import {mapObjectValues} from '@augment-vir/common';
import {assign, classMap, css, html, listen, renderIf, repeat} from 'element-vir';
import {ElementBookPage} from '../../../data/element-book-entry/element-book-page/element-book-page';
import {unsetInternalState} from '../../../data/unset';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {defineElementBookElement} from '../define-book-element';
import {ElementBookExampleControls} from './element-book-example-controls.element';
import {ElementBookExampleViewer} from './element-book-example-viewer.element';
import {ElementBookPageControls} from './element-book-page-controls.element';

export const ElementBookPageExamples = defineElementBookElement<{
    page: ElementBookPage;
    parentBreadcrumbs: ReadonlyArray<string>;
}>()({
    tagName: 'element-book-page-examples',
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

        .individual-example-wrapper:hover ${ElementBookExampleControls} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }

        .hidden-controls {
            pointer-events: none;
            visibility: hidden;
        }
    `,
    stateInit: {
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

        const examples = inputs.page.examples;

        const allControlsHidden = Object.values(examples).every(
            (example) => 'hideExampleControls' in example && example.hideExampleControls,
        );

        /**
         * Use the repeat directive here, instead of just a map, so that lit doesn't accidentally
         * keep state cached between element book pages.
         */
        const examplesTemplate = repeat(
            Object.values(examples),
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
                        ${renderIf(
                            !allControlsHidden,
                            html`
                                <${ElementBookExampleControls}
                                    class=${classMap({
                                        /**
                                         * If not all controls are hidden, we still want to render
                                         * every control so that they take up space, but just hide
                                         * them.
                                         */
                                        'hidden-controls': !!example.hideExampleControls,
                                    })}
                                    ${assign(ElementBookExampleControls, {
                                        example,
                                    })}
                                ></${ElementBookExampleControls}>
                            `,
                        )}
                        <${ElementBookExampleViewer}
                            ${assign(ElementBookExampleViewer, {
                                example,
                                breadcrumbs: exampleBreadcrumbs,
                                currentPageControls: state,
                            })}
                        ></${ElementBookExampleViewer}>
                    </div>
                `;
            },
        );

        return html`
            <${ElementBookPageControls}
                ${assign(ElementBookPageControls, {
                    config: inputs.page.controls,
                    currentValues: state as any,
                })}
                ${listen(ElementBookPageControls.events.controlValueChange, (event) => {
                    updateState({[event.detail.name]: event.detail.value});
                })}
            ></${ElementBookPageControls}>
            <section class="examples-wrapper">${examplesTemplate}</section>
        `;
    },
    options: {
        allowPolymorphicState: true,
    },
});
