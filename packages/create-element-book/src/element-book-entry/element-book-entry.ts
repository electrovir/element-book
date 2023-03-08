import {ElementBookChapter} from './element-book-chapter/element-book-chapter';
import {ElementBookPage} from './element-book-page/element-book-page';
import {ElementBookSection} from './element-book-section/element-book-section';

export type ElementBookEntry = ElementBookSection | ElementBookChapter | ElementBookPage;
