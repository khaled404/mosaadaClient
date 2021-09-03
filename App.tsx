/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {I18nManager, StatusBar, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import ar from './src/localization/ar';
import en from './src/localization/en';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';
import Router from './src/Router';
import {theme} from './src/constants/theme';
import {ThemeProvider} from './src/constants/styled';
import {getItem} from './src/constants/helpers';
import {AsyncKeys} from './src/types/enums';
const {isRTL, forceRTL, allowRTL} = I18nManager;
if (!isRTL) {
  forceRTL(true);
  allowRTL(true);
}
i18n.use(initReactI18next).init({
  resources: {
    ar: {
      translation: ar,
    },
    en: {
      translation: en,
    },
  },
  lng: isRTL ? 'ar' : 'en',
  fallbackLng: isRTL ? 'ar' : 'en',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  const [isLogin, setIsLogin] = useState<any>(null);

  useEffect(() => {
    requestUserPermission();
    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          console.log(remoteMessage);
        }
      });
  }, []);

  const checkIsLogin = async () => {
    const data = await getItem(AsyncKeys.USER_DATA);
    if (data !== null || data !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  useEffect(() => {
    checkIsLogin();
  }, []);
  useEffect(() => {
    if (isLogin !== null) {
      setTimeout(() => {
        RNBootSplash.hide({fade: true});
      }, 200);
    }
  }, [isLogin]);
  if (isLogin === null) return <View></View>;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Router isLogin={isLogin} />
      <FlashMessage
        position="top"
        hideOnPress={true}
        floating
        style={{top: 25}}
        titleStyle={{
          fontFamily: theme.fonts.medium,
        }}
        textStyle={{
          fontFamily: theme.fonts.medium,
        }}
      />
    </ThemeProvider>
  );
};

export default App;
