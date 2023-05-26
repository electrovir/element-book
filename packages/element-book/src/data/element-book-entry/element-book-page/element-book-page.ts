import {Overwrite, combineErrors} from '@augment-vir/common';
import {PropertyInitMapBase} from 'element-vir';
import {SetOptional} from 'type-fest';
import {BaseElementBookEntry} from '../element-book-chapter/element-book-chapter';
import {listBreadcrumbs} from '../element-book-entry';
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

export type DefinePageExamplesCallback<ParentPageControls extends ElementBookPageControlMap> =
    (params: {defineExample: DefineExampleCallback<ParentPageControls>}) => void;

export type DefineExampleCallback<ParentPageControls extends ElementBookPageControlMap> = <
    StateInit extends PropertyInitMapBase = {},
    RenderOutput = any,
>(
    exampleInit: ElementBookPageExampleInit<ParentPageControls, StateInit, RenderOutput>,
) => void;

export type ElementBookPageInit<Controls extends ElementBookPageControlMap> = Overwrite<
    SetOptional<
        Omit<
            ElementBookPage<Controls>,
            'entryType' | 'allExampleTitles' | 'pageBreadcrumbs' | 'examples'
        >,
        'controls'
    >,
    {
        defineExamplesCallback?: DefinePageExamplesCallback<Controls>;
    }
>;

function insertElementExample<
    ParentControls extends ElementBookPageControlMap,
    StateInit extends PropertyInitMapBase = {},
    RenderOutput = any,
>(
    parentExamples: ElementBookPage['examples'],
    parentBreadcrumbs: ReadonlyArray<string>,
    exampleInit: ElementBookPageExampleInit<ParentControls, StateInit, RenderOutput>,
): void {
    const errors: Error[] = [];

    const failureMessage = `Failed to define example '${parentBreadcrumbs
        .concat(exampleInit.title)
        .join(' > ')}'`;

    if (parentExamples.hasOwnProperty(exampleInit.title)) {
        errors.push(
            new Error(`${failureMessage}: title '${exampleInit.title}' is already being used.`),
        );
    } else if (!exampleInit.title) {
        errors.push(new Error(`${failureMessage}: example title is missing or empty.`));
    }

    if (errors.length) {
        parentExamples[exampleInit.title] = combineErrors(errors) as any;
    } else {
        parentExamples[exampleInit.title] = exampleInit;
    }
}

export function defineElementBookPage<Controls extends ElementBookPageControlMap = {}>(
    pageSetup: ElementBookPageInit<Controls>,
): ElementBookPage<Controls> {
    if (!pageSetup.title) {
        throw new Error(`Cannot have an element-book page with an empty title.`);
    }

    const allExamples: ElementBookPage['examples'] = {};

    const page: ElementBookPage<Controls> = {
        entryType: ElementBookEntryTypeEnum.Page,
        ...pageSetup,
        examples: allExamples,
        controls: pageSetup.controls ?? ({} as Controls),
        pageBreadcrumbs: [],
    };

    page.pageBreadcrumbs = listBreadcrumbs(page);

    if (pageSetup.defineExamplesCallback) {
        pageSetup.defineExamplesCallback({
            defineExample: (exampleInit) =>
                insertElementExample(allExamples, page.pageBreadcrumbs, exampleInit),
        });
    }

    return page;
}
