import {FullRoute, SpaRouter} from 'spa-router-vir';
import {ReadonlyDeep} from 'type-fest';

export type ValidElementBookPaths = string[];

export type ElementBookFullRoute = Required<
    Readonly<FullRoute<ValidElementBookPaths, undefined, undefined>>
>;

export const emptyElementBookFullRoute: ReadonlyDeep<ElementBookFullRoute> = {
    hash: undefined,
    paths: [],
    search: undefined,
} as const;

export type ElementBookRouter = Readonly<SpaRouter<ValidElementBookPaths, undefined, undefined>>;
