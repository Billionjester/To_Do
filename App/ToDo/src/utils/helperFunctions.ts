import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {activeRadioObject} from '../Components/RadioGroup';
import {isEmpty} from 'lodash';

export const isIos = Platform.OS === 'ios' ? true : false;

export const howManySelected = (
  array: object[] = [],
  isReturnItems: boolean = false,
  onlyTitle: boolean = false,
) => {
  // get count of selected items or get selected items array
  let count = 0;
  let selectedItems: string[] = [];
  array.map((item: any) => {
    if (item?.isSelected) {
      isReturnItems
        ? selectedItems.push(!!onlyTitle ? item?.title : item)
        : (count = count + 1);
    }
  });
  return isReturnItems ? selectedItems : count;
};

export const showSuccess = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
  });
};

export const showError = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
  });
};

export const showInfo = (message: string) => {
  Toast.show({
    type: 'info',
    text1: message,
  });
};

export const findKeyAndReturnObj = (
  data: activeRadioObject[],
  keyTitle: string,
): activeRadioObject => {
  return (
    (!isEmpty(data) && data.find(obj => obj.title === keyTitle)) || data[0]
  );
};
