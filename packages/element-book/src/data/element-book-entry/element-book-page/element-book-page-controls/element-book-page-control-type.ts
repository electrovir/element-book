export enum ElementBookPageControlTypeEnum {
    Checkbox = 'checkbox',
    Color = 'color',
    Dropdown = 'dropdown',
    Text = 'text',
}

export type ElementBookPageControlValueType = {
    [ElementBookPageControlTypeEnum.Checkbox]: boolean;
    [ElementBookPageControlTypeEnum.Color]: string;
    /** Value type corresponds to which option in the dropdown is selected. */
    [ElementBookPageControlTypeEnum.Dropdown]: string;
    [ElementBookPageControlTypeEnum.Text]: string;
};
