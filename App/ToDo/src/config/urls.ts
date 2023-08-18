export const API_BASE_URL = 'http://13.232.158.203:8080/';

export const getApiUrl = (endpoint: string) => API_BASE_URL + endpoint;

export const REGISTER_USER = getApiUrl('resources/api/v1/public/register');
export const SEND_AND_VERIFY_OTP = getApiUrl(
  'resources/api/v1/public/authenticate',
);
export const SAVE_USER_PROFILE_INFO = getApiUrl(
  'resources/api/v1/user/myprofile',
);
export const UPLOAD_USER_PHOTOS = getApiUrl(
  'resources/api/v1/user/myprofile/photo/upload',
);

export const GET_USER_PROFILE_INFO = getApiUrl(
  'resources/api/v1/user/myprofile',
);

export const GET_MATCHING_PROFILES = getApiUrl(
  'resources/api/v1/user/myprofile/matching',
);
