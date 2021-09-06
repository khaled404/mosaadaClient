import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      fill={props.fill ?? '#003a76'}
      width={25}
      height={25}
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M437.016 74.984c-99.979-99.979-262.075-99.979-362.033.002-99.978 99.978-99.978 262.073.004 362.031 99.954 99.978 262.05 99.978 362.029-.002 99.979-99.956 99.979-262.051 0-362.031zm-30.168 331.86c-83.318 83.318-218.396 83.318-301.691.004-83.318-83.299-83.318-218.377-.002-301.693 83.297-83.317 218.375-83.317 301.691 0s83.316 218.394.002 301.689z" />
      <Path d="M255.996 85.338c-11.782 0-21.333 9.551-21.333 21.333v213.333c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333V106.671c0-11.782-9.551-21.333-21.333-21.333zM255.996 384.004c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c11.776 0 21.333-9.557 21.333-21.333s-9.557-21.333-21.333-21.333z" />
    </Svg>
  );
}