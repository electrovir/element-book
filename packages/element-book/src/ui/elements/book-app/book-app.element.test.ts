import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {defineBookPage} from '../../../data/book-entry/book-page/define-book-page';
import {ElementBookApp} from './book-app.element';
import {BookConfig} from './book-config';

describe(ElementBookApp.tagName, () => {
    async function setupEntriesTest(entries: BookConfig['entries']) {
        const fixture = await renderFixture(
            html`
                <${ElementBookApp}
                    ${assign(ElementBookApp, {
                        entries,
                    })}
                ></${ElementBookApp}>
            `,
        );

        typedAssertInstanceOf(fixture, ElementBookApp);
        return fixture;
    }

    it('should render error message when there are duplicate page names', async () => {
        const fixture = await setupEntriesTest([
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
        ]);

        assert.include(fixture.shadowRoot.innerHTML, 'Cannot create duplicate entry');
    });

    it('should render error message when there are duplicate examples', async () => {
        const examplePage = defineBookPage({
            parent: undefined,
            title: 'title',
            elementExamplesCallback({defineExample}) {
                defineExample({
                    title: 'duplicate example',
                    renderCallback() {
                        return '';
                    },
                });
                defineExample({
                    title: 'duplicate example',
                    renderCallback() {
                        return '';
                    },
                });
            },
        });

        const fixture = await setupEntriesTest([
            examplePage,
        ]);

        assert.include(
            fixture.shadowRoot
                .querySelector('element-book-entry-display')!
                .shadowRoot!.querySelector('element-book-page-examples')!.shadowRoot!.innerHTML,
            'Failed to define example',
        );
    });

    it('should render error message when there are empty chapter titles', async () => {
        const fixture = await setupEntriesTest([
            defineBookPage({
                parent: undefined,
                title: '',
            }),
        ]);

        assert.include(
            fixture.shadowRoot.innerHTML,
            'Cannot have an element-book chapter with an empty title',
        );
    });
});
