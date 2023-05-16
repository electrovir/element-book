import {Overwrite, combineErrors} from '@augment-vir/common';
import {BaseElementBookEntry} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {listBreadcrumbs} from '../entry-tree/entry-tree';
import {ElementBookPageExample} from './element-book-page-example';

export type ElementBookPage = Overwrite<
    BaseElementBookEntry,
    {
        type: ElementBookEntryTypeEnum.Page;
    }
> & {
    examples: ReadonlyArray<ElementBookPageExample<any>>;
};

export function defineElementBookPage(pageSetup: Omit<ElementBookPage, 'type'>): ElementBookPage {
    const errors: Error[] = [];

    if (!pageSetup.title) {
        errors.push(new Error(`Cannot have an element-book page with an empty title.`));
    }
    const page: ElementBookPage = {
        type: ElementBookEntryTypeEnum.Page,
        ...pageSetup,
    };

    const pageBreadcrumbs = listBreadcrumbs(page, true);

    const exampleTitlesSet = new Set<string>();

    pageSetup.examples.forEach((example) => {
        const failureMessage = `Failed to define example '${pageBreadcrumbs
            .concat(example.title)
            .join(' > ')}'`;

        if (exampleTitlesSet.has(example.title)) {
            errors.push(
                Error(`${failureMessage}: title '${example.title}' is already being used.`),
            );
        } else if (!example.title) {
            errors.push(Error(`${failureMessage}: example title is missing or empty.`));
        }

        exampleTitlesSet.add(example.title);
    });

    if (errors.length) {
        /**
         * We don't want the Error type to actually be a part of this function's return type, cause
         * users shouldn't actually return errors, but we still want to pass errors to element-book
         * so element-book can handle them.
         */
        return combineErrors(errors) as any;
    }

    return page;
}
