import {BookConfig} from './book-config';

describe('ElementBookConfig', () => {
    function acceptsElementBookConfig(input: BookConfig) {}

    it('prevents router config and paths in the same config', () => {
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            entries: [],
            elementBookRoutePaths: [],
            everythingTitle: '',
            themeColor: 'blue',
        });
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            entries: [],
            internalRouterConfig: {
                useInternalRouter: true,
            },
            everythingTitle: '',
            themeColor: 'blue',
        });
        // if they're combined we get a TS error
        acceptsElementBookConfig(
            // @ts-expect-error
            {
                entries: [],
                internalRouterConfig: {
                    useInternalRouter: true,
                },
                elementBookRoutePaths: [],
                everythingTitle: '',
                themeColor: 'blue',
            },
        );
    });
});
