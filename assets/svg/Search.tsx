import * as React from 'react';
import Svg, {SvgProps, G, Path, Circle} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={13.085} height={13.085} viewBox="0 0 31.414 31.414" {...props}>
      <G
        transform="translate(1 1)"
        fill="none"
        stroke="#487AAE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}>
        <Circle cx={12.083} cy={12.083} r={12.083} />
        <Path d="M29 29l-8.378-8.378" />
      </G>
    </Svg>
  );
}
