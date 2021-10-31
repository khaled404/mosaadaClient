import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={13.085} height={13.085} {...props}>
      <G data-name="Group 1354">
        <Path
          data-name="Path 1123"
          d="M6.753 1.868a4.778 4.778 0 104.11 2.357l-.879.877a3.581 3.581 0 11-5.764-.994 3.532 3.532 0 012.534-1.03z"
          fill="#ddeaf2"
        />
        <Path
          data-name="Path 1124"
          d="M5.453 11.25A4.778 4.778 0 102.092 7.91l1.075-.62a3.581 3.581 0 115.311 2.45 3.532 3.532 0 01-2.714.34z"
          fill="#ffb800"
        />
      </G>
    </Svg>
  );
}
