import {areJsonEqual, extractErrorMessage} from '@augment-vir/common';
import {assign, css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {entriesToTree} from '../../../data/element-book-entry/entry-tree/entry-tree';
import {createSearchedTree} from '../../../data/element-book-entry/entry-tree/entry-tree-search';
import {createElementBookRouter} from '../../../routing/create-element-book-router';
import {
    ElementBookFullRoute,
    ElementBookRouter,
    defaultElementBookFullRoute,
    extractSearchQuery,
} from '../../../routing/element-book-routing';
import {ColorTheme, colorThemeCssVars, setThemeCssVars} from '../../color-theme/color-theme';
import {ThemeConfig, createTheme} from '../../color-theme/create-color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {ElementBookNav} from '../element-book-nav.element';
import {ElementBookEntryDisplay} from '../entry-display/element-book-entry-display.element';
import {ElementBookConfig} from './element-book-config';
import {getCurrentTreeEntry} from './get-current-entry';

type ColorThemeState = {config: ThemeConfig | undefined; theme: ColorTheme};

export const ElementBookApp = defineElement<ElementBookConfig>()({
    tagName: 'element-book-app',
    events: {
        pathUpdate: defineElementEvent<ReadonlyArray<string>>(),
    },
    stateInit: {
        currentRoute: defaultElementBookFullRoute,
        router: undefined as undefined | ElementBookRouter,
        colors: {
            config: undefined,
            theme: createTheme(undefined),
        } as ColorThemeState,
    },
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${colorThemeCssVars['element-book-page-background-color'].value};
            color: ${colorThemeCssVars['element-book-page-foreground-color'].value};
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
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
        }
    `,
    cleanupCallback({state, updateState}) {
        if (state.router) {
            state.router.removeAllRouteListeners();
            updateState({router: undefined});
        }
    },
    renderCallback: ({state, inputs, host, updateState, dispatch, events}) => {
        try {
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

                if (
                    inputs.elementBookRoutePaths &&
                    !areJsonEqual(inputs.elementBookRoutePaths, state.currentRoute.paths)
                ) {
                    dispatch(new events.pathUpdate(newRoute.paths ?? []));
                }
            }

            if (
                inputs.elementBookRoutePaths &&
                !areJsonEqual(inputs.elementBookRoutePaths, state.currentRoute.paths)
            ) {
                updateRoutes({paths: inputs.elementBookRoutePaths as any});
            }

            if (inputs.internalRouterConfig?.useInternalRouter && !state.router) {
                const router = createElementBookRouter(inputs.internalRouterConfig.basePath);
                updateState({router});

                router.addRouteListener(true, (fullRoute) => {
                    updateState({
                        currentRoute: fullRoute,
                    });
                });
            } else if (!inputs.internalRouterConfig?.useInternalRouter && state.router) {
                state.router.removeAllRouteListeners();
            }

            const inputThemeConfig: ThemeConfig = {
                themeColor: inputs.themeColor,
            };
            if (!areJsonEqual(inputThemeConfig, state.colors?.config)) {
                const newTheme = createTheme(inputThemeConfig);
                updateState({
                    colors: {
                        config: inputThemeConfig,
                        theme: newTheme,
                    },
                });
                setThemeCssVars(host, newTheme);
            }

            const originalTree = entriesToTree(inputs.entries, inputs.everythingTitle);

            const searchQuery = extractSearchQuery(state.currentRoute.paths);

            const searchedTree = searchQuery
                ? createSearchedTree({
                      entries: inputs.entries,
                      searchQuery,
                      startTree: originalTree,
                  })
                : originalTree;

            const currentEntryTreeNode = getCurrentTreeEntry(
                searchedTree,
                state.currentRoute.paths,
                updateRoutes,
            );

            return html`
                <div
                    class="root"
                    ${listen(ChangeRouteEvent, (event) => {
                        const entryDisplay = host.shadowRoot.querySelector(
                            ElementBookEntryDisplay.tagName,
                        );

                        if (entryDisplay) {
                            entryDisplay.scroll({top: 0, behavior: 'smooth'});
                        } else {
                            console.error(
                                `Failed to find '${ElementBookEntryDisplay.tagName}' for scrolling.`,
                            );
                        }
                        updateRoutes(event.detail);
                    })}
                >
                    <${ElementBookNav}
                        ${assign(ElementBookNav, {
                            tree: originalTree,
                            router: state.router,
                            selectedPath: state.currentRoute.paths,
                        })}
                    >
                        <slot name="nav-header"></slot>
                    </${ElementBookNav}>
                    <${ElementBookEntryDisplay}
                        ${assign(ElementBookEntryDisplay, {
                            currentRoute: state.currentRoute,
                            currentNode: currentEntryTreeNode,
                            router: state.router!,
                        })}
                    ></${ElementBookEntryDisplay}>
                </div>
            `;
        } catch (error) {
            console.error(error);
            return html`
                <p class="error">${extractErrorMessage(error)}</p>
            `;
        }
    },
});
