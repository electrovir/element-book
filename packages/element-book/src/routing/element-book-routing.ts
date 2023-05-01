import {FullRoute, SpaRouter} from 'spa-router-vir';

export type ValidElementBookPaths = string[];

export type ElementBookFullRoute = Required<
    Readonly<FullRoute<ValidElementBookPaths, undefined, undefined>>
>;

export const emptyElementBookFullRoute: Readonly<ElementBookFullRoute> = {
    hash: undefined,
    paths: [],
    search: undefined,
} as const;

export type ElementBookRouter = Readonly<SpaRouter<ValidElementBookPaths, undefined, undefined>>;
