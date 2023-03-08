import {ElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';

export type ElementBookPage = {
    type: ElementBookEntryTypeEnum.Page;
    title: string;
    parent?: ElementBookSection | ElementBookChapter;
};
