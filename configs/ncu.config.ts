import {RunOptions} from 'npm-check-updates';
import {baseNcuConfig} from 'virmator/dist/compiled-base-configs/base-ncu';

export const ncuConfig: RunOptions = {
    color: true,
    upgrade: true,
    root: true,
    // exclude these
    reject: [
        ...baseNcuConfig.reject,
        /** Not ready for v5 yet. */
        'vite',
    ],
    // include only these
    filter: [],
};
