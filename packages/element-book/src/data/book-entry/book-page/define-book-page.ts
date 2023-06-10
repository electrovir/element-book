import {ArrayElement, Writeable, isTruthy} from '@augment-vir/common';
import {PropertyInitMapBase} from 'element-vir';
import {SetOptional} from 'type-fest';
import {InfiniteRecursionLimiter} from '../../../util/type';
import {
    BookElementExample,
    BookElementExampleInit,
} from '../book-element-example/book-element-example';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPage} from './book-page';
import {BookPageControlsInitBase, checkControls} from './book-page-controls';

export type ElementExamplesDefiner<
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = (params: {
    defineExample: <StateInit extends PropertyInitMapBase, RenderOutput>(
        exampleInit: BookElementExampleInit<ControlsInit, StateInit, RenderOutput>,
    ) => void;
}) => void;

type CollapseControlsInit<
    ParentPage extends BookPage | undefined,
    CurrentControlsInit extends BookPageControlsInitBase,
    /** Prevent infinite recursion TypeScript errors. */
    RecursionDepth = InfiniteRecursionLimiter,
> = CurrentControlsInit &
    (RecursionDepth extends [any, ...infer RemainingDepth]
        ? ParentPage extends BookPage<infer GrandParentPage, infer ParentControls>
            ? CollapseControlsInit<GrandParentPage, ParentControls, RemainingDepth>
            : {}
        : {});

export type BookPageInit<
    ParentPage extends BookPage | undefined,
    CurrentControlsInit extends BookPageControlsInitBase,
> = SetOptional<
    Omit<BookPage<ParentPage, CurrentControlsInit>, 'entryType' | 'examples' | 'errors'>,
    'controls' | 'descriptionParagraphs'
> & {
    elementExamplesCallback?:
        | ElementExamplesDefiner<CollapseControlsInit<ParentPage, CurrentControlsInit>>
        | undefined;
};

export function defineBookPage<
    const ParentPage extends BookPage | undefined,
    const ControlsInit extends BookPageControlsInitBase = {},
>(pageInit: BookPageInit<ParentPage, ControlsInit>): BookPage<ParentPage, ControlsInit> {
    const page: BookPage<ParentPage, ControlsInit> = {
        ...pageInit,
        entryType: BookEntryTypeEnum.Page,
        examples: [],
        descriptionParagraphs: pageInit.descriptionParagraphs ?? [],
        controls: pageInit.controls ?? ({} as ControlsInit),
        errors: [
            !pageInit.title && new Error(`Cannot define an element-book page with an empty title.`),
            ...checkControls(pageInit.controls, pageInit.title),
        ].filter(isTruthy),
    };

    const alreadyTakenElementExampleNames = new Set<string>();

    const finalizedExamples: Writeable<(typeof page)['examples']> = [];

    if (pageInit.elementExamplesCallback) {
        pageInit.elementExamplesCallback({
            defineExample(elementExampleInit) {
                const newExample: BookElementExample<any, any, any> = {
                    ...elementExampleInit,
                    entryType: BookEntryTypeEnum.ElementExample,
                    parent: page,
                    descriptionParagraphs: elementExampleInit.descriptionParagraphs ?? [],
                    errors: [
                        alreadyTakenElementExampleNames.has(elementExampleInit.title) &&
                            new Error(
                                `Example title '${elementExampleInit.title}' in page '${pageInit.title}' is already taken.`,
                            ),
                    ].filter(isTruthy),
                };
                alreadyTakenElementExampleNames.add(elementExampleInit.title);

                finalizedExamples.push(newExample as ArrayElement<(typeof page)['examples']>);
            },
        });
    }
    page.examples = finalizedExamples.sort((a, b) => a.title.localeCompare(b.title));

    return page;
}
