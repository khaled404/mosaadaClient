import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function Lock(props: SvgProps) {
  return (
    <Svg width={13.069} height={17.152} viewBox="0 0 13.069 17.152" {...props}>
      <Path
        fill={props.fill ?? '#003a76'}
        d="M11.435 5.717h-.817V4.084a4.084 4.084 0 00-8.168 0v1.633h-.816A1.638 1.638 0 000 7.351v8.168a1.638 1.638 0 001.634 1.634h9.8a1.638 1.638 0 001.634-1.634V7.351a1.638 1.638 0 00-1.633-1.634zM4.084 4.084a2.45 2.45 0 014.9 0v1.633h-4.9zm7.351 11.435h-9.8V7.351h9.8zm-4.9-2.45A1.634 1.634 0 104.9 11.435a1.638 1.638 0 001.634 1.634z"
      />
    </Svg>
  );
}

export default Lock;
