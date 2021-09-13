import {Dimensions} from 'react-native';

const {get} = Dimensions;

export default (styles: any, defaultStyle: any, dimensions = 'w') => {
  let currentSize = undefined;
  const keys = Object.keys(styles)
    .map(string => +string)
    .sort((a, b) => (a > b ? -1 : 1));

  for (let index = 0; index < keys.length; index++) {
    const size = keys[index];
    if (size <= get('window')[dimensions === 'h' ? 'height' : 'width']) {
      currentSize = size;
      break;
    }
  }
  return currentSize ? styles[currentSize] : defaultStyle;
};
