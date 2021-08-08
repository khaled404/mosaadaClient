import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowLeft(props: SvgProps) {
  return (
    <Svg width={31.408} height={31.408} viewBox="0 0 31.408 31.408" {...props}>
      <Path fill="none" d="M0 0h31.408v31.408H0z" />
      <Path
        fill={props.fill ?? '#fff'}
        d="M8.153 26.474l2.316 2.316 13.087-13.086L10.469 2.617 8.153 4.933l10.77 10.771z"
      />
    </Svg>
  );
}

export default ArrowLeft;
