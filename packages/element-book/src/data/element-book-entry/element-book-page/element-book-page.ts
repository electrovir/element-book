import {Overwrite} from '@augment-vir/common';
import {SetOptional} from 'type-fest';
import {BaseElementBookEntry} from '../element-book-chapter/element-book-chapter';
import {ElementBookEntryTypeEnum} from '../element-book-entry-type';
import {ElementBookPageControlMap} from './element-book-page-controls/element-book-page-control';
import {ElementBookPageExampleInit} from './element-book-page-example';

export type ElementBookPage<
    Controls extends ElementBookPageControlMap = ElementBookPageControlMap,
> = Overwrite<
    BaseElementBookEntry,
    {
        entryType: ElementBookEntryTypeEnum.Page;
    }
> & {
    controls: Controls;
    examples: Record<string, ElementBookPageExampleInit<any, any, any> | Error>;
    pageBreadcrumbs: ReadonlyArray<string>;
};

export type PageControlsFromPage<Page extends ElementBookPage<any>> = Page extends ElementBookPage<
    infer Controls
>
    ? Controls
    : never;

export type ElementBookPageInit<Controls extends ElementBookPageControlMap> = SetOptional<
    Omit<
        ElementBookPage<Controls>,
        'entryType' | 'examples' | 'allExampleTitles' | 'pageBreadcrumbs'
    >,
    'controls'
>;

export function defineElementBookPage<Controls extends ElementBookPageControlMap = {}>(
    pageSetup: ElementBookPageInit<Controls>,
): ElementBookPage<Controls> {
    if (!pageSetup.title) {
        throw new Error(`Cannot have an element-book page with an empty title.`);
    }

    const page: ElementBookPage<Controls> = {
        entryType: ElementBookEntryTypeEnum.Page,
        ...pageSetup,
        examples: {},
        controls: pageSetup.controls ?? ({} as Controls),
        pageBreadcrumbs: [],
    };

    return page;
}
