import {isEnumValue} from '@augment-vir/common';
import {createSpaRouter} from 'spa-router-vir';
import {
    ElementBookMainRoute,
    ElementBookRouter,
    ValidElementBookPaths,
    defaultElementBookFullRoute,
} from './element-book-routing';

export function createElementBookRouter(baseRoute: string): ElementBookRouter {
    return createSpaRouter<ValidElementBookPaths, undefined, undefined>({
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
