import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
import {sPixel} from '../../../constants/pixel';
import {useAuth} from '../../../context/auth';
import {EImages} from '../../../types/enums';
import NextArrowButton from '../../user/components/NextArrowButton';
import {HeaderContainer, UserContainer, UserName} from '../style';

const Header: FC = () => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const {user} = useAuth();
  return (
    <HeaderContainer>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={css`
            width: ${sPixel(85)};
            height: ${sPixel(86)};
          `}
          source={EImages.Logo}
        />
      </View>

      <UserContainer onPress={() => navigate('Profile')}>
        <UserName>
          {t('Welcome')} {user?.name.slice(0, user?.name.search(' '))}
        </UserName>

        <Image
          style={css`
            width: ${sPixel(86)};
            height: ${sPixel(86)};
            border-radius: 50px;
            overflow: hidden;
            border: ${sPixel(3)} solid ${({theme}) => theme.colors.grayMain};
          `}
          url={user?.avatar}
          resizeMode="cover"
        />
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
