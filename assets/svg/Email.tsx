import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      fill={props.fill ?? '#003a76'}
      viewBox="0 0 433.664 433.664"
      {...props}>
      <Path d="M229.376 271.616c-4.096 2.56-8.704 3.584-12.8 3.584s-8.704-1.024-12.8-3.584L0 147.2v165.376c0 35.328 28.672 64 64 64h305.664c35.328 0 64-28.672 64-64V147.2L229.376 271.616z" />
      <Path d="M369.664 57.088H64c-30.208 0-55.808 21.504-61.952 50.176l215.04 131.072 214.528-131.072c-6.144-28.672-31.744-50.176-61.952-50.176z" />
    </Svg>
  );
}
