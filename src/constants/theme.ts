import {DefaultTheme} from 'styled-components/native';
import {Dimensions, I18nManager, NativeModules} from 'react-native';
import {sPixel} from './pixel';
import colorWithOpacity from './colorWithOpacity';
import {CSSObject} from 'styled-components';
import mediaQuery from './mediaQuery';

export const theme: DefaultTheme = {
  appPaddingVertical: 30,
  appPaddingHorizontal: 20,
  appBackground: '#f7f7fa',
  statusBarHeight: NativeModules.StatusBarManager.HEIGHT,
  pixel: sPixel,
  screenDimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  dir: (ar, en) => (I18nManager.isRTL ? ar : en),
  left: I18nManager.isRTL ? 'right' : 'left',
  right: I18nManager.isRTL ? 'left' : 'right',
  colorWithOpacity: colorWithOpacity,
  mediaQuery: mediaQuery,
  colors: {
    main: '#003a76',
    grayMain: '#487AAE',
    secondary: '#ffffff',
    gray: '#f7f7fa',
    text: '#b4b4d5',
    success: '#27ae60',
    warning: '#FE586A',
    yellow: '#ffb800',
  },
  fonts: {
    regular: 'NeoRegular',
    black: 'NeoBlack',
    bold: 'NeoBold',
    light: 'NeoLight',
    ultra: 'NeoUltra',
  },
};
