import {mapObjectValues} from '@augment-vir/common';
import Color from 'colorjs.io';
import {CSSResult, unsafeCSS} from 'lit';
import {NestedType} from '../../augments/type';
import {ColorTheme} from './color-theme';

type NestedColors = NestedType<Color>;

type NestedColorsToCssResult<Colors extends Readonly<NestedColors>> = {
    [PropName in keyof Colors]: Colors[PropName] extends Color
        ? CSSResult
        : NestedColorsToCssResult<Exclude<Colors[PropName], Color>>;
};

function colorsObjectToCssResult<const Colors extends NestedColors>(
    colors: Colors,
): NestedColorsToCssResult<Colors> {
    return mapObjectValues(colors, (key, value) => {
        if (value instanceof Color) {
            return unsafeCSS(value.toString({format: 'hex'}));
        } else {
            return colorsObjectToCssResult(value);
        }
    }) as NestedColorsToCssResult<Colors>;
}

export const defaultThemeStartColor = 'dodgerblue';

export function createTheme(startColorString: string = defaultThemeStartColor): ColorTheme {
    // as cast because colorjs.io's types for itself are wrong
    const original = new Color(startColorString) as Color & {
        set: (input: Record<string, number>) => Color;
    };
    const colors = {
        nav: {
            hover: original.clone().set({'hsl.l': 95}),
            active: original.clone().set({'hsl.l': 90}),
            selected: original.clone().set({'hsl.l': 80}),
        },
    } as const;

    const convertedToCssResults = colorsObjectToCssResult(colors);

    return convertedToCssResults;
}
