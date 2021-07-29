import {Dimensions, NativeModules} from 'react-native';
const {width, height} = Dimensions.get('screen');

export enum Colors {
  minColor = '#123a76',
  colorSacand = '#ffffff',
  gray = '#979797',
  appBackgroundColor = '#fff',
  sacandAppBackgroundColor = '#F4F6F9',
  grayDark = '#4A4A4A',
  boxColor = '#E0E6EF',
  success = '#27ae60',
  warning = '#fc4a5e',
  white = '#ffffff',
  dark = '#111113',
  edit = '#337ab7',
}

export enum Fonts {
  regular = 'Cairo-Regular',
  medium = 'Cairo-Regular',
  black = 'Cairo-Black',
  bold = 'Cairo-Bold',
  extraLight = 'Cairo-ExtraLight',
  light = 'Cairo-Light',
  semiBold = 'Cairo-SemiBold',
}

export enum Images {}

export enum ScreenOptions {
  StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
  HalfScreen = width / 2 - 15,
  CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
  DesignResolution = {
    width: 750,
    height: 1624,
  } as any,
}
/**
 * create PerfectPixel fnction from psd or xd workflow size
 * @param designSize uor psd or xd workflow size
 * @returns function to use in Pixel
 */
export const createPerfectPixel = (designSize = {width: 750, height: 1624}) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'Invalid design size object! must have width and height fields of type Number.',
    );
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION =
    ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return (size: number) => RESOLUTIONS_PROPORTION * size;
};
/**
 * Get perfect pixel for current resolution
 * @param pixel design size pixel
 * @returns Perfect pixel for current resolution 😄
 */

export const Pixel = (pixel: number) => {
  const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
  return Perfect(pixel);
};

/**
 * create color with opacity
 * @param hex color
 * @param opacity decimal value
 * @returns new color with opacity 👏
 */
export const ColorWithOpacity = (hex: Colors | string, opacity: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let color;
  if (result) {
    color = {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  } else {
    return hex;
  }
  return `rgba(${color.r},${color.g},${color.b},${opacity})`;
};
