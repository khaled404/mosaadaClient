import * as React from 'react';
import Svg, {SvgProps, Defs, G, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={24} height={24} {...props}>
      <Defs></Defs>
      <G
        id="prefix__Group_1336"
        data-name="Group 1336"
        transform="translate(-329 -379)">
        <G
          id="prefix__calendar_today_black_24dp"
          transform="translate(329 379)">
          <Path data-name="Path 1088" d="M0 0h24v24H0z" fill="none" />
          <Path
            data-name="Path 1089"
            fill={props.fill}
            d="M20 3h-1V2a1 1 0 00-2 0v1H7V2a1 1 0 00-2 0v1H4a2.006 2.006 0 00-2 2v16a2.006 2.006 0 002 2h16a2.006 2.006 0 002-2V5a2.006 2.006 0 00-2-2zm-1 18H5a1 1 0 01-1-1V8h16v12a1 1 0 01-1 1z"
          />
        </G>
        <Path
          data-name="Rectangle 174"
          fill={props.fill}
          transform="translate(346 389)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 183"
          fill={props.fill}
          transform="translate(346 393)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 175"
          fill={props.fill}
          transform="translate(343 389)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 182"
          fill={props.fill}
          transform="translate(343 393)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 176"
          fill={props.fill}
          transform="translate(340 389)"
          d="M0 0h2v2H0z"
        />
        <Path
          id="prefix__Rectangle_181"
          data-name="Rectangle 181"
          fill={props.fill}
          transform="translate(340 393)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 177"
          fill={props.fill}
          transform="translate(337 389)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 180"
          fill={props.fill}
          transform="translate(337 393)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 178"
          fill={props.fill}
          transform="translate(334 389)"
          d="M0 0h2v2H0z"
        />
        <Path
          data-name="Rectangle 179"
          fill={props.fill}
          transform="translate(334 393)"
          d="M0 0h2v2H0z"
        />
      </G>
    </Svg>
  );
}
