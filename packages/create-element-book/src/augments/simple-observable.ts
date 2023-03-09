import {copyThroughJson, JsonCompatibleValue} from '@augment-vir/common';

export function createSimpleObservable<DataType extends JsonCompatibleValue>(
    initData: Readonly<DataType>,
) {
    type Callback = (data: Readonly<DataType>) => void;

    const listeners = new Set<Callback>();

    let lastData: DataType = initData;

    return {
        listen(callback: Callback) {
            listeners.add(callback);
        },
        /**
         * Same as listen but it also fires the callback when the callback is added if the data has
         * been populated already.
         */
        watch(callback: Callback) {
            listeners.add(callback);
            callback(lastData);
        },
        readCopy(): Readonly<DataType> {
            return copyThroughJson(lastData);
        },
        unlisten(callback: Callback) {
            listeners.delete(callback);
        },
        update(data: Readonly<DataType>) {
            if (data !== lastData) {
                lastData = data as Readonly<typeof data>;
                listeners.forEach((listener) => {
                    listener(data as Readonly<typeof data>);
                });
            }
        },
    };
}
