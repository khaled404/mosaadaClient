import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export default function (props: SvgProps) {
  return (
    <Svg
      fill={props.fill ?? '#003a76'}
      width={20}
      height={20}
      viewBox="0 0 612 612"
      {...props}>
      <Path d="M568.286 0H43.714C19.584 0 0 19.584 0 43.714v524.572C0 592.416 19.584 612 43.714 612h524.572C592.438 612 612 592.438 612 568.286V43.714C612 19.584 592.438 0 568.286 0zm0 546.429c0 12.065-9.792 21.857-21.857 21.857H65.571c-12.065 0-21.857-9.792-21.857-21.857V65.571c0-12.065 9.792-21.857 21.857-21.857h480.857c12.065 0 21.857 9.792 21.857 21.857v480.858z" />
    </Svg>
  );
}
