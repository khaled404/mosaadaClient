import * as React from 'react';
import Svg, {SvgProps, Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function UserId(props: SvgProps) {
  return (
    <Svg
      id="prefix__id-card"
      width={19.2}
      height={14.4}
      viewBox="0 0 19.2 14.4"
      {...props}>
      <Defs></Defs>
      <G id="prefix__Group_13">
        <Path
          id="prefix__Path_31"
          d="M17.2 17.4H2a2 2 0 01-2-2V5a2 2 0 012-2h15.2a2 2 0 012 2v10.4a2 2 0 01-2 2zM2 3.8A1.2 1.2 0 00.8 5v10.4A1.2 1.2 0 002 16.6h15.2a1.2 1.2 0 001.2-1.2V5a1.2 1.2 0 00-1.2-1.2z"
          transform="translate(0 -3)"
        />
      </G>
      <G id="prefix__Group_14" transform="translate(4 3.2)">
        <Path
          id="prefix__Path_32"
          d="M7 11a2 2 0 112-2 2 2 0 01-2 2zm0-3.2A1.2 1.2 0 108.2 9 1.2 1.2 0 007 7.8z"
          transform="translate(-5 -7)"
        />
      </G>
      <G id="prefix__Group_15" transform="translate(2.4 8)">
        <Path
          id="prefix__Path_33"
          d="M9.8 16.2a.4.4 0 01-.4-.4V15a1.2 1.2 0 00-1.2-1.2H5A1.2 1.2 0 003.8 15v.8a.4.4 0 11-.8 0V15a2 2 0 012-2h3.2a2 2 0 012 2v.8a.4.4 0 01-.4.4z"
          transform="translate(-3 -13)"
        />
      </G>
      <G id="prefix__Group_16" transform="translate(11.2 4)">
        <Path
          id="prefix__Path_34"
          d="M19.2 8.8h-4.8a.4.4 0 110-.8h4.8a.4.4 0 110 .8z"
          transform="translate(-14 -8)"
        />
      </G>
      <G id="prefix__Group_17" transform="translate(11.2 7.2)">
        <Path
          id="prefix__Path_35"
          d="M19.2 12.8h-4.8a.4.4 0 110-.8h4.8a.4.4 0 110 .8z"
          transform="translate(-14 -12)"
        />
      </G>
      <G id="prefix__Group_18" transform="translate(11.2 10.4)">
        <Path
          id="prefix__Path_36"
          d="M19.2 16.8h-4.8a.4.4 0 110-.8h4.8a.4.4 0 110 .8z"
          transform="translate(-14 -16)"
        />
      </G>
    </Svg>
  );
}

export default UserId;
