import {DefaultTheme} from 'styled-components/native';
import {Dimensions, NativeModules} from 'react-native';
import {sPixel} from './pixel';
import colorWithOpacity from './colorWithOpacity';

export const theme: DefaultTheme = {
  appPaddingVertical: 30,
  appPaddingHorizontal: 15,
  appBackground: '#f7f7fa',
  statusBarHeight: NativeModules.StatusBarManager.HEIGHT,
  pixel: sPixel,
  screenDimensions: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  colorWithOpacity: colorWithOpacity,
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
