import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default (props?: SvgProps) => (
  <Svg width={20.388} height={19.389} viewBox="0 0 20.388 19.389" {...props}>
    <Path
      data-name="Shape"
      d="M10.194 0l3.15 6.381 7.044 1.03-5.1 4.964 1.2 7.013-6.3-3.313-6.3 3.313 1.2-7.013L0 7.411l7.044-1.03L10.194 0z"
      fill={props?.fill ? props?.fill : '#dae1e9'}
    />
  </Svg>
);
