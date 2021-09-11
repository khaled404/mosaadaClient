import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../globalStyle';
import Header from '../../components/header/Header';
import {useTranslation} from 'react-i18next';

const Address = () => {
  const {t} = useTranslation();
  return (
    <Container white>
      <Header title={t('Address')} />
    </Container>
  );
};

export default Address;
