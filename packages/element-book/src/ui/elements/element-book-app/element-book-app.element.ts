import {waitForAnimationFrame} from '@augment-vir/browser';
import {areJsonEqual, extractErrorMessage} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {
    CurrentControls,
    createControlsFromTree,
    createNewCurrentControls,
} from '../../../data/book-entry/book-page/current-controls';
import {createBookTreeFromEntries} from '../../../data/book-tree/book-tree';
import {searchFlattenedNodes} from '../../../data/book-tree/search-nodes';
import {
    BookFullRoute,
    BookRouter,
    defaultBookFullRoute,
    extractSearchQuery,
} from '../../../routing/book-routing';
import {createBookRouter} from '../../../routing/create-book-router';
import {ColorTheme, colorThemeCssVars, setThemeCssVars} from '../../color-theme/color-theme';
import {ThemeConfig, createTheme} from '../../color-theme/create-color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {BookNav, scrollSelectedNavElementIntoView} from '../book-nav/book-nav.element';
import {BookError} from '../common/book-error.element';
import {BookEntryDisplay} from '../entry-display/book-entry-display.element';
import {BookPageControls} from '../entry-display/book-page/book-page-controls.element';
import {ElementBookSlotName} from './element-book-app-slots';
import {ElementBookConfig, GlobalValues} from './element-book-config';
import {getCurrentNodes} from './get-current-nodes';

type ColorThemeState = {config: ThemeConfig | undefined; theme: ColorTheme};

export const ElementBookApp = defineElement<ElementBookConfig>()({
    tagName: 'element-book-app',
    events: {
        pathUpdate: defineElementEvent<ReadonlyArray<string>>(),
    },
    stateInitStatic: {
        currentRoute: defaultBookFullRoute,
        router: undefined as undefined | BookRouter,
        loading: false,
        colors: {
            config: undefined,
            theme: createTheme(undefined),
        } as ColorThemeState,
        treeBasedCurrentControls: undefined as
            | {
                  entries: ElementBookConfig['entries'];
                  globalValues: GlobalValues;
                  currentControls: CurrentControls;
              }
            | undefined,
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

        ${BookEntryDisplay} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${BookNav} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }

        .loading {
            padding: 64px;
        }
    `,
    initCallback({host, state}) {
        setTimeout(() => {
            scrollNav(host, extractSearchQuery(state.currentRoute.paths), state.currentRoute);
        }, 1000);
    },
    cleanupCallback({state, updateState}) {
        if (state.router) {
            state.router.removeAllRouteListeners();
            updateState({router: undefined});
        }
    },
    renderCallback: ({state, inputs, host, updateState, dispatch, events}) => {
        try {
            function updateRoutes(newRoute: Partial<BookFullRoute>) {
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
                const router = createBookRouter(inputs.internalRouterConfig.basePath);
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

            const debug: boolean = inputs._debug ?? false;

            const originalTree = createBookTreeFromEntries({
                entries: inputs.entries,
                debug,
            });

            if (
                !state.treeBasedCurrentControls ||
                state.treeBasedCurrentControls.entries !== inputs.entries ||
                state.treeBasedCurrentControls.globalValues !== inputs.globalValues
            ) {
                updateState({
                    treeBasedCurrentControls: {
                        entries: inputs.entries,
                        globalValues: inputs.globalValues ?? {},
                        currentControls: createControlsFromTree(
                            originalTree.tree,
                            inputs.globalValues ?? {},
                        ),
                    },
                });
            }

            const searchQuery = extractSearchQuery(state.currentRoute.paths);

            const searchedNodes = searchQuery
                ? searchFlattenedNodes({
                      flattenedNodes: originalTree.flattenedNodes,
                      searchQuery,
                  })
                : undefined;

            const currentNodes =
                searchedNodes ??
                getCurrentNodes(
                    originalTree.flattenedNodes,
                    state.currentRoute.paths,
                    updateRoutes,
                );

            const currentControls = state.treeBasedCurrentControls?.currentControls;

            if (!currentControls) {
                return html`
                    <${BookError.assign({
                        message: 'Failed to generate page controls.',
                    })}></${BookError}>
                `;
            }

            if (inputs._debug) {
                console.info({currentControls});
            }

            return html`
                <div
                    class="root"
                    ${listen(ChangeRouteEvent, async (event) => {
                        const entryDisplay = host.shadowRoot.querySelector(
                            BookEntryDisplay.tagName,
                        );
                        updateState({loading: true});

                        /** Wait for the loading div to show up. */
                        while (!host.shadowRoot.querySelector('.loading')) {
                            console.log('waiting');
                            await waitForAnimationFrame();
                        }
                        await waitForAnimationFrame();

                        if (entryDisplay) {
                            entryDisplay.scroll({top: 0, behavior: 'smooth'});
                        } else {
                            console.error(
                                `Failed to find '${BookEntryDisplay.tagName}' for scrolling.`,
                            );
                        }
                        updateRoutes(event.detail);

                        const navElement = host.shadowRoot.querySelector(BookNav.tagName);

                        if (!(navElement instanceof BookNav)) {
                            throw new Error(`Failed to find child '${BookNav.tagName}'`);
                        }

                        updateState({loading: false});

                        scrollNav(host, searchQuery, state.currentRoute);
                    })}
                    ${listen(BookPageControls.events.controlValueChange, (event) => {
                        if (!state.treeBasedCurrentControls) {
                            return;
                        }
                        const newControls = createNewCurrentControls(
                            currentControls,
                            event.detail.fullUrlBreadcrumbs,
                            event.detail.newValues,
                        );

                        updateState({
                            treeBasedCurrentControls: {
                                ...state.treeBasedCurrentControls,
                                currentControls: newControls,
                            },
                        });
                    })}
                >
                    <${BookNav.assign({
                        flattenedNodes: originalTree.flattenedNodes,
                        router: state.router,
                        selectedPath: searchQuery ? undefined : state.currentRoute.paths.slice(1),
                    })}>
                        <slot
                            name=${ElementBookSlotName.NavHeader}
                            slot=${ElementBookSlotName.NavHeader}
                        ></slot>
                    </${BookNav}>
                    ${state.loading
                        ? html`
                              <div class="loading">Loading...</div>
                          `
                        : html`
                              <${BookEntryDisplay.assign({
                                  currentRoute: state.currentRoute,
                                  currentNodes,
                                  router: state.router!,
                                  debug,
                                  currentControls,
                                  originalTree: originalTree.tree,
                              })}>
                                  <slot
                                      name=${ElementBookSlotName.Footer}
                                      slot=${ElementBookSlotName.Footer}
                                  ></slot>
                              </${BookEntryDisplay}>
                          `}
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

async function scrollNav(
    host: typeof ElementBookApp.instanceType,
    searchQuery: string,
    currentRoutes: BookFullRoute,
) {
    /** If there is a search query, then there will be no selected nav to scroll to. */
    if (searchQuery) {
        return;
    }
    if (currentRoutes.paths.length <= 1) {
        return;
    }
    const navElement = host.shadowRoot.querySelector(BookNav.tagName);

    if (!(navElement instanceof BookNav)) {
        throw new Error(`Failed to find child '${BookNav.tagName}'`);
    }

    await scrollSelectedNavElementIntoView(navElement);
}
