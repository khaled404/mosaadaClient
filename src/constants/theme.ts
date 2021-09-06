import {DefaultTheme} from 'styled-components/native';
import {Dimensions, I18nManager, NativeModules} from 'react-native';
import {sPixel} from './pixel';
import colorWithOpacity from './colorWithOpacity';
import {CSSObject} from 'styled-components';

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
  mediaQuery: (size, smStyle, originalStyle, dimension = 'w') =>
    size <= Dimensions.get('window')[dimension === 'h' ? 'height' : 'width']
      ? smStyle
      : originalStyle,
  colors: {
    main: '#003a76',
    grayMain: '#487AAE',
    secondary: '#ffffff',
    gray: '#f7f7fa',
    text: '#b4b4d5',
    success: '#27ae60',
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
