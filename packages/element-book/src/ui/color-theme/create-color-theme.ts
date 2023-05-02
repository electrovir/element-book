import {mapObjectValues} from '@augment-vir/common';
import Color from 'colorjs.io';
import {CSSResult, unsafeCSS} from 'lit';
import {RequireExactlyOne} from 'type-fest';
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

function calculateTextColor(color: Color): Color {
    const onWhite = Math.abs(color.contrast('white', 'APCA'));
    const onBlack = Math.abs(color.contrast('black', 'APCA'));
    const textColorString = onWhite > onBlack ? 'white' : 'black';
    return new Color(textColorString);
}

function createColorPair({
    background,
    foreground,
}: RequireExactlyOne<{background: Color; foreground: Color}>) {
    return {
        background: background ?? calculateTextColor(foreground),
        foreground: foreground ?? calculateTextColor(background),
    };
}

export function createTheme(startColorString: string = defaultThemeStartColor): ColorTheme {
    // as cast because colorjs.io's types for itself are wrong
    const original = new Color(startColorString) as Color & {
        set: (input: Record<string, number>) => Color;
    };
    const colors = {
        nav: {
            hover: createColorPair({background: original.clone().set({'hsl.l': 93})}),
            active: createColorPair({background: original.clone().set({'hsl.l': 90})}),
            selected: createColorPair({background: original.clone().set({'hsl.l': 85})}),
        },
    } as const;

    const convertedToCssResults = colorsObjectToCssResult(colors);

    return convertedToCssResults;
}
