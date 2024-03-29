import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M452 68H60C26.916 68 0 94.916 0 128v256c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60V128c0-33.084-26.916-60-60-60zm20 316c0 11.028-8.972 20-20 20H60c-11.028 0-20-8.972-20-20V128c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20v256z" />
      <Path d="M468.604 92.937L256 251.074 43.396 92.937l-23.874 32.095L256 300.926l236.478-175.894z" />
    </Svg>
  );
}
