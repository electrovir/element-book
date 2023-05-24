import {FullRoute, SpaRouter} from 'spa-router-vir';

export enum ElementBookMainRoute {
    Search = 'search',
    Book = 'book',
}

export type ValidElementBookPaths =
    | [ElementBookMainRoute.Search, string]
    | [ElementBookMainRoute.Book, ...string[]];

export type ElementBookFullRoute = Required<
    Readonly<FullRoute<ValidElementBookPaths, undefined | Record<string, string>, undefined>>
>;

export function extractSearchQuery(paths: Readonly<ValidElementBookPaths>) {
    if (paths[0] === ElementBookMainRoute.Book) {
        return '';
    } else {
        return decodeURIComponent(paths[1]);
    }
}

export const defaultElementBookFullRoute: Readonly<ElementBookFullRoute> = {
    hash: undefined,
    paths: [ElementBookMainRoute.Book],
    search: undefined,
} as const;

export type ElementBookRouter = ElementBookFullRoute extends FullRoute<
    infer Paths,
    infer Search,
    infer Hash
>
    ? Readonly<SpaRouter<Paths, Search, Hash>>
    : never;
