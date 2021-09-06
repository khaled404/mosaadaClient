import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 515.556 515.556"
      fill={props.fill ?? '#003a76'}
      width={20}
      height={20}
      {...props}>
      <Path d="M0 274.226l176.549 176.886L515.556 112.44l-48.67-47.997-290.337 290L47.996 225.891z" />
    </Svg>
  );
}
