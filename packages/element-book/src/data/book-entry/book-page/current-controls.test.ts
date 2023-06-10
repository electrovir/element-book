import {itCases} from '@augment-vir/browser-testing';
import {copyThroughJson} from '@augment-vir/common';
import {assert} from '@open-wc/testing';
import {
    CurrentControls,
    createNewCurrentControls,
    traverseCurrentControls,
} from './current-controls';

const exampleCurrentControls = {
    a: {
        children: {
            a1: {
                children: {},
                controls: {
                    a1Value1: 'u',
                    a1Value2: 'v',
                },
            },
            a2: {
                children: {},
                controls: {
                    aValue1: 'override',
                },
            },
        },
        controls: {
            aValue1: 's',
            aValue2: 't',
        },
    },
    b: {
        children: {},
        controls: {
            bValue1: 'q',
            bValue2: 'r',
        },
    },
} as const satisfies CurrentControls;

describe(traverseCurrentControls.name, () => {
    itCases(traverseCurrentControls, [
        {
            it: 'returns an empty object if there are no more breadcrumbs',
            inputs: [
                exampleCurrentControls,
                [],
            ],
            expect: {},
        },
        {
            it: 'returns an empty object if the requested breadcrumb does not exist',
            inputs: [
                exampleCurrentControls,
                ['does not exist'],
            ],
            expect: {},
        },
        {
            it: 'grabs top level controls',
            inputs: [
                exampleCurrentControls,
                ['a'],
            ],
            expect: exampleCurrentControls.a.controls,
        },
        {
            it: 'grabs nested combined controls',
            inputs: [
                exampleCurrentControls,
                [
                    'a',
                    'a1',
                ],
            ],
            expect: {
                ...exampleCurrentControls.a.controls,
                ...exampleCurrentControls.a.children.a1.controls,
            },
        },
        {
            it: 'overrides parent values',
            inputs: [
                exampleCurrentControls,
                [
                    'a',
                    'a2',
                ],
            ],
            expect: {
                ...exampleCurrentControls.a.controls,
                ...exampleCurrentControls.a.children.a2.controls,
            },
        },
    ]);
});

describe(createNewCurrentControls.name, () => {
    itCases(createNewCurrentControls, [
        {
            it: 'does nothing if no breadcrumbs are provided',
            inputs: [
                exampleCurrentControls,
                [],
                {
                    aThing: 'should not do anything',
                },
            ],
            expect: exampleCurrentControls,
        },
        {
            it: 'adds a top level child if it does not exist',
            inputs: [
                exampleCurrentControls,
                ['does not exist'],
                {
                    doTheThing: 'okay',
                },
            ],
            expect: {
                ...exampleCurrentControls,
                'does not exist': {
                    children: {},
                    controls: {
                        doTheThing: 'okay',
                    },
                },
            },
        },
        {
            it: 'adds a nested child if it does not exist',
            inputs: [
                exampleCurrentControls,
                [
                    'a',
                    'does not exist',
                ],
                {
                    doTheThing: 'okay',
                },
            ],
            expect: {
                ...exampleCurrentControls,
                a: {
                    ...exampleCurrentControls.a,
                    children: {
                        ...exampleCurrentControls.a.children,
                        'does not exist': {
                            children: {},
                            controls: {
                                doTheThing: 'okay',
                            },
                        },
                    },
                },
            },
        },
    ]);

    it('does not modify the original controls object', () => {
        const originalCurrentControls = copyThroughJson(exampleCurrentControls);

        const newControlsToSave = {
            a1Value1: 'new 1',
            a1Value2: 'new 2',
        };

        const newControls = createNewCurrentControls(
            exampleCurrentControls,
            [
                'a',
                'a1',
            ],
            newControlsToSave,
        );

        assert.deepStrictEqual(newControls, {
            ...exampleCurrentControls,
            a: {
                ...exampleCurrentControls.a,
                children: {
                    ...exampleCurrentControls.a.children,
                    a1: {
                        ...exampleCurrentControls.a.children.a1,
                        controls: newControlsToSave,
                    },
                },
            },
        });

        assert.deepStrictEqual(originalCurrentControls, exampleCurrentControls);
    });
});
