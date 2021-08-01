// styled-components.ts
import {ThemedStyledInterface} from 'styled-components/native';
import * as styledComponents from 'styled-components/native';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemedStyledInterface>;

export {css, ThemeProvider};
export default styled;
