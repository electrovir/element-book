import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        // version 0.4.4's dependencies are broken so we want to stay on 0.4.3
        'colorjs.io',
    ],
    // include only these
    filter: [],
};
