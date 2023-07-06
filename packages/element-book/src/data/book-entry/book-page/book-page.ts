import {Overwrite} from '@augment-vir/common';
import {GlobalValues} from '../../../ui/elements/element-book-app/element-book-config';
import {BaseBookEntry} from '../base-book-entry';
import {BookElementExample} from '../book-element-example/book-element-example';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPageControlsInitBase} from './book-page-controls';

export type BookPage<
    GlobalValuesType extends GlobalValues = {},
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
    elementExamples: Record<string, BookElementExample>;
};
