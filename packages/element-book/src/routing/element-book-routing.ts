import {FullRoute, SpaRouter} from 'spa-router-vir';

export enum ElementBookMainRoute {
    Search = 'search',
    Book = 'book',
}

export type ValidElementBookPaths =
    | [ElementBookMainRoute.Search, string]
    | [ElementBookMainRoute.Book, ...string[]];

export type ElementBookFullRoute = Required<
    Readonly<FullRoute<ValidElementBookPaths, undefined, undefined>>
>;

export const defaultElementBookFullRoute: Readonly<ElementBookFullRoute> = {
    hash: undefined,
    paths: [ElementBookMainRoute.Book],
    search: undefined,
} as const;

export type ElementBookRouter = Readonly<SpaRouter<ValidElementBookPaths, undefined, undefined>>;
