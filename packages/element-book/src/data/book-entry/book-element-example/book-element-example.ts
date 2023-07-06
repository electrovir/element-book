import {Overwrite, RequireNonVoid, SetOptionalAndNullable} from '@augment-vir/common';
import {PropertyInitMapBase, RenderParams, TypedEvent} from 'element-vir';
import {CSSResult} from 'lit';
import {GlobalValues} from '../../../ui/elements/element-book-app/element-book-config';
import {BaseBookEntry} from '../base-book-entry';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPage} from '../book-page/book-page';
import {BookPageControlsInitBase, ControlsToValues} from '../book-page/book-page-controls';

export type BookPageExampleRenderParams<
    GlobalValuesType extends GlobalValues,
    ControlsInit extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
> = Pick<RenderParams<any, any, StateInit, any, any, any>, 'state' | 'updateState'> & {
    controls: ControlsToValues<ControlsInit> & GlobalValuesType;
};

export type BookElementExample<
    GlobalValuesType extends GlobalValues = {},
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
        stateInitStatic?: StateInit | undefined;
        /** Specify which events this example should intercept (so the user can see them). */
        showEvents?: ReadonlyArray<string | TypedEvent> | undefined;
        /**
         * Style the element example. You can even use the :host selector to style this specific
         * example's wrapper element!
         */
        styles?: CSSResult | undefined;
        /** Render the example. */
        renderCallback: RequireNonVoid<
            RenderOutput,
            (
                renderParams: BookPageExampleRenderParams<
                    GlobalValuesType,
                    ControlsInit,
                    StateInit
                >,
            ) => RenderOutput,
            'renderCallback is missing a return statement'
        >;
    }
>;

/**
 * The properties that are necessary to initialize an element example. Missing properties will be
 * filling in by the parent.
 */
export type BookElementExampleInit<
    GlobalValuesType extends GlobalValues,
    Controls extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
    RenderOutput,
> = SetOptionalAndNullable<
    Omit<
        BookElementExample<GlobalValuesType, Controls, StateInit, RenderOutput>,
        'entryType' | 'parent' | 'errors'
    >,
    'descriptionParagraphs'
>;
