import {itCases} from '@augment-vir/browser-testing';
import {defineElementBookChapter} from '../element-book-chapter/element-book-chapter';
import {defineElementBookPage} from '../element-book-page/element-book-page';
import {defineElementBookSection} from '../element-book-section/element-book-section';
import {findTitleAncestry} from './entry-tree';

describe(findTitleAncestry.name, () => {
    const exampleSection = defineElementBookSection('section title');
    const exampleChapter = defineElementBookChapter('chapter title', exampleSection);
    const examplePage = defineElementBookPage('page title', exampleChapter);

    itCases(findTitleAncestry, [
        {
            it: 'finds nothing when entry has no parent',
            input: exampleSection,
            expect: [],
        },
        {
            it: 'finds a parent',
            input: exampleChapter,
            expect: [exampleSection.title],
        },
        {
            it: 'finds multiple ancestors',
            input: examplePage,
            expect: [
                exampleChapter.title,
                exampleSection.title,
            ],
        },
    ]);
});
