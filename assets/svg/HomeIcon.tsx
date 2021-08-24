import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={22.48} height={20.593} {...props}>
      <G data-name="home_black_24dp (1)">
        <Path
          data-name="Path 1081"
          d="M9.019 18.482v-5.554h4.44v5.554a1.114 1.114 0 001.111 1.111h3.332a1.114 1.114 0 001.111-1.111v-7.775h1.888a.551.551 0 00.367-.966l-9.286-8.365a1.119 1.119 0 00-1.488 0L1.208 9.74a.553.553 0 00.367.966h1.887v7.775a1.114 1.114 0 001.111 1.111h3.333a1.114 1.114 0 001.113-1.11z"
          fill="none"
          stroke={props.fill}
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}
