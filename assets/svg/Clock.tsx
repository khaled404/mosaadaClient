import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={24} height={24} {...props}>
      <Path data-name="Path 1086" d="M0 0h24v24H0z" fill="none" />
      <Path
        data-name="Path 1087"
        d="M11.99 2A10 10 0 1022 12 10 10 0 0011.99 2zM12 20a8 8 0 118-8 8 8 0 01-8 8zm-.22-13h-.06a.717.717 0 00-.72.72v4.72a.99.99 0 00.49.86l4.15 2.49a.715.715 0 10.73-1.23l-3.87-2.3V7.72a.717.717 0 00-.72-.72z"
        fill={props.fill}
      />
    </Svg>
  );
}
