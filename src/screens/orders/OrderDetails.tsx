import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';
import Header from '../../components/header/Header';

import {Container, Content} from '../../globalStyle';
import {showOrderHandler} from './api';

const OrderDetails = () => {
  const {t} = useTranslation();

  const {data, isLoading, isFetching, refetch} = useQuery(
    'showOrderHandler',
    showOrderHandler,
  );

  return (
    <Container white>
      <Header title={t('Order Details')} />
      <Content></Content>
    </Container>
  );
};

export default OrderDetails;
