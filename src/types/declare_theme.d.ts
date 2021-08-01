// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    appPaddingVertical: number;
    appPaddingHorizontal: number;
    appBackground: string;
    colors: {
      main: string;
      secondary: string;
      gray: string;
      text: string;
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
