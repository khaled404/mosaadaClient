import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styled, {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
import {sPixel} from '../../../constants/pixel';
import {EImages} from '../../../types/enums';
import {ServicesContainer, ServicesText, ServicesName} from '../style';
const View = styled.View`
  margin-start: ${sPixel(27)};
`;
const ServicesBox: FC<{isRow?: boolean}> = ({isRow}) => {
  const {t} = useTranslation();
  const {navigate}: any = useNavigation();

  return (
    <ServicesContainer isRow={isRow} onPress={() => navigate('Services')}>
      <Image
        source={EImages.services}
        style={css`
          width: ${sPixel(150)};
          height: ${sPixel(100)};
        `}
      />

      <View>
        <ServicesText>{t('Service')}</ServicesText>
        <ServicesName>{t('Winch')}</ServicesName>
      </View>
    </ServicesContainer>
  );
};

export default ServicesBox;
