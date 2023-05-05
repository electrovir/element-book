import {Overwrite} from '@augment-vir/common';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export type ElementBookChapter = Overwrite<
    BaseElementBookEntry,
    {
        type: ElementBookEntryTypeEnum.Chapter;
    }
>;

/** This is in the ElementBookChapter file so that they don't circularly depend on each other. */
export type BaseElementBookEntry = {
    /** Display name for the chapter or page. This is also used to create breadcrumbs and URL paths. */
    title: string;
    type: ElementBookEntryTypeEnum;
    /**
     * The parent chapter. A value of undefined here indicates that the chapter or page should be at
     * the top level.
     */
    parent: ElementBookChapter | undefined;
    /**
     * A description for the chapter or page that will be displayed below the title. Each entry in
     * the array will be a separate paragraph.
     */
    descriptionParagraphs?: ReadonlyArray<string> | undefined;
};

export function defineElementBookChapter(
    chapterSetup: Omit<ElementBookChapter, 'type'>,
): ElementBookChapter {
    if (!chapterSetup.title) {
        throw new Error(`Cannot have an element-book chapter with an empty title.`);
    }
    const chapter: ElementBookChapter = {
        type: ElementBookEntryTypeEnum.Chapter,
        ...chapterSetup,
    };

    return chapter;
}
