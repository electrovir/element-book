import {BookEntryDisplay} from './book-entry-display.element';

export const loadingClassName = 'loading' as const;

export function isEntryLoadingShowing(
    instance: (typeof BookEntryDisplay)['instanceType'],
): boolean {
    const loadingElement = instance.shadowRoot.querySelector(`.${loadingClassName}`);

    return !!loadingElement;
}
