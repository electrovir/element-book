import {typedHasProperty} from '@augment-vir/common';
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
