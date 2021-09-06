import * as React from 'react';
import {I18nManager} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  const {isRTL} = I18nManager;
  return (
    <Svg
      width={15}
      height={15}
      {...props}
      style={{
        transform: [{rotate: isRTL ? '0deg' : '180deg'}],
      }}>
      <Path
        data-name="Path 1092"
        d="M0 0h15v15H0z"
        fill="none"
        opacity={0.87}
      />
      <Path
        data-name="Path 1093"
        d="M10.387 1.869a.781.781 0 00-1.106 0L4.087 7.063a.622.622 0 000 .881l5.194 5.194a.782.782 0 001.106-1.106L5.862 7.5l4.531-4.531a.779.779 0 00-.006-1.1z"
        fill="#003a76"
      />
    </Svg>
  );
}
