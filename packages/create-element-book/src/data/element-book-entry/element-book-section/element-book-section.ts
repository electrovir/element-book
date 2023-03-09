import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {addEntry} from '../entry-storage/entry-storage';

export type ElementBookSection = {
    type: ElementBookEntryTypeEnum.Section;
    title: string;
    parent?: undefined;
};

export function defineElementBookSection(title: string): ElementBookSection {
    const section: ElementBookSection = {
        type: ElementBookEntryTypeEnum.Section,
        title,
    };

    addEntry(section);

    return section;
}
