import React, {FC} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Image from '../../../components/image/Image';
import {pixel, sPixel} from '../../../constants/pixel';
import {css} from '../../../constants/styled';
import {theme} from '../../../constants/theme';
import {EImages} from '../../../types/enums';
import {BannerContainer} from '../style';
interface IBanner {
  isLoading: boolean;
  data: Array<any>;
}
const Banner: FC<IBanner> = ({isLoading, data}) => {
  console.log(data);

  return (
    <BannerContainer>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={theme.colors.main}
          style={{top: -pixel(130)}}
        />
      ) : (
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
      )}
    </BannerContainer>
  );
};

export default Banner;
