import React from 'react';
import {View, Text} from 'react-native';
import Image from '../../../components/image/Image';
import {sPixel} from '../../../constants/pixel';
import {css} from '../../../constants/styled';
import {EImages} from '../../../types/enums';
import {BannerContainer} from '../style';

const Banner = () => {
  return (
    <BannerContainer>
      <Image
        source={EImages.banner}
        style={css`
          width: 100%;
          height: 100%;
          border-radius: 13px;
          overflow: hidden;
          top: -${sPixel(130)};
        `}
        resizeMode="cover"
      />
    </BannerContainer>
  );
};

export default Banner;
