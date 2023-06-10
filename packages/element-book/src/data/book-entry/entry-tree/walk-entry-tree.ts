import {MaybePromise} from '@augment-vir/common';
import {EntryTreeNode} from './entry-tree';

/**
 * Walk the whole given tree, calling callback on each node. If callback returns the boolean false
 * exactly, then all walking will abort. If callback returns a promise, this function will return a
 * promise. Otherwise, it will not return a promise.
 */
export function walkEntryTree<CallbackReturn extends MaybePromise<void | boolean>>(
    startNode: Readonly<EntryTreeNode>,
    callback: (node: Readonly<EntryTreeNode>) => CallbackReturn,
): CallbackReturn {
    // this inner function is for easier typing purposes
    function innerWalk(): MaybePromise<void | boolean> {
        const outerResult = callback(startNode);

        if (outerResult === false) {
            return false;
        }

        let abort = false;

        if (outerResult instanceof Promise) {
            return new Promise<void | boolean>(async (resolve, reject) => {
                try {
                    const outerResolvedResult = await outerResult;

                    if (outerResolvedResult === false) {
                        return;
                    }

                    await Promise.all(
                        Object.values(startNode.children).map(async (child) => {
                            if (abort) {
                                return false;
                            }

                            const result = await walkEntryTree(child, callback);
                            if (result === false) {
                                abort = true;
                                return false;
                            }

                            return result;
                        }),
                    );

                    if (abort) {
                        return resolve(false);
                    } else {
                        return resolve();
                    }
                } catch (error) {
                    return reject(error);
                }
            }) as CallbackReturn;
        } else {
            let gotPromise = false;
            const childResults = Object.values(startNode.children).map((child) => {
                if (abort) {
                    return false;
                }
                const result = walkEntryTree(child, callback);

                if (result === false) {
                    abort = true;
                } else if (result instanceof Promise) {
                    gotPromise = true;
                }

                return result;
            });

            if (gotPromise) {
                return new Promise(async (resolve, reject) => {
                    try {
                        if (abort) {
                            return resolve(false);
                        }

                        const results = await Promise.all(childResults);

                        if (results.some((result) => result === false)) {
                            return resolve(false);
                        } else {
                            return resolve();
                        }
                    } catch (error) {
                        return reject(error);
                    }
                });
            } else if (abort) {
                return false;
            }

            return;
        }
    }

    return innerWalk() as CallbackReturn;
}
