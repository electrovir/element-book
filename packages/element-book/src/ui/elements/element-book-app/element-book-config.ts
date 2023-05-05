import {PartialAndUndefined} from '@augment-vir/common';
import {ElementBookEntry} from '../../../data/element-book-entry/element-book-entry';

export type ElementBookConfig = {
    /** All element-book entries in order. */
    entries: ReadonlyArray<ElementBookEntry>;
} & PartialAndUndefined<OptionalConfig>;

type OptionalConfig = {
    /**
     * Path to this page, used for routing. For example, if this page is hosted at
     * www.example.org/my-page then this value should be `my-page`.
     */
    baseUrl: string;
    /** Starting /book/ path. */
    defaultPath: ReadonlyArray<string>;
    /** Color from which to base all element-book colors from. */
    themeColor: string;
    /** The title to use for the "Everything" nav link. */
    everythingTitle: string;
};
