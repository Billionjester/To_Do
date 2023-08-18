import {REGISTER_USER, SEND_AND_VERIFY_OTP} from '../../config/urls';
import {apiPost, clearUserData, setUserData} from '../../utils/utils';
import {saveUserData} from '../reducer/auth';
import store from '../store';
import jwt_decode from 'jwt-decode';

const {dispatch} = store;

export function userDataSave(data: object | string | null) {
  dispatch(saveUserData(data));
}

export const removeUserSession = async () => {
  const res = await clearUserData();
  userDataSave(null);
};

export function registerUser(data: object, headers?: object) {
  return apiPost(REGISTER_USER, data, headers);
}

export function sendAndVerifyOtp(data: object, headers?: object) {
  return new Promise((resolve, reject) => {
    apiPost(SEND_AND_VERIFY_OTP, data, headers)
      .then((res: any) => {
        var decoded: any = jwt_decode(res?.token);
        console.log(decoded, '<===decoded');
        let decodedUserData = {
          ...res,
          phoneNumber: decoded?.sub,
          gender: decoded?.gender,
        };
        setUserData(decodedUserData)
          .then(resp => {
            !res?.isFirstTimeUser && userDataSave(decodedUserData);
            resolve(decodedUserData);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(error => {
        reject(error);
      });
  });
}
