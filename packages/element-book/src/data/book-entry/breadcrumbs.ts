import {collapseWhiteSpace} from '@augment-vir/common';
import {BookEntry} from './book-entry';

export function listBreadcrumbs(entry: BookEntry, includeSelf: boolean): string[] {
    const entryBreadcrumb = titleToBreadcrumb(entry.title);

    if (entry.parent) {
        return [
            titleToBreadcrumb(entry.parent.title),
            ...listBreadcrumbs(entry.parent, false),
        ].concat(includeSelf ? [entryBreadcrumb] : []);
    } else if (includeSelf) {
        return [entryBreadcrumb];
    } else {
        return [];
    }
}

export function titleToBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}
