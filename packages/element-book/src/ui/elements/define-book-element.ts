import {wrapDefineElement} from 'element-vir';

export type BookTagName = `element-book-${string}`;

export const {
    defineElement: defineElementBookElement,
    defineElementNoInputs: defineElementBookElementNoInputs,
} = wrapDefineElement<BookTagName>();
