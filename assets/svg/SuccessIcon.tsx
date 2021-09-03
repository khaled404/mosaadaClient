import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={13.085} height={13.085} {...props}>
      <Path data-name="Path 1403" d="M0 0h13.085v13.085H0z" fill="none" />
      <Path
        data-name="Path 1404"
        d="M6.542 1.09a5.452 5.452 0 105.448 5.452A5.454 5.454 0 006.542 1.09zm0 9.814a4.362 4.362 0 114.362-4.362 4.367 4.367 0 01-4.362 4.362zm2.5-6.772l-3.59 3.593L4.04 6.319l-.769.771 2.181 2.181 4.362-4.362z"
        fill="#27ae60"
      />
    </Svg>
  );
}
