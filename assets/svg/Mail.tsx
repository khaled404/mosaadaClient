import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Mail(props: SvgProps) {
  return (
    <Svg width={21.16} height={21.16} viewBox="0 0 21.16 21.16">
      <Path fill="none" d="M0 0h21.16v21.16H0z" />
      <Path
        fill={props.fill ?? '#003a76'}
        d="M17.633 3.527H3.526A1.761 1.761 0 001.772 5.29l-.009 10.58a1.768 1.768 0 001.763 1.763h14.107a1.768 1.768 0 001.763-1.763V5.29a1.768 1.768 0 00-1.763-1.763zm0 12.343H3.526V7.054l7.053 4.408 7.054-4.408zM10.58 9.698L3.526 5.29h14.107z"
      />
    </Svg>
  );
}

export default Mail;
