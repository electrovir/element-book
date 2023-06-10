import {collapseWhiteSpace} from '@augment-vir/common';
import {BookEntry} from './book-entry';

export function listUrlBreadcrumbs(entry: BookEntry, includeSelf: boolean): string[] {
    const entryBreadcrumb = titleToUrlBreadcrumb(entry.title);

    if (entry.parent) {
        return [
            titleToUrlBreadcrumb(entry.parent.title),
            ...listUrlBreadcrumbs(entry.parent, false),
        ].concat(includeSelf ? [entryBreadcrumb] : []);
    } else if (includeSelf) {
        return [entryBreadcrumb];
    } else {
        return [];
    }
}

export function titleToUrlBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}
