import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {defineElementBookChapter} from '../../../data/element-book-entry/element-book-chapter/element-book-chapter';
import {defineElementBookPage} from '../../../data/element-book-entry/element-book-page/element-book-page';
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
            defineElementBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
            defineElementBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
        ]);

        assert.include(fixture.shadowRoot.innerHTML, 'Cannot create duplicate entry');
    });

    it('should render error message when there are duplicate examples', async () => {
        const examplePage = defineElementBookPage({
            parent: undefined,
            title: 'title',
            defineExamplesCallback({defineExample}) {
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
            defineElementBookChapter({
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
