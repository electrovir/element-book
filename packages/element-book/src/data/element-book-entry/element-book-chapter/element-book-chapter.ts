import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export type ElementBookChapter = {
    type: ElementBookEntryTypeEnum.Chapter;
    title: string;
    parent?: ElementBookChapter | undefined;
};

export function defineElementBookChapter({
    title,
    parent,
}: {
    title: string;
    parent?: ElementBookChapter['parent'];
}): ElementBookChapter {
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
