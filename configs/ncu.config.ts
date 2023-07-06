import {RunOptions} from 'npm-check-updates';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        /** Not ready for version 3 yet. */
        'prettier',
    ],
    // include only these
    filter: [],
};
