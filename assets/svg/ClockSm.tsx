import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={15.22} height={15.22} {...props}>
      <Path data-name="Path 1086" d="M0 0h15.22v15.22H0z" fill="none" />
      <Path
        data-name="Path 1087"
        d="M7.603 1.268a6.342 6.342 0 106.348 6.342 6.339 6.339 0 00-6.348-6.342zm.006 11.415a5.073 5.073 0 115.073-5.073 5.072 5.072 0 01-5.072 5.073zm-.141-8.244h-.036a.455.455 0 00-.457.457v2.993a.628.628 0 00.311.545l2.632 1.579a.454.454 0 10.463-.78L7.927 7.775v-2.88a.455.455 0 00-.459-.456z"
        fill={props.fill}
      />
    </Svg>
  );
}
