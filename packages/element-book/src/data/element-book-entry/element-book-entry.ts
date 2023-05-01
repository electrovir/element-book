import {ElementBookChapter} from './element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from './element-book-entry-type';
import {ElementBookPage} from './element-book-page/element-book-page';
import {ElementBookSection} from './element-book-section/element-book-section';

export type ElementBookRoot = {
    type: ElementBookEntryTypeEnum.Root;
    title: 'element book tree root';
    parent: undefined;
};

export type ElementBookEntry =
    | ElementBookSection
    | ElementBookChapter
    | ElementBookPage
    | ElementBookRoot;
