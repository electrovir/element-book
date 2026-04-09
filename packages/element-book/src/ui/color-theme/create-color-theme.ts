import {type PartialWithUndefined} from '@augment-vir/common';
import Color from 'colorjs.io';
import {type CSSResult, unsafeCSS} from 'element-vir';
import {type RequireExactlyOne} from 'type-fest';
import {viraColorPalette} from 'vira';
import {type ColorTheme} from './color-theme.js';

/** @internal */
type FixedColor = Color & {
    set: (input: Record<string, number>) => Color;
};

function colorToCss(color: Color): CSSResult {
    return unsafeCSS(
        color.toString({
            format: 'hex',
        }),
    );
}

/**
 * The default theme color.
 *
 * @category Internal
 */
export const defaultThemeStartColor: string = viraColorPalette['vira-brand-500'].default;

type BackForeGroundColor = 'black' | 'white';

function calculateTextColorString(color: Color): BackForeGroundColor {
    const onWhite = Math.abs(color.contrast('white', 'APCA'));
    const onBlack = Math.abs(color.contrast('black', 'APCA'));
    const textColorString = onWhite > onBlack ? 'white' : 'black';
    return textColorString;
}

function createCssColorPair({
    background,
    foreground,
}: RequireExactlyOne<{background: Color; foreground: Color}>): {
    background: CSSResult;
    foreground: CSSResult;
} {
    const bg = background ?? new Color(calculateTextColorString(foreground));
    const fg = foreground ?? new Color(calculateTextColorString(background));

    return {
        background: colorToCss(bg),
        foreground: colorToCss(fg),
    };
}

/**
 * Theme style options for the element-book app.
 *
 * @category Internal
 */
export enum ThemeStyle {
    Dark = 'dark',
    Light = 'light',
}

/**
 * Theme configuration options for the element-book app.
 *
 * @category Internal
 */
export type ThemeConfig = PartialWithUndefined<{
    themeColor: string;
    themeStyle: ThemeStyle;
}>;

/**
 * Creates a theme from the given theme configuration.
 *
 * @category Internal
 */
export function createTheme({
    themeColor: inputThemeColor = defaultThemeStartColor,
}: ThemeConfig = {}): ColorTheme {
    const themeColor = new Color(inputThemeColor) as FixedColor;

    return {
        nav: {
            hover: createCssColorPair({
                background: themeColor.clone().set({
                    'hsl.l': 93,
                }),
            }),
            active: createCssColorPair({
                background: themeColor.clone().set({
                    'hsl.l': 90,
                }),
            }),
            selected: createCssColorPair({
                background: themeColor.clone().set({
                    'hsl.l': 85,
                }),
            }),
        },
        accent: {
            icon: colorToCss(
                themeColor.clone().set({
                    'hsl.l': 40,
                }),
            ),
        },
    };
}
