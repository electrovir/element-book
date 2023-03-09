import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';
import {addEntry} from '../entry-storage/entry-storage';

export type ElementBookChapter = {
    type: ElementBookEntryTypeEnum.Chapter;
    title: string;
    parent?: ElementBookSection | undefined;
};

export function defineElementBookChapter(
    title: string,
    parent?: ElementBookChapter['parent'],
): ElementBookChapter {
    const chapter: ElementBookChapter = {
        type: ElementBookEntryTypeEnum.Chapter,
        title,
        parent,
    };

    addEntry(chapter);

    return chapter;
}
