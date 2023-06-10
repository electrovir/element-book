import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {defineBookPage} from '../../../data/book-entry/book-page/define-book-page';
import {BookError} from '../common/book-error.element';
import {BookEntryDisplay} from '../entry-display/book-entry-display.element';
import {BookElementExampleWrapper} from '../entry-display/element-example/book-element-example-wrapper.element';
import {ElementBookApp} from './element-book-app.element';
import {ElementBookConfig} from './element-book-config';

describe(ElementBookApp.tagName, () => {
    async function setupEntriesTest(entries: ElementBookConfig['entries']) {
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

        assert.include(
            fixture.shadowRoot.querySelector(BookEntryDisplay.tagName)!.shadowRoot!.innerHTML,
            BookError.tagName,
        );
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
            Array.from(
                fixture.shadowRoot
                    .querySelector(BookEntryDisplay.tagName)!
                    .shadowRoot!.querySelectorAll(BookElementExampleWrapper.tagName),
            )
                .map((exampleWrapper) => exampleWrapper.shadowRoot!.innerHTML)
                .join(''),
            BookError.tagName,
        );
    });

    it('should render error message when there are empty page titles', async () => {
        const fixture = await setupEntriesTest([
            defineBookPage({
                parent: undefined,
                title: '',
            }),
        ]);

        assert.include(
            fixture.shadowRoot.querySelector(BookEntryDisplay.tagName)!.shadowRoot!.innerHTML,
            BookError.tagName,
        );
    });
});
