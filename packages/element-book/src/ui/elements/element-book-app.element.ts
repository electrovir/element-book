import {extractErrorMessage} from '@augment-vir/common';
import {assign, css, defineElement, html, listen} from 'element-vir';
import {
    ElementBookEntry,
    isElementBookEntry,
} from '../../data/element-book-entry/element-book-entry';
import {ElementBookEntryTypeEnum} from '../../data/element-book-entry/element-book-entry-type';
import {
    entriesToTree,
    findEntryByBreadcrumbs,
    listBreadcrumbs,
} from '../../data/element-book-entry/entry-tree/entry-tree';
import {createElementBookRouter} from '../../routing/create-element-book-router';
import {
    ElementBookFullRoute,
    ElementBookRouter,
    emptyElementBookFullRoute,
} from '../../routing/element-book-routing';
import {ColorTheme, setThemeCssVars} from '../color-theme/color-theme';
import {createTheme} from '../color-theme/create-color-theme';
import {ChangeRouteEvent} from '../events/change-route.event';
import {ElementBookNav} from './element-book-nav.element';
import {ElementBookEntryDisplay} from './entry-display/element-book-entry-display.element';

type ColorThemeState = {original: string | undefined; theme: ColorTheme};

export const ElementBookApp = defineElement<{
    entries: ReadonlyArray<ElementBookEntry>;
    baseRoute?: string | undefined;
    defaultPath?: ReadonlyArray<string> | undefined;
    themeColor?: string | undefined;
}>()({
    tagName: 'element-book-app',
    stateInit: {
        currentRoute: emptyElementBookFullRoute,
        router: undefined as undefined | ElementBookRouter,
        colors: {
            original: undefined,
            theme: createTheme(undefined),
        } as ColorThemeState,
    },
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
        }

        .error {
            color: red;
        }

        .root {
            height: 100%;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${ElementBookEntryDisplay} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${ElementBookNav} {
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,
    initCallback({updateState, state, inputs, host}) {
        if (inputs.baseRoute && !state.router) {
            const router = createElementBookRouter(inputs.baseRoute);
            updateState({router});

            router.addRouteListener(true, (fullRoute) => {
                updateState({
                    currentRoute: fullRoute,
                });
            });
        }

        setThemeCssVars(host, state.colors.theme);
    },
    renderCallback: ({state, inputs, host, updateState}) => {
        try {
            if (inputs.themeColor !== state.colors?.original) {
                const newTheme = createTheme(inputs.themeColor);
                updateState({
                    colors: {
                        original: inputs.themeColor,
                        theme: newTheme,
                    },
                });
                setThemeCssVars(host, newTheme);
            }

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

            const initialNode = findEntryByBreadcrumbs(state.currentRoute.paths, entriesTree);
            if (
                !initialNode ||
                isElementBookEntry(initialNode.entry, ElementBookEntryTypeEnum.Root)
            ) {
                const firstChild = Object.values(entriesTree.children)[0];
                if (!firstChild) {
                    throw new Error(`No entries exist.`);
                }
                const firstEntryBreadcrumbs = listBreadcrumbs(firstChild.entry, true);

                const defaultPath: ReadonlyArray<string> | undefined =
                    inputs.defaultPath ??
                    (firstEntryBreadcrumbs.length ? firstEntryBreadcrumbs : undefined);

                if (defaultPath && defaultPath.length) {
                    const newRoute: Pick<ElementBookFullRoute, 'paths'> = {
                        paths: defaultPath,
                    };
                    updateRoutes(newRoute);
                }
            }

            const currentNode = findEntryByBreadcrumbs(state.currentRoute.paths, entriesTree);

            if (!currentNode) {
                throw new Error(`Tried to self-correct for invalid path ${state.currentRoute.paths.join(
                    '/',
                )}
                        but failed to do so.`);
            }

            return html`
                <div
                    class="root"
                    ${listen(ChangeRouteEvent, (event) => {
                        updateRoutes(event.detail);
                    })}
                >
                    <${ElementBookNav}
                        ${assign(ElementBookNav, {
                            tree: entriesTree,
                            router: state.router,
                            selectedPath: state.currentRoute.paths,
                        })}
                    ></${ElementBookNav}>
                    <${ElementBookEntryDisplay}
                        ${assign(ElementBookEntryDisplay, {
                            currentRoute: state.currentRoute,
                            currentNode,
                        })}
                    ></${ElementBookEntryDisplay}>
                </div>
            `;
        } catch (error) {
            return html`
                <p class="error">${extractErrorMessage(error)}</p>
            `;
        }
    },
});
