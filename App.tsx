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
import {
  I18nManager,
  StatusBar,
  unstable_enableLogBox,
  View,
} from 'react-native';
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
import {removeItem} from './src/constants/helpers';
import {AsyncKeys} from './src/types/enums';
import {useQuery} from 'react-query';
import {GetUserHandler} from './src/screens/user/api';
import {useAuth} from './src/context/auth';
const {isRTL} = I18nManager;

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
  const {setIsLogin, isLogin, login} = useAuth();
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useQuery('userData', GetUserHandler, {
    onError: async error => {
      await removeItem(AsyncKeys.USER_DATA);
      setIsLogin(false);
    },
    onSuccess: data => {
      setIsLogin(true);
      console.log(data.data);

      login(data.data);
    },
    retry: false,
  });

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

  useEffect(() => {
    if (isLogin !== null) {
      RNBootSplash.hide({fade: true});
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
      <Router />
      <FlashMessage
        position="top"
        hideOnPress={true}
        floating
        style={{top: 25}}
        titleStyle={{
          fontFamily: theme.fonts.regular,
        }}
        textStyle={{
          fontFamily: theme.fonts.regular,
        }}
      />
    </ThemeProvider>
  );
};

export default App;
