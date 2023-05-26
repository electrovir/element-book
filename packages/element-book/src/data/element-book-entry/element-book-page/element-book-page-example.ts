import {RequireNonVoid} from '@augment-vir/common';
import {PropertyInitMapBase, RenderParams, TypedEvent} from 'element-vir';
import {CSSResult} from 'lit';
import {
    ElementBookPageControlMap,
    PageControlsToValues,
} from './element-book-page-controls/element-book-page-control';

export type ElementBookPageExampleRenderParams<
    ParentControls extends ElementBookPageControlMap,
    StateInit extends PropertyInitMapBase,
> = Pick<RenderParams<any, any, StateInit, any, any, any>, 'state' | 'updateState'> & {
    controls: PageControlsToValues<ParentControls>;
};

export type ElementBookPageExampleInit<
    ParentControls extends ElementBookPageControlMap,
    StateInit extends PropertyInitMapBase,
    RenderOutput,
> = {
    /** This example's title. Each title in a page must be unique. */
    title: string;
    /** Initialize the state for this example. */
    stateInit?: StateInit;
    /** Specify which events this example should intercept (so the user can see them). */
    capturedEvents?: ReadonlyArray<string | TypedEvent>;
    /**
     * Style the example. You can even use the :host selector to style this specific example's
     * wrapper element!
     */
    styles?: CSSResult;
    /** Render the example. */
    renderCallback: RequireNonVoid<
        RenderOutput,
        (
            renderParams: ElementBookPageExampleRenderParams<ParentControls, StateInit>,
        ) => RenderOutput,
        'renderCallback is missing a return statement'
    >;
};
