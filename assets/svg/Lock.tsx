import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Lock(props: SvgProps) {
  return (
    <Svg viewBox="0 0 330 330" fill={props.fill ?? '#003a76'} {...props}>
      <Path
        fill={props.fill ?? '#003a76'}
        d="M250 137.621V84.999C250 38.131 211.869 0 165 0S80.001 38.131 80.001 84.999v52.62C61.373 158.064 50 185.229 50 215c0 63.411 51.589 115 115 115s115-51.589 115-115c0-29.771-11.373-56.936-30-77.379zM165 30c30.327 0 55 24.673 55 54.999v29.029C203.652 105.088 184.91 100 165 100c-19.909 0-38.651 5.088-54.999 14.028V84.999C110.001 54.673 134.673 30 165 30zm0 270c-46.869 0-85-38.131-85-85s38.131-85 85-85 85 38.131 85 85-38.131 85-85 85z"
      />
      <Path
        fill={props.fill ?? '#003a76'}
        d="M165 175c-13.785 0-25 11.215-25 25 0 8.162 3.932 15.421 10 19.986V240c0 8.284 6.716 15 15 15s15-6.716 15-15v-20.014c6.068-4.565 10-11.825 10-19.986 0-13.785-11.215-25-25-25z"
      />
    </Svg>
  );
}

export default Lock;
