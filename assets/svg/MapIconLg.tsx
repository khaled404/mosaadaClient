import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={16} height={20} {...props}>
      <Path
        data-name="Path 1091"
        d="M8 10a2 2 0 112-2 2.006 2.006 0 01-2 2zm6-1.8a6 6 0 10-12 0c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM8 0a7.955 7.955 0 018 8.2q0 4.98-8 11.8Q.005 13.175 0 8.2A7.955 7.955 0 018 0z"
        fill="#003a76"
      />
    </Svg>
  );
}
