import {assign, css, html, listen} from 'element-vir';
import {ElementBookEntry} from '../../data/element-book-entry/element-book-entry';
import {entryStorage} from '../../data/element-book-entry/entry-storage/entry-storage';
import {
    emptyTreeNode,
    findEntryByTitles,
} from '../../data/element-book-entry/entry-storage/entry-tree';
import {createElementBookRouter} from '../../routing/create-element-book-router';
import {
    ElementBookFullRoute,
    ElementBookRouter,
    emptyElementBookFullRoute,
} from '../../routing/element-book-routing';
import {ChangeRouteEvent} from '../events/change-route.event';
import {BookNav} from './book-nav.element';
import {defineBookElement} from './define-book-element';
import {BookEntryDisplay} from './entry-display/book-entry-display.element';

export const BookApp = defineBookElement<{
    entries?: ReadonlyArray<ElementBookEntry>;
    baseRoute?: string;
    defaultPath?: ReadonlyArray<string>;
}>()({
    tagName: 'book-app',
    stateInit: {
        entriesTree: emptyTreeNode,
        currentRoute: emptyElementBookFullRoute,
        router: undefined as undefined | ElementBookRouter,
    },
    styles: css`
        :host {
            display: block;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
        }
    `,
    initCallback({updateState, state, inputs}) {
        entryStorage.watch((newTree) => {
            updateState({entriesTree: newTree});
        });

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

        if (!state.currentRoute.paths.length) {
            const firstTitle = Object.values(state.entriesTree.children)[0]?.entry?.title;

            const defaultPath: ReadonlyArray<string> | undefined =
                inputs.defaultPath ?? (firstTitle ? [firstTitle] : undefined);

            if (defaultPath && defaultPath.length) {
                const newRoute: Pick<ElementBookFullRoute, 'paths'> = {
                    paths: defaultPath,
                };
                updateRoutes(newRoute);
            }
        }

        const currentEntry: ElementBookEntry = findEntryByTitles(
            state.currentRoute.paths,
            state.entriesTree,
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
                        tree: state.entriesTree,
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
