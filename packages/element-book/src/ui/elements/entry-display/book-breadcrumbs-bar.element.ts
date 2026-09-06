import {wait} from '@augment-vir/common';
import {css, html, listen, renderIf} from 'element-vir';
import {themeDefaultKey} from 'theme-vir';
import {viraTheme} from 'vira';
import {type BookRouter} from '../../../routing/book-router.js';
import {
    type BookFullRoute,
    BookMainRoute,
    defaultBookFullRoute,
} from '../../../routing/book-routing.js';
import {ChangeRouteEvent} from '../../events/change-route.event.js';
import {BookBreadcrumbs} from '../book-breadcrumbs.element.js';
import {defineBookElement} from '../define-book-element.js';

export const BookBreadcrumbsBar = defineBookElement<{
    currentSearch: string;
    currentRoute: Readonly<BookFullRoute>;
    router: Readonly<BookRouter> | undefined;
}>()({
    tagName: 'book-breadcrumbs-bar',
    styles: css`
        :host {
            border-bottom: 1px solid
                ${viraTheme.colors['vira-grey-foreground-placeholder'].foreground.value};
            padding: 4px 8px;
            background-color: ${viraTheme.colors[themeDefaultKey].background.value};
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,
    render({inputs, dispatch}) {
        return html`
            ${renderIf(
                !!inputs.currentSearch,
                html`
                    &nbsp;
                `,
                html`
                    <${BookBreadcrumbs.assign({
                        currentRoute: inputs.currentRoute,
                        router: inputs.router,
                    })}></${BookBreadcrumbs}>
                `,
            )}
            <input
                placeholder="search"
                .value=${inputs.currentSearch}
                ${listen('input', async (event) => {
                    const inputElement = event.currentTarget;

                    if (!(inputElement instanceof HTMLInputElement)) {
                        throw new TypeError('Failed to find input element for search.');
                    }
                    const preThrottleValue = inputElement.value;
                    // throttle it a bit
                    await wait({
                        milliseconds: 200,
                    });

                    if (inputElement.value !== preThrottleValue) {
                        return;
                    }

                    if (inputElement.value) {
                        dispatch(
                            new ChangeRouteEvent({
                                detail: {
                                    paths: [
                                        BookMainRoute.Search,
                                        encodeURIComponent(inputElement.value),
                                    ],
                                },
                            }),
                        );
                    } else {
                        dispatch(
                            new ChangeRouteEvent({
                                detail: defaultBookFullRoute,
                            }),
                        );
                    }
                })}
            />
        `;
    },
});
