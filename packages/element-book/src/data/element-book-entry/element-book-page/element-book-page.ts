import {ElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookSection} from '../element-book-section/element-book-section';
import {listTitleBreadcrumbs} from '../entry-tree/entry-tree';
import {ElementBookPageExample} from './element-book-page-example';

export type ElementBookPage = {
    type: ElementBookEntryTypeEnum.Page;
    title: string;
    parent?: ElementBookSection | ElementBookChapter | undefined;
    examples: ReadonlyArray<ElementBookPageExample>;
};

export function defineElementBookPage(pageSetup: Omit<ElementBookPage, 'type'>): ElementBookPage {
    if (!pageSetup.title) {
        throw new Error(`Cannot have an element-book page with an empty title.`);
    }
    const page: ElementBookPage = {
        type: ElementBookEntryTypeEnum.Page,
        ...pageSetup,
    };

    const pageBreadcrumbs = listTitleBreadcrumbs(page, true);

    const exampleTitlesSet = new Set<string>();

    pageSetup.examples.forEach((example) => {
        const failureMessage = `Failed to define example '${pageBreadcrumbs
            .concat(example.title)
            .join(' > ')}'`;

        if (exampleTitlesSet.has(example.title)) {
            console.warn(
                new Error(
                    `${failureMessage}: example title '${example.title}' is already being used.`,
                ),
            );
            return;
        } else if (!example.title) {
            console.warn(new Error(`${failureMessage}: example title is missing or empty.`));
            return;
        }

        exampleTitlesSet.add(example.title);
    });

    return page;
}
