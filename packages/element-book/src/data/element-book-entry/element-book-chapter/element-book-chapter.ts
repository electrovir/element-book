import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';

export type ElementBookChapter = {
    type: ElementBookEntryTypeEnum.Chapter;
    title: string;
    parent?: ElementBookSection | undefined;
};

export function defineElementBookChapter(
    title: string,
    parent?: ElementBookChapter['parent'],
): ElementBookChapter {
    if (!title) {
        throw new Error(`Cannot have an element-book chapter with an empty title.`);
    }
    const chapter: ElementBookChapter = {
        type: ElementBookEntryTypeEnum.Chapter,
        title,
        parent,
    };

    return chapter;
}
