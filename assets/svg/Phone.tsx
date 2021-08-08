import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Phone(props: SvgProps) {
  return (
    <Svg width={19.2} height={19.2} viewBox="0 0 19.2 19.2">
      <Path fill="none" d="M0 0h19.2v19.2H0z" />
      <Path
        fill={props.fill ?? '#003a76'}
        d="M5.232 4a9.85 9.85 0 00.36 2.072l-.96.96A11.86 11.86 0 014.024 4h1.208m7.888 9.616a10.2 10.2 0 002.08.36v1.192a12.341 12.341 0 01-3.04-.6l.96-.952M6 2.4H3.2a.8.8 0 00-.8.8A13.6 13.6 0 0016 16.8a.8.8 0 00.8-.8v-2.792a.8.8 0 00-.8-.8 9.126 9.126 0 01-2.856-.456.672.672 0 00-.248-.04.819.819 0 00-.568.232l-1.76 1.76A12.119 12.119 0 015.3 8.632l1.76-1.76a.8.8 0 00.2-.816A9.088 9.088 0 016.8 3.2a.8.8 0 00-.8-.8z"
      />
    </Svg>
  );
}

export default Phone;
