import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function User(props: SvgProps) {
  return (
    <Svg width={19.328} height={19.328} viewBox="0 0 19.328 19.328">
      <Path fill="none" d="M0 0h19.328v19.328H0z" />
      <Path
        fill={props.fill ?? '#003a76'}
        d="M9.664 4.751a1.691 1.691 0 11-1.692 1.691 1.691 1.691 0 011.692-1.691m0 7.248c2.392 0 4.912 1.176 4.912 1.691v.886H4.751v-.886c0-.515 2.521-1.691 4.912-1.691m0-8.778a3.221 3.221 0 103.221 3.221 3.22 3.22 0 00-3.22-3.221zm0 7.248c-2.15 0-6.442 1.079-6.442 3.221v2.416h12.885V13.69c0-2.142-4.292-3.221-6.442-3.221z"
      />
    </Svg>
  );
}

export default User;
