import {createSpaRouter} from 'spa-router-vir';
import {ElementBookRouter, ValidElementBookPaths} from './element-book-routing';

export function createElementBookRouter(baseRoute: string): ElementBookRouter {
    return createSpaRouter<ValidElementBookPaths, undefined, undefined>({
        routeBase: baseRoute,
    });
}
