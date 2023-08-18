import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse} from 'axios';
import {removeUserSession} from '../redux/actions/auth';
import {showError} from './helperFunctions';

export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    let newUserData = JSON.parse(userData);
    return {
      Authorization: `Bearer ${newUserData?.token}`,
    };
  }
  return {};
}

export function setItem(key: string, data: object | string) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}

export function getItem(key: string) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate() {
  return AsyncStorage.clear();
}

export function setUserData(data: string | object) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

export async function getUserData() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userData').then((data: any) => {
      resolve(JSON.parse(data));
    });
  });
}

export async function clearUserData() {
  return AsyncStorage.removeItem('userData');
}

export async function apiReq(
  endPoint: string,
  data: object,
  method: string,
  headers: object,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();

    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }

    console.log('header sending--->', headers);
    console.log('data sending--->', data);
    console.log('endPoint sending-->', endPoint);

    axios[method](endPoint, data, {headers})
      .then((result: AxiosResponse) => {
        console.log('core result--->', result);
        const {data} = result;

        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error: any) => {
        console.log(error, '<===error in utils');
        if (
          error &&
          error?.response &&
          (error?.response.status === 403 || error?.response.status === 500)
        ) {
          removeUserSession();
          showError('Session expired!');
          return rej(error);
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.error) {
            return rej({
              ...error.response.data,
              error: error.response.data.error || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({error: 'Network Error', message: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint: string, data: object, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint: string, data: object, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(
  endPoint: string,
  data: object,
  headers = {},
  requestOptions?: object,
) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export const apiPut = (endPoint: string, data: object, headers = {}) => {
  return apiReq(endPoint, data, 'put', headers);
};
