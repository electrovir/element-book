import {ElementBookEntryTypeEnum} from '../element-book-entry-type';

export type ElementBookSection = {
    type: ElementBookEntryTypeEnum.Section;
    title: string;
    parent?: undefined;
};

export function defineElementBookSection(title: string): ElementBookSection {
    if (!title) {
        throw new Error(`Cannot have an element-book section with an empty title.`);
    }
    const section: ElementBookSection = {
        type: ElementBookEntryTypeEnum.Section,
        title,
    };

    return section;
}
