import {assertTypeOf} from '@augment-vir/browser-testing';
import {ElementBookEntry} from './element-book-entry';
import {ElementBookEntryTypeEnum} from './element-book-entry-type';

describe('ElementBookEntry', () => {
    it('has correct property types', () => {
        assertTypeOf<ElementBookEntry>().toMatchTypeOf<{
            title: string;
            parent?: ElementBookEntry | undefined;
            type: ElementBookEntryTypeEnum;
        }>();
    });
});
