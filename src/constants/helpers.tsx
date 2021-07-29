import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {Linking, Platform, I18nManager} from 'react-native';
import {showMessage} from 'react-native-flash-message';
// import Share, {Options} from 'react-native-share';
const {isRTL} = I18nManager;
export enum AsyncKeys {
  IS_LOGIN = 'IS_LOGIN',
  USER_DATA = 'USER_DATA',
}
/**
 * save reduser keys on Async Storage
 */
export class PersistConfig {
  key: string;
  storage: import('@react-native-community/async-storage').AsyncStorageStatic;
  whitelist?: any;
  constructor(key: string, ...whitelist: any) {
    this.key = key;
    this.storage = AsyncStorage;
    this.whitelist = whitelist;
  }
}

export const saveItem = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log('saveItem', error.message);
  }
  return false;
};

export const getItem = async (key: string) => {
  try {
    const retrievedItem: any = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log('getItem', error.message);
  }
  return null;
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log('removeItem', error.message);
  }
  return false;
};

export const clear = async () => {
  await AsyncStorage.clear();
};

export const paginationConfig = [
  Platform.OS === 'ios'
    ? {
        onEndReachedThreshold: 0,
      }
    : {onEndThreshold: 0},
];

/**
 * Translate text handler
 * @param en english word
 * @param ar arabic word
 * @returns if language en return english word if ar return arabic word
 */
export const TranslateTextHandler = (en: string, ar: string) => {
  return isRTL ? ar : en;
};
/**
 * git time
 * @param date timestamp
 * @returns time
 */
export const FormatAMPMHandler = (date: Date) => {
  let hours = date.getHours();
  let minutes: any = date.getMinutes();
  const ampm =
    hours >= 12
      ? TranslateTextHandler('pm', 'مساء')
      : TranslateTextHandler('am', 'صباحا');
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};
/**
 * convert timestamp to date
 * @param date date fromat string
 * @param time true or false to show time
 * @returns Date
 */
export const getDateHandler = (date?: string, time?: boolean) => {
  const day = date ? new Date(date) : new Date();
  const hours = FormatAMPMHandler(day);
  //2021-05-19
  return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}${
    time ? ' - ' + hours : ''
  }`;
};

/**
 * nsvgstion ref to use navgtion anywhere
 */
export const navigationRef: any = React.createRef();

/**
 * open any link and check is a valid link
 * @param url link
 */
export const OpenUrlHandler = async (url: string): Promise<void> => {
  if (await Linking.canOpenURL(url)) {
    await Linking.openURL(url);
  } else {
    showMessage({
      message: 'This link cannot be opened',
      type: 'danger',
    });
  }
};

/**
 * handel requests errors
 * @param errorMessage response error message
 * @returns actions
 */

// export const HandleErrors = (errorMessage: string) => {
//   return async (dispatch: Dispatch<IDispatch>) => {
//     switch (errorMessage) {
//       case 'Network Error':
//        case 'Request failed with status code 401':
//         return dispatch(
//           LogoutHandler(() => {
//             navigationRef.current.reset({
//               index: 1,
//               routes: [{name: 'Login'}],
//             });
//           }) as any,
//         );
//       default:
//         return;
//     }
//   };
// };
/**
 * show input erorr message
 * @param data Array of errors
 * @param key input name to return error message
 * @returns string or boolean
 */
export const InputErorrHandler = (data: any, key: string): string | boolean => {
  return data[key] ? data[key][0] : false;
};

/**
 * hook to get user data from local storage
 * @returns object | null | undefined
 */
export const useGetUserData = (initValue?: object) => {
  const [userData, setUserData] = useState(initValue);
  useEffect(() => {
    getItem(AsyncKeys.USER_DATA).then(data => {
      setUserData(data);
    });
  }, []);
  return userData;
};
