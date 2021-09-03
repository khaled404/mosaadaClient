import {TextInputProps, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {EImages} from './enums';

export interface IButton {
  style?: any;
  onPress?: () => void;
  textStyle?: any;
  title: string;
  isLoading?: boolean;
}

export interface IImage {
  source?: EImages;
  url?: any;
  style?: any;
  resizeMode?: 'contain' | 'center' | 'cover' | 'stretch';
}

export interface ITextInput extends TextInputProps {
  LeftContent?: (props?: SvgProps) => JSX.Element;
  RightContent?: (props?: SvgProps) => JSX.Element;
  containerStyle?: string;
  inputstyle?: string;
  errors?: any;
  touched?: any;
  name: string;
  handleChange?: any;
  handleBlur?: any;
}
export interface IQueryErorr {
  response: {
    data: any;
    config: any;
  };
}

export interface NavigationProps {
  goBack?: () => void;
  openDrawer?: () => void;
  navigate?: any;
  replace?: any;
  reset?: any;
  params?: any;
  name?: string;
}
