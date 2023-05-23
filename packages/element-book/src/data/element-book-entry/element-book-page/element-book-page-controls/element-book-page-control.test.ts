import {definePageControl} from './element-book-page-control';
import {ElementBookPageControlTypeEnum} from './element-book-page-control-type';

describe(definePageControl.name, () => {
    it('requires the initValue to match the control type expected value type', () => {
        definePageControl({
            // this should be boolean
            // @ts-expect-error
            initValue: 'hello',
            controlType: ElementBookPageControlTypeEnum.Checkbox,
        });
        definePageControl({
            initValue: true,
            controlType: ElementBookPageControlTypeEnum.Checkbox,
        });
    });
});
