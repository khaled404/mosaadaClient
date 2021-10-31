import AsyncStorage from '@react-native-community/async-storage';
import {Linking, I18nManager} from 'react-native';
import {showMessage} from 'react-native-flash-message';
// import Share, {Options} from 'react-native-share';
const {isRTL} = I18nManager;

export const saveItem = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error: any) {
    console.log('saveItem', error.message);
  }
  return false;
};

export const getItem = async (key: string) => {
  try {
    const retrievedItem: any = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error: any) {
    console.log('getItem', error.message);
  }
  return null;
};

export const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error: any) {
    console.log('removeItem', error.message);
  }
  return false;
};

export const clear = async () => {
  await AsyncStorage.clear();
};

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

export const returnStatus = (
  status: any,
  progress: any,
  research: any,
  close: any,
  defaultItem: any,
) => {
  switch (status) {
    case 'in_process':
      return progress;
    case 'research':
      return research;
    case 'research':
      return research;
    case 'close':
      return close;
    default:
      return defaultItem;
  }
};
