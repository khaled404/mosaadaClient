import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import AddIcon from '../../../../assets/svg/AddIcon';
const ServiceLocationBox = () => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  return (
    <Container>
      <Title>{t('Choose / Add Address')}</Title>
      <TouchableOpacity
        onPress={() => {
          navigate('AddAddress');
        }}>
        <AddIcon width={25} height={25} />
      </TouchableOpacity>
    </Container>
  );
};

export default ServiceLocationBox;

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${({theme}) => theme.pixel(35)}
    ${({theme}) => theme.appPaddingHorizontal}px;
`;

const Title = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.bold,
}));
