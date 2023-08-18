import {
  GET_USER_PROFILE_INFO,
  SAVE_USER_PROFILE_INFO,
  UPLOAD_USER_PHOTOS,
} from '../../config/urls';
import {apiGet, apiPost} from '../../utils/utils';

export function saveUserProfileInfo(data: object, headers?: object) {
  return apiPost(SAVE_USER_PROFILE_INFO, data, headers);
}

export function saveUserPhotos(url: string, data: object, headers?: object) {
  return apiPost(UPLOAD_USER_PHOTOS + url, data, headers);
}

export function getUserProfileData(
  url: string,
  data: object,
  headers?: object,
) {
  return apiGet(GET_USER_PROFILE_INFO + url, data, headers);
}
