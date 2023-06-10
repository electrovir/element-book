export type BookPageControl<ControlType extends BookPageControlTypeEnum = BookPageControlTypeEnum> =
    {
        controlType: ControlType;
        initValue: BookPageControlValueType[ControlType];
        /** The name and label for the control. */
        controlName: string;
    };

export type BookPageControlInit<ControlType extends BookPageControlTypeEnum> = Omit<
    BookPageControl<ControlType>,
    // 'controlName' will be inserted later by the page
    'controlName'
>;

/**
 * Define a page control. This doesn't do anything fancy (in fact it only returns the input) but it
 * helps immensely with type inference.
 */
export function definePageControl<ControlType extends BookPageControlTypeEnum>(
    controlInit: BookPageControlInit<ControlType>,
) {
    return controlInit;
}

export type ControlsToValues<ControlsInit extends BookPageControlsInitBase> = {
    [ControlName in keyof ControlsInit]: ControlsInit[ControlName]['initValue'];
};

export type BookPageControlsInitBase = Record<string, BookPageControlInit<BookPageControlTypeEnum>>;

export enum BookPageControlTypeEnum {
    Checkbox = 'checkbox',
    Color = 'color',
    Dropdown = 'dropdown',
    Text = 'text',
}

const controlValueTypes = {
    [BookPageControlTypeEnum.Checkbox]: false,
    [BookPageControlTypeEnum.Color]: '',
    /** The number type here indicates which index in the options are selected. */
    [BookPageControlTypeEnum.Dropdown]: 0,
    [BookPageControlTypeEnum.Text]: '',
} satisfies Readonly<Record<BookPageControlTypeEnum, any>>;

export type BookPageControlValueType = typeof controlValueTypes;

export function checkControls(
    controlsInit: BookPageControlsInitBase | undefined,
    pageName: string,
): Error[] {
    if (!controlsInit) {
        return [];
    }

    const errors: Error[] = [];

    Object.entries(controlsInit).forEach(
        ([
            controlName,
            controlEntry,
        ]) => {
            const expectedInitDefault = controlValueTypes[controlEntry.controlType];
            if (typeof expectedInitDefault !== typeof controlEntry.initValue) {
                errors.push(
                    new Error(
                        `Control '${controlName}' in page '${pageName}' has invalid initValue '${
                            controlEntry.initValue
                        }': expected initValue of type ${typeof expectedInitDefault} because the control is of type ${
                            controlEntry.controlType
                        }.`,
                    ),
                );
            }
        },
    );

    return errors;
}
