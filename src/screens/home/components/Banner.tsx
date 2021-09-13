import React, {FC} from 'react';
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
import Image from '../../../components/image/Image';
import {pixel} from '../../../constants/pixel';
import {css} from '../../../constants/styled';
import {theme} from '../../../constants/theme';
import {BannerContainer} from '../style';
import Carousel from 'react-native-snap-carousel';

interface IBanner {
  isLoading: boolean;
  data: Array<any>;
}
const Banner: FC<IBanner> = ({isLoading, data}) => {
  return (
    <BannerContainer>
      <View
        style={{
          top: pixel(-130),
          alignItems: 'center',
        }}>
        {isLoading ? (
          <ActivityIndicator size="large" color={theme.colors.main} />
        ) : (
          <Carousel
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Image
                  url={item?.image}
                  style={css`
                    width: 100%;
                    height: 100%;
                    border-radius: 13px;
                    overflow: hidden;
                  `}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
            sliderWidth={
              theme.screenDimensions.width - theme.appPaddingHorizontal
            }
            itemWidth={
              theme.screenDimensions.width - theme.appPaddingHorizontal
            }
            autoplay={true}
            loop
            autoplayDelay={400}
          />
        )}
      </View>
    </BannerContainer>
  );
};

export default Banner;
