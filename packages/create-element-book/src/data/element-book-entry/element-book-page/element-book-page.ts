import {ElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';
import {addEntry} from '../entry-storage/entry-storage';
import {ElementBookPageExample} from './element-book-page-example';

export type ElementBookPage = {
    type: ElementBookEntryTypeEnum.Page;
    title: string;
    parent?: ElementBookSection | ElementBookChapter | undefined;
    examples: ReadonlyArray<ElementBookPageExample>;
};

export function defineElementBookPage(pageSetup: Omit<ElementBookPage, 'type'>): ElementBookPage {
    const page: ElementBookPage = {
        type: ElementBookEntryTypeEnum.Page,
        ...pageSetup,
    };
    addEntry(page);

    return page;
}
