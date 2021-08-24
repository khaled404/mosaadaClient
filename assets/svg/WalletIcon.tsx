import * as React from 'react';
import Svg, {SvgProps, Defs, G, Path, Circle} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg width={21.146} height={20.033} {...props}>
      <G
        id="prefix__Group_1335"
        data-name="Group 1335"
        transform="translate(-271.339 -784.339)">
        <Path
          id="prefix__Path_1077"
          data-name="Path 1077"
          fill={props.fill}
          d="M23.033 7.763V5.226A2.232 2.232 0 0020.807 3H5.226A2.225 2.225 0 003 5.226v15.581a2.225 2.225 0 002.226 2.226h15.581a2.232 2.232 0 002.226-2.226v-2.538a2.227 2.227 0 001.113-1.914V9.678a2.227 2.227 0 00-1.113-1.915zM21.92 9.678v6.678h-7.79V9.678zM5.226 20.807V5.226h15.581v2.226h-6.678A2.232 2.232 0 0011.9 9.678v6.678a2.232 2.232 0 002.226 2.226h6.678v2.226z"
          transform="translate(268.339 781.339)"
        />
        <Circle
          id="prefix__Ellipse_165"
          data-name="Ellipse 165"
          fill={props.fill}
          cx={1.669}
          cy={1.669}
          r={1.669}
          transform="translate(284.137 792.686)"
        />
      </G>
    </Svg>
  );
}
