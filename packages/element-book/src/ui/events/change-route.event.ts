import {defineTypedCustomEvent} from 'element-vir';
import {type BookFullRoute} from '../../routing/book-routing.js';

export const ChangeRouteEvent = defineTypedCustomEvent<Partial<BookFullRoute>>()(
    'element-book-change-route',
);
