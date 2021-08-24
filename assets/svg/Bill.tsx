import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={20.392} height={24.853} {...props}>
      <Path
        data-name="Path 1083"
        d="M10.2 24.853a2.557 2.557 0 002.545-2.553h-5.1a2.557 2.557 0 002.555 2.553zm7.647-7.647v-6.373c0-3.913-2.077-7.188-5.735-8.055v-.866a1.912 1.912 0 00-3.824 0v.867c-3.645.867-5.735 4.129-5.735 8.055v6.373L0 19.755v1.275h20.392v-1.275zm-2.553 1.274H5.1v-7.647c0-3.161 1.925-5.735 5.1-5.735s5.1 2.575 5.1 5.735z"
        fill={props.fill}
      />
    </Svg>
  );
}
