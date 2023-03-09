import {PropertyInitMapBase, RenderOutput, TypedEvent} from 'element-vir';

export type ElementBookPageExample<StateInit extends PropertyInitMapBase = {}> = {
    stateInit?: StateInit;
    capturedEvents?: ReadonlyArray<string | TypedEvent>;
    render: (renderParams: {state: StateInit}) => RenderOutput;
};

export function createExample<StateInit extends PropertyInitMapBase = {}>(
    example: ElementBookPageExample<StateInit>,
) {
    return example;
}
