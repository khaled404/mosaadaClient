import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      fill={props.fill ?? '#003a76'}
      width={25}
      height={25}
      viewBox="0 0 330 330"
      {...props}>
      <Path d="M245.608 84.392c-5.856-5.857-15.355-5.858-21.213-.001-5.857 5.858-5.858 15.355 0 21.213L268.789 150H85.002c-8.284 0-15 6.716-15 15s6.716 15 15 15h183.785l-44.392 44.392c-5.858 5.858-5.858 15.355 0 21.213a14.953 14.953 0 0010.607 4.393 14.95 14.95 0 0010.606-4.393l69.998-69.998c5.858-5.857 5.858-15.355 0-21.213l-69.998-70.002z" />
      <Path d="M155 330c8.284 0 15-6.716 15-15s-6.716-15-15-15H40V30h115c8.284 0 15-6.716 15-15s-6.716-15-15-15H25c-8.284 0-15 6.716-15 15v300c0 8.284 6.716 15 15 15h130z" />
    </Svg>
  );
}