import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M469.333 85.333H362.666v-64C362.667 9.557 353.131 0 341.333 0H170.667c-11.797 0-21.333 9.557-21.333 21.333v64H42.667c-11.797 0-21.333 9.557-21.333 21.333S30.869 128 42.667 128H64v320c0 35.285 28.715 64 64 64h256c35.285 0 64-28.715 64-64V128h21.333c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.333-21.334zM192 42.667h128v42.667H192V42.667zM405.333 448c0 11.755-9.557 21.333-21.333 21.333H128c-11.776 0-21.333-9.579-21.333-21.333V128H405.334v320z" />
      <Path d="M192 170.667c-11.797 0-21.333 9.557-21.333 21.333v192c0 11.776 9.536 21.333 21.333 21.333s21.333-9.557 21.333-21.333V192c0-11.776-9.536-21.333-21.333-21.333zM320 170.667c-11.797 0-21.333 9.557-21.333 21.333v192c0 11.776 9.536 21.333 21.333 21.333s21.333-9.557 21.333-21.333V192c0-11.776-9.536-21.333-21.333-21.333z" />
    </Svg>
  );
}
