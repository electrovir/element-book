import {collapseWhiteSpace, typedHasProperty} from '@augment-vir/common';
import {ElementBookChapter} from './element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from './element-book-entry-type';
import {ElementBookPage} from './element-book-page/element-book-page';

export type ElementBookRoot = {
    entryType: ElementBookEntryTypeEnum.Root;
    title: string;
    parent: undefined;
};

export type ElementBookEntry = ElementBookChapter | ElementBookPage | ElementBookRoot;

export function isElementBookEntry<SpecificType extends ElementBookEntryTypeEnum>(
    entry: unknown,
    entryType: SpecificType,
): entry is Extract<ElementBookEntry, {entryType: SpecificType}> {
    return typedHasProperty(entry, 'entryType') && entry.entryType === entryType;
}

export function listBreadcrumbs(entry: ElementBookEntry, includeSelf?: boolean): string[] {
    const entryBreadcrumb = titleToBreadcrumb(entry.title);

    if (entry.parent) {
        return [
            titleToBreadcrumb(entry.parent.title),
            ...listBreadcrumbs(entry.parent, false),
        ].concat(includeSelf ? [entryBreadcrumb] : []);
    } else if (includeSelf) {
        return [entryBreadcrumb];
    } else {
        return [];
    }
}

export function titleToBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}
