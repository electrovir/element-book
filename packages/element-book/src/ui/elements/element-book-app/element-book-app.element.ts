import {check} from '@augment-vir/assert';
import {extractErrorMessage, makeWritable} from '@augment-vir/common';
import {waitForAnimationFrame} from '@augment-vir/web';
import {colorCss} from '@electrovir/color';
import {css, defineElement, defineElementEvent, html, listen, nothing} from 'element-vir';
import {applyCssVarsViaStyleElement} from 'lit-css-vars';
import {themeDefaultKey} from 'theme-vir';
import {ViraError, viraTheme, viraThemeDarkOverride} from 'vira';
import {
    type ControlsWrapper,
    createNewControls,
    updateTreeControls,
} from '../../../data/book-entry/book-page/controls-wrapper.js';
import {createBookTreeFromEntries} from '../../../data/book-tree/book-tree.js';
import {searchFlattenedNodes} from '../../../data/book-tree/search-nodes.js';
import {type BookRouter, createBookRouter} from '../../../routing/book-router.js';
import {
    type BookFullRoute,
    defaultBookFullRoute,
    extractSearchQuery,
} from '../../../routing/book-routing.js';
import {type ColorTheme, setThemeCssVars} from '../../color-theme/color-theme.js';
import {type ThemeConfig, createTheme} from '../../color-theme/create-color-theme.js';
import {ChangeRouteEvent} from '../../events/change-route.event.js';
import {BookNav} from '../book-nav/book-nav.element.js';
import {BookPageControls} from '../entry-display/book-page/book-page-controls.element.js';
import {BookEntryDisplay} from '../entry-display/entry-display/book-entry-display.element.js';
import {type ElementBookConfig} from './element-book-config.js';
import {getCurrentNodes} from './get-current-nodes.js';
import {type GlobalValues} from './global-values.js';

/**
 * Current color theme state used inside of {@link ElementBookApp}.
 *
 * @category Internal
 */
export type ColorThemeState = {config: ThemeConfig | undefined; theme: ColorTheme};

/**
 * The element-book app itself. Instantiate one of these where you want your element-book pages to
 * render. Make sure to also provide an array of pages to actually render!
 *
 * @category Main
 */
export const ElementBookApp = defineElement<ElementBookConfig>()({
    tagName: 'element-book-app',
    state() {
        return {
            currentRoute: defaultBookFullRoute,
            router: undefined as undefined | BookRouter,
            loading: true,
            colors: {
                config: undefined,
                theme: createTheme(undefined),
            },
            treeBasedControls: undefined as
                | {
                      pages: ElementBookConfig['pages'];
                      lastGlobalInputs: GlobalValues;
                      controls: ControlsWrapper;
                  }
                | undefined,
            originalWindowTitle: undefined as string | undefined,
            isDarkMode: globalThis.matchMedia('(prefers-color-scheme: dark)').matches,
            /** Cleanup callback for the dark mode media query listener. */
            darkModeCleanup: undefined as (() => void) | undefined,
        };
    },
    events: {
        pathUpdate: defineElementEvent<ReadonlyArray<string>>(),
    },
    slotNames: [
        /**
         * Used to specify a footer for the main element example viewer. It always appears at the
         * bottom of the viewer's scroll area.
         */
        'element-book-app-footer',
        /**
         * Used to specify a header above the navigation sidebar. This is a particularly good place
         * for branding.
         */
        'element-book-app-nav-header',
    ],
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            ${colorCss(viraTheme.colors[themeDefaultKey])}
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${BookEntryDisplay} {
            flex-grow: 1;
            max-height: 100%;
        }

        ${BookNav} {
            flex-shrink: 0;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,
    cleanup({state, updateState}) {
        if (state.router) {
            state.router.destroy();
        }
        if (state.darkModeCleanup) {
            state.darkModeCleanup();
        }
        updateState({
            router: undefined,
            darkModeCleanup: undefined,
        });
    },
    render: ({state, inputs, host, updateState, dispatch, events, slotNames}) => {
        if (inputs._debug) {
            console.info('rendering element-book app');
        }

        function mergeRoutes(newRouteInput: Partial<BookFullRoute>) {
            return {
                ...state.currentRoute,
                ...newRouteInput,
            };
        }

        function areRoutesNew(newRouteInput: Partial<BookFullRoute>) {
            const newRoute = mergeRoutes(newRouteInput);

            return !check.jsonEquals(state.currentRoute, newRoute);
        }

        function updateWindowTitle(topNodeTitle: string | undefined) {
            if (!inputs.preventWindowTitleChange) {
                if (!state.originalWindowTitle) {
                    updateState({
                        originalWindowTitle: document.title,
                    });
                }
                document.title = [
                    state.originalWindowTitle,
                    topNodeTitle,
                ]
                    .filter(check.isTruthy)
                    .join(' - ');
            }
        }

        function updateRoutes(newRouteInput: Partial<BookFullRoute>) {
            if (!areRoutesNew(newRouteInput)) {
                return;
            }
            const newRoute = mergeRoutes(newRouteInput);

            if (state.router) {
                state.router.setRoute(newRoute);
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
                !check.jsonEquals(inputs.elementBookRoutePaths, state.currentRoute.paths)
            ) {
                dispatch(new events.pathUpdate(newRoute.paths));
            }
        }

        try {
            if (
                inputs.elementBookRoutePaths &&
                !check.jsonEquals(inputs.elementBookRoutePaths, state.currentRoute.paths)
            ) {
                updateRoutes({
                    paths: makeWritable(inputs.elementBookRoutePaths),
                });
            }

            if (inputs.internalRouterConfig?.useInternalRouter && !state.router) {
                const router = createBookRouter(inputs.internalRouterConfig.basePath);
                updateState({
                    router,
                });

                router.listen(true, (fullRoute) => {
                    updateState({
                        currentRoute: fullRoute,
                    });
                });
            } else if (!inputs.internalRouterConfig?.useInternalRouter && state.router) {
                state.router.destroy();
            }

            const inputThemeConfig: ThemeConfig = {
                themeColor: inputs.themeColor,
            };
            if (!check.jsonEquals<unknown, unknown>(inputThemeConfig, state.colors.config)) {
                const newTheme = createTheme(inputThemeConfig);
                updateState({
                    colors: {
                        config: inputThemeConfig,
                        theme: newTheme,
                    },
                });
                setThemeCssVars(host, newTheme);
            }

            if (!state.darkModeCleanup) {
                const query = globalThis.matchMedia('(prefers-color-scheme: dark)');
                const listener = (event: MediaQueryListEvent) => {
                    updateState({
                        isDarkMode: event.matches,
                    });
                };
                query.addEventListener('change', listener);
                updateState({
                    isDarkMode: query.matches,
                    darkModeCleanup: () => {
                        query.removeEventListener('change', listener);
                    },
                });
            }

            const isDarkMode = inputs.darkMode ?? state.isDarkMode;

            applyCssVarsViaStyleElement(
                isDarkMode ? viraThemeDarkOverride.overrides : {},
                'element-book-dark-mode',
            );

            const debug: boolean = inputs._debug ?? false;

            const originalTree = createBookTreeFromEntries({
                entries: inputs.pages,
                debug,
            });

            if (
                !state.treeBasedControls ||
                state.treeBasedControls.pages !== inputs.pages ||
                state.treeBasedControls.lastGlobalInputs !== inputs.globalValues
            ) {
                if (inputs._debug) {
                    console.info('regenerating global controls');
                }
                updateState({
                    treeBasedControls: {
                        pages: inputs.pages,
                        lastGlobalInputs: inputs.globalValues ?? {},
                        controls: updateTreeControls(originalTree.tree, {
                            children: state.treeBasedControls?.controls.children,
                            controls: inputs.globalValues,
                        }),
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

            updateWindowTitle(currentNodes[0]?.entry.title);

            const currentControls = state.treeBasedControls?.controls;

            if (!currentControls) {
                return html`
                    <${ViraError}>Failed to generate page controls.</${ViraError}>
                `;
            }

            if (inputs._debug) {
                console.info({
                    currentControls,
                });
            }

            return html`
                <div
                    class="root"
                    ${listen(ChangeRouteEvent, (event) => {
                        const newRoute = event.detail;

                        if (!areRoutesNew(newRoute)) {
                            return;
                        }

                        updateState({
                            loading: true,
                        });

                        updateRoutes(newRoute);

                        const navElement = host.shadowRoot.querySelector(BookNav.tagName);

                        if (!(navElement instanceof BookNav)) {
                            throw new TypeError(`Failed to find child '${BookNav.tagName}'`);
                        }
                    })}
                    ${listen(BookPageControls.events.controlValueChange, (event) => {
                        if (!state.treeBasedControls) {
                            return;
                        }
                        const newControls = createNewControls(
                            currentControls,
                            event.detail.fullUrlBreadcrumbs,
                            event.detail.newValues,
                        );

                        updateState({
                            treeBasedControls: {
                                ...state.treeBasedControls,
                                controls: newControls,
                            },
                        });
                    })}
                >
                    ${inputs.blockNavigation
                        ? nothing
                        : html`
                              <${BookNav.assign({
                                  flattenedNodes: originalTree.flattenedNodes,
                                  router: state.router,
                                  selectedPath: searchQuery
                                      ? undefined
                                      : state.currentRoute.paths.slice(1),
                              })}>
                                  <slot name=${slotNames['element-book-app-nav-header']}></slot>
                              </${BookNav}>
                          `}
                    <${BookEntryDisplay.assign({
                        blockNavigation: !!inputs.blockNavigation,
                        controls: currentControls,
                        currentNodes,
                        currentRoute: state.currentRoute,
                        debug,
                        originalTree: originalTree.tree,
                        router: state.router,
                        showLoading: state.loading,
                    })}
                        ${listen(BookEntryDisplay.events.loadingRender, async (event) => {
                            await waitForAnimationFrame();
                            const entryDisplay = host.shadowRoot.querySelector(
                                BookEntryDisplay.tagName,
                            );

                            if (entryDisplay) {
                                entryDisplay.scroll({
                                    top: 0,
                                    behavior: 'instant',
                                });
                            } else {
                                console.error(
                                    `Failed to find '${BookEntryDisplay.tagName}' for scrolling.`,
                                );
                            }
                            await waitForAnimationFrame();
                            updateState({
                                loading: !event.detail,
                            });
                        })}
                    >
                        <slot name=${slotNames['element-book-app-footer']}></slot>
                    </${BookEntryDisplay}>
                </div>
            `;
        } catch (error) {
            console.error(error);
            return html`
                <${ViraError}>${extractErrorMessage(error)}</${ViraError}>
            `;
        }
    },
});
