import {isEnumValue} from '@augment-vir/common';
import {createSpaRouter, SpaRouter} from 'spa-router-vir';
import {
    defaultElementBookFullRoute,
    ElementBookMainRoute,
    ElementBookRouter,
    ValidElementBookPaths,
} from './element-book-routing';

export function createElementBookRouter(baseRoute: string | undefined): ElementBookRouter {
    type SubTypes = ElementBookRouter extends SpaRouter<infer Paths, infer Search, infer Hash>
        ? {paths: Paths; search: Search; hash: Hash}
        : never;

    return createSpaRouter<SubTypes['paths'], SubTypes['search'], SubTypes['hash']>({
        routeBase: baseRoute,
        routeSanitizer(rawRoute) {
            const sanitizedPaths = sanitizePaths(rawRoute.paths);

            return {
                paths: sanitizedPaths,
                hash: undefined,
                search: undefined,
            };
        },
    });
}

function sanitizePaths(paths: ReadonlyArray<string>): Readonly<ValidElementBookPaths> {
    const firstPath = paths[0];

    if (!isEnumValue(firstPath, ElementBookMainRoute)) {
        return defaultElementBookFullRoute.paths;
    } else if (firstPath === ElementBookMainRoute.Book) {
        return [
            ElementBookMainRoute.Book,
            ...paths.slice(1),
        ];
    } else if (firstPath === ElementBookMainRoute.Search) {
        return [
            firstPath,
            paths[1] ?? '',
        ];
    } else {
        throw new Error(`Route path not handled for sanitization: ${paths.join('/')}`);
    }
}
