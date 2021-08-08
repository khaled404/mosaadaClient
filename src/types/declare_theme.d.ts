// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    appPaddingVertical: number;
    appPaddingHorizontal: number;
    appBackground: string;
    statusBarHeight: number;
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
