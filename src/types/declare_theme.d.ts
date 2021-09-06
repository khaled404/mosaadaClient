// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    appPaddingVertical: number;
    appPaddingHorizontal: number;
    appBackground: string;
    statusBarHeight: number;
    pixel: (arg: number) => string;
    colorWithOpacity: (arg1: string, arg2: number) => string;
    dir: (ar: any, en: any) => any;
    left: string;
    right: string;
    mediaQuery: (
      size: number,
      smStyle: any,
      originalStyle: any,
      dimensions: 'w' | 'h',
    ) => any;
    screenDimensions: {
      width: number;
      height: number;
    };
    colors: {
      main: string;
      secondary: string;
      gray: string;
      text: string;
      success: string;
      warning: string;
      grayMain: string;
    };
    fonts: {
      regular: string;
      medium: string;
      black: string;
      bold: string;
      light: string;
      ultra: string;
    };
  }
}
