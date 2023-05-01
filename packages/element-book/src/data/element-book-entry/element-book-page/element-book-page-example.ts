import {PropertyInitMapBase, TypedEvent} from 'element-vir';
import {CSSResult} from 'lit';

export type ElementBookPageExample<StateInit extends PropertyInitMapBase = any> = {
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
    /** Set to true to hide the example controls (example title and buttons). */
    hideControls?: boolean | undefined;
    /** Render the example. */
    render: (renderParams: {
        state: StateInit;
        updateState: (newState: Partial<StateInit>) => void;
    }) => unknown;
};

export function createExample<StateInit extends PropertyInitMapBase>(
    example: ElementBookPageExample<StateInit>,
) {
    return example;
}
