import {Overwrite} from '@augment-vir/common';
import {BaseBookEntry} from '../base-book-entry';
import {BookElementExample} from '../book-element-example/book-element-example';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPageControlsInitBase} from './book-page-controls';

export type BookPage<
    ParentPage extends BookPage | undefined = any,
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = Overwrite<
    BaseBookEntry,
    {
        parent: ParentPage;
        entryType: BookEntryTypeEnum.Page;
    }
> & {
    controls: ControlsInit;
    examples: ReadonlyArray<BookElementExample>;
};
