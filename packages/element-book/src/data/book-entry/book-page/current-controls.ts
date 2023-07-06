import {copyThroughJson, mapObjectValues} from '@augment-vir/common';
import {GlobalValues} from '../../../ui/elements/element-book-app/element-book-config';
import {isBookTreeNode} from '../../book-tree/book-tree';
import {BookTreeNode} from '../../book-tree/book-tree-node';
import {BookEntryTypeEnum} from '../book-entry-type';
import {BookPageControlsValues} from './book-page-controls';

export type ControlsWrapper = {
    children: CurrentControls;
    controls: BookPageControlsValues;
};

export type CurrentControls = {
    [Breadcrumb: string]: ControlsWrapper;
};

function getOrCreateControlsWrapper(
    currentControls: CurrentControls,
    currentBreadcrumb: string,
    newValues: BookPageControlsValues | undefined,
): ControlsWrapper | undefined {
    const controlsWrapper = currentControls[currentBreadcrumb];

    if (controlsWrapper) {
        return controlsWrapper;
    }

    if (newValues) {
        const newControls: ControlsWrapper = {
            children: {},
            controls: {},
        };

        currentControls[currentBreadcrumb] = newControls;

        return newControls;
    }

    return undefined;
}

export function traverseCurrentControls(
    currentControls: CurrentControls,
    fullUrlBreadcrumbs: ReadonlyArray<string>,
): BookPageControlsValues {
    return internalTraverseCurrentControls(currentControls, fullUrlBreadcrumbs, undefined);
}

function internalTraverseCurrentControls(
    currentControls: CurrentControls,
    fullUrlBreadcrumbs: ReadonlyArray<string>,
    newValues: BookPageControlsValues | undefined,
): BookPageControlsValues {
    const currentBreadcrumb = fullUrlBreadcrumbs[0];
    if (!currentBreadcrumb) {
        return {};
    }

    const controlsWrapper = getOrCreateControlsWrapper(
        currentControls,
        currentBreadcrumb,
        newValues,
    );

    if (!controlsWrapper) {
        return {};
    }
    const nextBreadcrumbs = fullUrlBreadcrumbs.slice(1);
    if (!nextBreadcrumbs.length && newValues) {
        controlsWrapper.controls = newValues;
    }

    const controlsValues: BookPageControlsValues = controlsWrapper.controls;

    return {
        ...controlsValues,
        ...internalTraverseCurrentControls(controlsWrapper.children, nextBreadcrumbs, newValues),
    };
}

export function createNewCurrentControls(
    currentControls: CurrentControls,
    fullUrlBreadcrumbs: ReadonlyArray<string>,
    newValues: BookPageControlsValues,
): CurrentControls {
    const newCurrentControls = copyThroughJson(currentControls);

    internalTraverseCurrentControls(newCurrentControls, fullUrlBreadcrumbs, newValues);

    return newCurrentControls;
}

export function createControlsFromTree(
    node: BookTreeNode,
    globalControls: GlobalValues,
): CurrentControls {
    const currentControls: CurrentControls = mapObjectValues(
        node.children,
        (childName, child): ControlsWrapper => {
            if (!isBookTreeNode(child, BookEntryTypeEnum.Page)) {
                return {
                    children: {},
                    controls: {},
                };
            }

            return {
                children: createControlsFromTree(child, {}),
                controls: {
                    ...globalControls,
                    ...mapObjectValues(child.entry.controls, (name, setup) => {
                        return setup.initValue;
                    }),
                },
            };
        },
    );

    return currentControls;
}
