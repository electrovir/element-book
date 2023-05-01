import {PropertyInitMapBase, TypedEvent} from 'element-vir';

export type ElementBookPageExample<StateInit extends PropertyInitMapBase = any> = {
    title: string;
    stateInit?: StateInit;
    capturedEvents?: ReadonlyArray<string | TypedEvent>;
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
