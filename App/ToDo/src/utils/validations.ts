import strings from '../constants/lang';
import {isEmpty, size} from 'lodash';

const checkEmpty = (
  val: object | string | null,
  key: string,
  maxLength: number,
) => {
  if (isEmpty(val)) {
    return `${strings.PLEASE_ENTER} ${key}`;
  } else if (size(val) !== maxLength) {
    return `${strings.PLEASE_ENTER} ${strings.VALID} ${key}`;
  } else {
    return '';
  }
};

// const checkMinLength = (val, minLength, key) => {
//   if (val.trim().length < minLength) {
//     return `${strings.PLEASE_ENTER_VALID} ${key}`;
//   } else {
//     return '';
//   }
// };

export default function (data?: any) {
  const {phoneNumber, verificationCode} = data;

  if (phoneNumber != undefined) {
    let emptyValidation = checkEmpty(phoneNumber, strings.PHONE_NUMBER, 10);
    if (emptyValidation !== '') {
      return emptyValidation;
    }
  }
  if (verificationCode != undefined) {
    let emptyValidation = checkEmpty(verificationCode, strings.OTP, 6);
    if (emptyValidation !== '') {
      return emptyValidation;
    }
  }
}
