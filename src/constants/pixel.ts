import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const CURRENT_RESOLUTION = Math.sqrt(height * height + width * width);
const DesignResolution = {
  width: 750,
  height: 1624,
};
/**
 * create PerfectPixel fnction from psd or xd workflow size
 * @param designSize uor psd or xd workflow size
 * @returns function to use in Pixel
 */
const createPerfectPixel = (designSize = {width: 750, height: 1624}) => {
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
  const RESOLUTIONS_PROPORTION = CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return (size: number) => RESOLUTIONS_PROPORTION * size;
};
/**
 * Get perfect pixel for current resolution
 * @param pixel design size pixel
 * @returns Perfect pixel for current resolution
 */

export const sPixel = (pixel: number) => {
  const Perfect = createPerfectPixel(DesignResolution);
  return `${Perfect(pixel)}px`;
};

export const pixel = (pixel: number) => {
  const Perfect = createPerfectPixel(DesignResolution);
  return Perfect(pixel);
};
