import {defineTypedEvent} from 'element-vir';
import {ElementBookFullRoute} from '../../routing/element-book-routing';

export const ChangeRouteEvent = defineTypedEvent<Partial<ElementBookFullRoute>>()(
    'element-book-change-route',
);
