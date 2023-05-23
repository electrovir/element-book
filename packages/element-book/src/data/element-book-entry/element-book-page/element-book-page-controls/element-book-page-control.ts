import {
    ElementBookPageControlTypeEnum,
    ElementBookPageControlValueType,
} from './element-book-page-control-type';

export type ElementBookPageControl<ControlType extends ElementBookPageControlTypeEnum> = {
    controlType: ControlType;
    initValue: ElementBookPageControlValueType[ControlType];
    controlName: string;
};

export type ElementBookPageControlInit<ControlType extends ElementBookPageControlTypeEnum> =
    // 'name' will be inserted later by the page
    Omit<ElementBookPageControl<ControlType>, 'controlName'>;

/** Define a page control. This doesn't do anything fancy but it helps immensely with type inference. */
export function definePageControl<ControlType extends ElementBookPageControlTypeEnum>(
    controlInit: ElementBookPageControlInit<ControlType>,
) {
    return controlInit;
}

export type ElementBookPageControlMap = Record<
    string,
    ElementBookPageControlInit<ElementBookPageControlTypeEnum>
>;

export type PageControlsToValues<Controls extends ElementBookPageControlMap> = {
    [ControlName in keyof Controls]: Controls[ControlName]['initValue'];
};
