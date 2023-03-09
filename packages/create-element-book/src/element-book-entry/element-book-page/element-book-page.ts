import {ElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';
import {addEntry} from '../entry-storage/entry-storage';

export type ElementBookPage = {
    type: ElementBookEntryTypeEnum.Page;
    title: string;
    parent?: ElementBookSection | ElementBookChapter | undefined;
};

export function defineElementBookPage(
    title: string,
    parent?: ElementBookPage['parent'],
): ElementBookPage {
    const page: ElementBookPage = {
        type: ElementBookEntryTypeEnum.Page,
        title,
        parent,
    };

    addEntry(page);

    return page;
}
