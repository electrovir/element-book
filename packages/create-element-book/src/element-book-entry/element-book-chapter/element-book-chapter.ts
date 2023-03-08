import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';

export type ElementBookChapter = {
    type: ElementBookEntryTypeEnum.Chapter;
    title: string;
    parent?: ElementBookSection;
};
