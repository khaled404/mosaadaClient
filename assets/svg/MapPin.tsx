import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={16.978} height={16.978} {...props}>
      <Path data-name="Path 1090" d="M0 0h16.978v16.978H0z" fill="none" />
      <Path
        data-name="Path 1091"
        d="M8.489 8.489a1.415 1.415 0 111.415-1.415 1.419 1.419 0 01-1.415 1.415zm4.241-1.274a4.247 4.247 0 10-8.489 0c0 1.655 1.379 3.848 4.244 6.466 2.869-2.617 4.245-4.81 4.245-6.466zm-4.241-5.8a5.627 5.627 0 015.659 5.8q0 3.523-5.659 8.347Q2.83 10.735 2.83 7.215a5.627 5.627 0 015.659-5.8z"
        fill={props.fill}
      />
    </Svg>
  );
}
