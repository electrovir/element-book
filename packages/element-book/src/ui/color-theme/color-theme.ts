import {isRuntimeTypeOf, typedHasProperties, typedHasProperty} from '@augment-vir/common';
import {CSSResult} from 'lit';
import {SingleCssVarDefinition, defineCssVars, setCssVarValue} from 'lit-css-vars';
import {NestedType} from '../../augments/type';

export type ColorPair = {background: CSSResult; foreground: CSSResult};

export type ColorTheme = {
    nav: {
        hover: ColorPair;
        active: ColorPair;
        selected: ColorPair;
    };
};

type CssResultToCssVar<StartingPoint> = {
    [PropName in keyof StartingPoint]: StartingPoint[PropName] extends CSSResult
        ? SingleCssVarDefinition
        : CssResultToCssVar<StartingPoint[PropName]>;
};

type ColorThemeCssVars = CssResultToCssVar<ColorTheme>;

export const colorThemeCssVars = defineCssVars({
    'element-book-nav-hover-background-color': 'grey',
    'element-book-nav-hover-foreground-color': 'grey',
    'element-book-nav-active-background-color': 'grey',
    'element-book-nav-active-foreground-color': 'grey',
    'element-book-nav-selected-background-color': 'grey',
    'element-book-nav-selected-foreground-color': 'grey',
});

const colorThemeCssVarMapping: ColorThemeCssVars = {
    nav: {
        hover: {
            background: colorThemeCssVars['element-book-nav-hover-background-color'],
            foreground: colorThemeCssVars['element-book-nav-hover-foreground-color'],
        },
        active: {
            background: colorThemeCssVars['element-book-nav-active-background-color'],
            foreground: colorThemeCssVars['element-book-nav-active-foreground-color'],
        },
        selected: {
            background: colorThemeCssVars['element-book-nav-selected-background-color'],
            foreground: colorThemeCssVars['element-book-nav-selected-foreground-color'],
        },
    },
};

export function setThemeCssVars(element: HTMLElement, theme: ColorTheme) {
    recursiveSetThemeCssVars(element, theme, colorThemeCssVarMapping);
}

function isCssResult(input: unknown): input is CSSResult {
    return typedHasProperty(input, '_$cssResult$');
}

function isCssVarDefinition(input: unknown): input is SingleCssVarDefinition {
    return (
        typedHasProperties(input, [
            'name',
            'value',
            'default',
        ]) &&
        isRuntimeTypeOf(input.default, 'string') &&
        isCssResult(input.name) &&
        isCssResult(input.value)
    );
}

function recursiveSetThemeCssVars(
    element: HTMLElement,
    nestedCssResult: NestedType<CSSResult>,
    nestedCssVars: NestedType<SingleCssVarDefinition>,
) {
    Object.entries(nestedCssResult).forEach(
        ([
            key,
            value,
        ]) => {
            const nestedCssVar = nestedCssVars[key];

            if (!nestedCssVar) {
                throw new Error(`no nestedCssVar at key '${key}'`);
            }

            if (isCssResult(value)) {
                if (!isCssVarDefinition(nestedCssVar)) {
                    throw new Error(`got a CSS result at '${key}' but no CSS var`);
                }

                setCssVarValue({
                    forCssVar: nestedCssVar,
                    onElement: element,
                    toValue: String(value),
                });
            } else {
                if (isCssVarDefinition(nestedCssVar)) {
                    throw new Error(`got no CSS result at '${key}' but did find a CSS var`);
                }
                recursiveSetThemeCssVars(element, value, nestedCssVar);
            }
        },
    );
}
