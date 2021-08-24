import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
import {sPixel} from '../../../constants/pixel';
import {EImages} from '../../../types/enums';
import {HeaderContainer, UserContainer, UserName} from '../style';

const Header: FC = () => {
  const {t} = useTranslation();
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
        <UserName>{t('Welcome')} khaled</UserName>
      </View>

      <UserContainer>
        <Image
          style={css`
            width: ${sPixel(86)};
            height: ${sPixel(86)};
            border-radius: 50px;
            border: ${sPixel(3)} solid ${({theme}) => theme.colors.grayMain};
          `}
          source={EImages.avatar}
          resizeMode="cover"
        />
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
