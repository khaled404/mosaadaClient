/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {I18nManager, StatusBar, Text, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Fonts, ScreenOptions} from './src/constants/styleConstants';
import ar from './src/localization/ar';
import en from './src/localization/en';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import messaging from '@react-native-firebase/messaging';
import RNBootSplash from 'react-native-bootsplash';

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
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

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
    RNBootSplash.hide({fade: true}); // fade
  }, []);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <Text>sd</Text>
      <FlashMessage
        position="top"
        hideOnPress={true}
        style={{paddingTop: ScreenOptions.StatusBarHeight}}
        titleStyle={{
          fontFamily: Fonts.medium,
          paddingTop: ScreenOptions.StatusBarHeight,
        }}
        textStyle={{
          fontFamily: Fonts.medium,
        }}
      />
    </View>
  );
};

export default App;
