import {typedHasProperty} from '@augment-vir/common';
import {BookElementExample} from './book-element-example/book-element-example';
import {BookEntryTypeEnum} from './book-entry-type';
import {BookPage} from './book-page/book-page';
import {BookRoot} from './book-root';

export type BookEntry = BookPage | BookRoot | BookElementExample;

export function isBookEntry<const SpecificType extends BookEntryTypeEnum>(
    entry: unknown,
    entryType: SpecificType,
): entry is Extract<BookEntry, {entryType: SpecificType}> {
    return typedHasProperty(entry, 'entryType') && entry.entryType === entryType;
}
