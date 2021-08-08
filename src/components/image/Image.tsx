import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {IImage} from '../../types/interfaces';
const View = styled.View`
  ${(props: any) => props.style}
`;
const Image: FC<IImage> = ({source, style, resizeMode = 'contain'}) => {
  return (
    <View style={style}>
      <FastImage
        source={source}
        resizeMode={resizeMode}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default Image;
