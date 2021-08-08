import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function AddIcon(props: SvgProps) {
  return (
    <Svg width={21.801} height={21.801} viewBox="0 0 21.801 21.801" {...props}>
      <Path fill="none" d="M0 0h21.8v21.8H0z" />
      <Path
        fill={props.fill ?? '#003a76'}
        d="M11.809 6.359H9.992v3.633H6.359v1.817h3.633v3.633h1.817v-3.633h3.633V9.992h-3.633zm-.908-4.542a9.084 9.084 0 109.084 9.084 9.087 9.087 0 00-9.084-9.084zm0 16.351a7.267 7.267 0 117.267-7.267 7.277 7.277 0 01-7.267 7.267z"
      />
    </Svg>
  );
}

export default AddIcon;
