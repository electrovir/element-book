import {css, defineElement, html, listen} from 'element-vir';
import {shouldMouseEventTriggerRoutes} from 'spa-router-vir';
import {ElementBookFullRoute, ElementBookRouter} from '../../../routing/element-book-routing';
import {ChangeRouteEvent} from '../../events/change-route.event';

export const VirElementBookRouteLink = defineElement<{
    route: Partial<ElementBookFullRoute>;
    router: ElementBookRouter | undefined;
}>()({
    tagName: 'vir-route-link',
    styles: css`
        a {
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs, dispatch}) => {
        const linkUrl: string =
            inputs.router?.createRoutesUrl({
                ...inputs.router?.getCurrentRawRoutes(),
                ...inputs.route,
            }) ?? '#';
        return html`
            <a
                href=${linkUrl}
                ${listen('click', (clickEvent) => {
                    if (!inputs.router || shouldMouseEventTriggerRoutes(clickEvent)) {
                        clickEvent.preventDefault();
                        window.scrollTo(0, 0);
                        dispatch(new ChangeRouteEvent(inputs.route));
                    }
                })}
            >
                <slot></slot>
            </a>
        `;
    },
});
