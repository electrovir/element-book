import {RequireNonVoid, combineErrors} from '@augment-vir/common';
import {PropertyInitMapBase, RenderParams, TypedEvent} from 'element-vir';
import {CSSResult} from 'lit';
import {ElementBookPage, PageControlsFromPage} from './element-book-page';
import {PageControlsToValues} from './element-book-page-controls/element-book-page-control';

export type ElementBookPageExampleRenderParams<
    ParentPage extends ElementBookPage<any>,
    StateInit extends PropertyInitMapBase,
> = Pick<RenderParams<any, any, StateInit, any, any, any>, 'state' | 'updateState'> & {
    controls: PageControlsToValues<PageControlsFromPage<ParentPage>>;
};

export type ElementBookPageExampleInit<
    ParentPage extends ElementBookPage<any>,
    StateInit extends PropertyInitMapBase,
    RenderOutput,
> = {
    /** This example's title. Each title in a page must be unique. */
    title: string;
    /** The page that this example belongs to. */
    parent: ParentPage;
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
        (renderParams: ElementBookPageExampleRenderParams<ParentPage, StateInit>) => RenderOutput,
        'renderCallback is missing a return statement'
    >;
};

/** Inserts the defined element example into its parent page. */
export function insertElementExample<
    ParentPage extends ElementBookPage<any>,
    StateInit extends PropertyInitMapBase = {},
    RenderOutput = any,
>(exampleInit: ElementBookPageExampleInit<ParentPage, StateInit, RenderOutput>): void {
    const errors: Error[] = [];

    const failureMessage = `Failed to define example '${exampleInit.parent.pageBreadcrumbs
        .concat(exampleInit.title)
        .join(' > ')}'`;

    if (exampleInit.parent.examples.hasOwnProperty(exampleInit.title)) {
        errors.push(
            new Error(`${failureMessage}: title '${exampleInit.title}' is already being used.`),
        );
    } else if (!exampleInit.title) {
        errors.push(new Error(`${failureMessage}: example title is missing or empty.`));
    }

    if (errors.length) {
        exampleInit.parent.examples[exampleInit.title] = combineErrors(errors) as any;
    } else {
        exampleInit.parent.examples[exampleInit.title] = exampleInit;
    }
}
