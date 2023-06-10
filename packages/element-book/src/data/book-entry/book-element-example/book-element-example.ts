import {Overwrite, RequireNonVoid} from '@augment-vir/common';
import {PropertyInitMapBase, RenderParams, TypedEvent} from 'element-vir';
import {CSSResult} from 'lit';
import {SetOptional} from 'type-fest';
import {BaseBookEntry} from '../base-book-entry';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPage} from '../book-page/book-page';
import {BookPageControlsInitBase, ControlsToValues} from '../book-page/book-page-controls';

export type BookPageExampleRenderParams<
    ControlsInit extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
> = Pick<RenderParams<any, any, StateInit, any, any, any>, 'state' | 'updateState'> & {
    controls: ControlsToValues<ControlsInit>;
};

export type BookElementExample<
    ControlsInit extends BookPageControlsInitBase = {},
    StateInit extends PropertyInitMapBase = {},
    RenderOutput = unknown,
> = Overwrite<
    BaseBookEntry,
    {
        parent: BookPage | undefined;
        entryType: BookEntryTypeEnum.ElementExample;
    } & {
        /** Initialize the state for this example. */
        stateInitStatic?: StateInit;
        /** Specify which events this example should intercept (so the user can see them). */
        showEvents?: ReadonlyArray<string | TypedEvent>;
        /**
         * Style the element example. You can even use the :host selector to style this specific
         * example's wrapper element!
         */
        styles?: CSSResult;
        /** Render the example. */
        renderCallback: RequireNonVoid<
            RenderOutput,
            (renderParams: BookPageExampleRenderParams<ControlsInit, StateInit>) => RenderOutput,
            'renderCallback is missing a return statement'
        >;
    }
>;

/**
 * The properties that are necessary to initialize an element example. Missing properties will be
 * filling in by the parent.
 */
export type BookElementExampleInit<
    Controls extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
    RenderOutput,
> = SetOptional<
    Omit<BookElementExample<Controls, StateInit, RenderOutput>, 'entryType' | 'parent' | 'errors'>,
    'descriptionParagraphs'
>;
