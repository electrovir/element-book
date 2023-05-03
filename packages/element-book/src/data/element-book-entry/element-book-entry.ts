import {typedHasProperty} from '@augment-vir/common';
import {ElementBookChapter} from './element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from './element-book-entry-type';
import {ElementBookPage} from './element-book-page/element-book-page';

export type ElementBookRoot = {
    type: ElementBookEntryTypeEnum.Root;
    title: 'element book tree root';
    parent: undefined;
};

export type ElementBookEntry = ElementBookChapter | ElementBookPage | ElementBookRoot;

export function isElementBookEntry<SpecificType extends ElementBookEntryTypeEnum>(
    entry: unknown,
    type: SpecificType,
): entry is Extract<ElementBookEntry, {type: SpecificType}> {
    return typedHasProperty(entry, 'type') && entry.type === type;
}
