import {assertTypeOf} from '@augment-vir/browser-testing';
import {BookEntry} from './book-entry';
import {BookEntryTypeEnum} from './book-entry-type';

describe('BookEntry', () => {
    it('has correct property types', () => {
        assertTypeOf<BookEntry>().toMatchTypeOf<{
            title: string;
            parent?: BookEntry | undefined;
            entryType: BookEntryTypeEnum;
        }>();
    });
});
