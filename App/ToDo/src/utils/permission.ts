import {
  check,
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import {isIos, showError} from './helperFunctions';
import strings from '../constants/lang';
import {openAppSetting} from './nativeCommonFunctions';
import {Alert} from 'react-native';

export const checkLocationPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      await check(
        isIos
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      )
        .then(result => {
          console.log(result, '<=== check location permission');
          switch (result) {
            case RESULTS.UNAVAILABLE:
              showError(strings.LOCATION_UNAVAILABLE);
              break;
            case RESULTS.DENIED:
              return resolve(result);
            case RESULTS.LIMITED:
              return resolve(result);
            case RESULTS.GRANTED:
              return resolve(result);
            case RESULTS.BLOCKED:
              return resolve(result);
          }
        })
        .catch(error => {
          return reject(error);
        });
    } catch (error) {
      return reject(error);
    }
  });

export const requestLocationPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      await request(
        isIos
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      )
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          return reject(error);
        });
    } catch (error) {
      return reject(error);
    }
  });

export const requestCameraStoragePermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      await requestMultiple(
        isIos
          ? [PERMISSIONS.IOS.CAMERA]
          : [
              PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ],
      )
        .then(res => {
          if (
            res['android.permission.CAMERA'] === 'granted' &&
            res['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted' &&
            res['android.permission.READ_EXTERNAL_STORAGE'] === 'granted'
          ) {
            return resolve('granted');
          } else {
            Alert.alert(
              'Camera & Storage permissions are not allowed',
              'You can allow this permission from app settings!',
              [
                {
                  text: strings.CANCEL,
                  onPress: () => console.log('Cancel Pressed'),
                },
                {
                  text: strings.CONFIRM,
                  onPress: openAppSetting,
                },
              ],
            );
            return resolve('denied');
          }
        })
        .catch(error => {
          return reject(error);
        });
    } catch (error) {
      return reject(error);
    }
  });
