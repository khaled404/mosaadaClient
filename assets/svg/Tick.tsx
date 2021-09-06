import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      fill={props.fill ?? '#003a76'}
      width={25}
      height={25}
      viewBox="0 0 489 489"
      {...props}>
      <Path d="M0 437.825v-345.6c0-13.5 10.9-24.4 24.4-24.4h306.4l-48.7 48.7H48.7v296.9h296.9v-126.1l48.7-48.7v199.2c0 13.4-10.9 24.4-24.4 24.4H24.4c-13.5 0-24.4-10.9-24.4-24.4zm212.1-187l-52-52c-14.6-14.6-38.3-14.6-52.9 0-7.1 7.1-11 16.5-11 26.5s3.9 19.4 11 26.4l78.4 78.4c14.6 14.6 38.3 14.6 52.9 0L478 90.625c7.1-7.1 11-16.5 11-26.4 0-10-3.9-19.4-11-26.5-14.6-14.6-38.3-14.6-52.9 0l-213 213.1z" />
    </Svg>
  );
}
