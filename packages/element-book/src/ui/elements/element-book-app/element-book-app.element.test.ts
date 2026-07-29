import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {html} from 'element-vir';
import {ViraError} from 'vira';
import {defineBookPage} from '../../../data/book-entry/book-page/define-book-page.js';
import {ElementBookApp} from './element-book-app.element.js';
import {type ElementBookConfig} from './element-book-config.js';

describe(ElementBookApp.tagName, () => {
    async function setupPagesTest(pages: ElementBookConfig['pages']) {
        const elementBookAppInstance = await testWeb.render(html`
            <${ElementBookApp.assign({
                pages,
            })}></${ElementBookApp}>
        `);

        return elementBookAppInstance as typeof ElementBookApp.InstanceType;
    }

    async function getErrorMessage(
        elementBookAppInstance: (typeof ElementBookApp)['InstanceType'],
    ): Promise<string> {
        const errorWrapper = await waitUntil.isTruthy(
            () => {
                try {
                    const errorWrapper = queryThroughShadow(
                        elementBookAppInstance,
                        ViraError.tagName,
                        {
                            all: false,
                        },
                    );
                    assert.instanceOf(errorWrapper, ViraError);
                    return errorWrapper;
                } catch {
                    return undefined;
                }
            },
            {
                interval: {
                    milliseconds: 100,
                },
                timeout: {
                    seconds: 10,
                },
            },
            `Failed to find '${ViraError.tagName}'`,
        );

        return await waitUntil.isTruthy(
            () => errorWrapper.textContent.trim(),
            undefined,
            'never got an error message',
        );
    }

    it('renders an error message when there are duplicate page names', async () => {
        const elementBookAppInstance = await setupPagesTest([
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
        ]);
        assert.isIn(
            "Cannot create duplicate 'duplicate-title'",
            await getErrorMessage(elementBookAppInstance),
        );
    });

    it('renders an error message when there are duplicate examples', async () => {
        const examplePage = defineBookPage({
            parent: undefined,
            title: 'title',
            defineExamples({defineExample}) {
                defineExample({
                    title: 'duplicate example',
                    render() {
                        return '';
                    },
                });
                defineExample({
                    title: 'duplicate example',
                    render() {
                        return '';
                    },
                });
            },
        });

        const elementBookAppInstance = await setupPagesTest([
            examplePage,
        ]);

        assert.isIn(
            "Example title 'duplicate example' in page 'title' is already taken.",
            await getErrorMessage(elementBookAppInstance),
        );
    });

    it('renders an error message when there are empty page titles', async () => {
        const elementBookAppInstance = await setupPagesTest([
            defineBookPage({
                parent: undefined,
                title: '',
            }),
        ]);

        assert.isIn(
            'Cannot define an element-book page with an empty title.',
            await getErrorMessage(elementBookAppInstance),
        );
    });
});
