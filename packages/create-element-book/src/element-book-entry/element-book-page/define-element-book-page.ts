import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookPage} from './element-book-page';

export type ElementBookPageSetup = {};

export function defineElementBookPage(): ElementBookPage {
    return {
        type: ElementBookEntryTypeEnum.Page,
        title: '',
    };
}
