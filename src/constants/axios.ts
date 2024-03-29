import axios from 'axios';
import {I18nManager} from 'react-native';
import {AsyncKeys} from '../types/enums';
import {getItem} from './helpers';
const {isRTL} = I18nManager;

export const globalUrl = 'https://mosaada.mih-med.com/api/';
export const baseUrl = globalUrl + 'customer/';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Language': isRTL ? 'ar' : 'en',
  Lang: isRTL ? 'ar' : 'en',
};

const Axios = axios.create({
  baseURL: baseUrl,
  headers: headers,
});

Axios.interceptors.request.use(
  async config => {
    const {api_token} = (await getItem(AsyncKeys.USER_DATA)) || '';
    config.headers['Api-Token'] = api_token;
    return config;
  },
  error => Promise.reject(error),
);

export default Axios;
