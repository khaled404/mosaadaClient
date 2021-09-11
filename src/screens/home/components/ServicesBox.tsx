import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styled, {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
import {sPixel} from '../../../constants/pixel';
import {ServicesContainer, ServicesText, ServicesName} from '../style';

const ServicesBox: FC<{isRow?: boolean; data: any}> = ({isRow, data}) => {
  const {t} = useTranslation();
  const {navigate}: any = useNavigation();
  return (
    <>
      <ServicesContainer
        isRow={isRow}
        onPress={() => {
          navigate('Services', {servicesId: data.id});
        }}>
        <Image
          url={data.image}
          style={css`
            width: ${sPixel(150)};
            height: ${sPixel(100)};
          `}
        />

        <View>
          <ServicesText>{t('Service')}</ServicesText>
          <ServicesName>{data.title}</ServicesName>
        </View>
      </ServicesContainer>
    </>
  );
};

export default ServicesBox;
const View = styled.View`
  margin-${({theme}) => theme.right}: ${sPixel(27)};
`;
