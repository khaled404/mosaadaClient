import React from 'react';
import {View} from 'react-native';
import {css} from 'styled-components/native';
import {EImages} from '../../types/enums';
import Image from '../image/Image';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        style={css(({theme}) => ({
          width: theme.screenDimensions.width / 1.5 + 'px',
          height: theme.screenDimensions.height / 1.5 + 'px',
        }))}
        source={EImages.loading}
      />
    </View>
  );
}
