import {Linking} from 'react-native';
import {isIos} from './helperFunctions';

export function openAppSetting(path?: string) {
  if (isIos) {
    Linking.openURL(`App-Prefs:${path}`);
  } else {
    Linking.openSettings();
  }
}
