import {assign, css, defineElement, html, listen} from 'element-vir';
import {ElementBookEntry} from '../../data/element-book-entry/element-book-entry';
import {
    entriesToTree,
    findEntryByBreadcrumbs,
} from '../../data/element-book-entry/entry-tree/entry-tree';
import {findFirstPageBreadcrumbs} from '../../data/element-book-entry/entry-tree/walk-entry-tree';
import {createElementBookRouter} from '../../routing/create-element-book-router';
import {
    ElementBookFullRoute,
    ElementBookRouter,
    emptyElementBookFullRoute,
} from '../../routing/element-book-routing';
import {ChangeRouteEvent} from '../events/change-route.event';
import {BookNav} from './book-nav.element';
import {BookEntryDisplay} from './entry-display/book-entry-display.element';

export const ElementBookApp = defineElement<{
    entries: ReadonlyArray<ElementBookEntry>;
    baseRoute?: string;
    defaultPath?: ReadonlyArray<string>;
}>()({
    tagName: 'element-book-app',
    stateInit: {
        currentRoute: emptyElementBookFullRoute,
        router: undefined as undefined | ElementBookRouter,
    },
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
        }

        ${BookEntryDisplay} {
            flex-grow: 1;
        }
    `,
    initCallback({updateState, state, inputs}) {
        if (inputs.baseRoute && !state.router) {
            const router = createElementBookRouter(inputs.baseRoute);
            updateState({router});

            router.addRouteListener(true, (fullRoute) => {
                updateState({
                    currentRoute: fullRoute,
                });
            });
        }
    },
    renderCallback: ({state, inputs, updateState}) => {
        function updateRoutes(newRoute: Partial<ElementBookFullRoute>) {
            if (state.router) {
                state.router.setRoutes(newRoute);
            } else {
                updateState({
                    currentRoute: {
                        ...state.currentRoute,
                        ...newRoute,
                    },
                });
            }
        }

        const entriesTree = entriesToTree(inputs.entries);

        if (!state.currentRoute.paths.length) {
            const firstPageBreadcrumbs = findFirstPageBreadcrumbs(entriesTree);
            console.log({firstPageBreadcrumbs});

            const defaultPath: ReadonlyArray<string> | undefined =
                inputs.defaultPath ??
                (firstPageBreadcrumbs.length ? firstPageBreadcrumbs : undefined);

            if (defaultPath && defaultPath.length) {
                const newRoute: Pick<ElementBookFullRoute, 'paths'> = {
                    paths: defaultPath,
                };
                updateRoutes(newRoute);
            }
        }

        const currentEntry: ElementBookEntry = findEntryByBreadcrumbs(
            state.currentRoute.paths,
            entriesTree,
        ).entry;

        return html`
            <div
                class="root"
                ${listen(ChangeRouteEvent, (event) => {
                    updateRoutes(event.detail);
                })}
            >
                <${BookNav}
                    ${assign(BookNav, {
                        tree: entriesTree,
                        router: state.router,
                    })}
                ></${BookNav}>
                <${BookEntryDisplay}
                    ${assign(BookEntryDisplay, {
                        currentRoute: state.currentRoute,
                        currentEntry,
                    })}
                ></${BookEntryDisplay}>
            </div>
        `;
    },
});
