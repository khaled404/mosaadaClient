import {DefaultTheme} from 'styled-components/native';
import {Dimensions, NativeModules} from 'react-native';

export const theme: DefaultTheme = {
  borderRadius: '5px',
  appPaddingVertical: 30,
  appPaddingHorizontal: 15,
  appBackground: '#f7f7fa',
  statusBarHeight: NativeModules.StatusBarManager.HEIGHT,
  colors: {
    main: '#003a76',
    grayMain: '#487AAE',
    secondary: '#ffffff',
    gray: '#f7f7fa',
    text: '#b4b4d5',
    success: '#21BF46',
    warning: '#FE586A',
  },
  fonts: {
    regular: 'NeoRegular',
    medium: 'NeoMedium',
    black: 'NeoBlack',
    bold: 'NeoBold',
    light: 'NeoLight',
    ultra: 'NeoUltra',
  },
};
