import React, {useRef, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Container} from '../../globalStyle';
import Header from '../../components/header/Header';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import AddressBox from './components/AddressBox';
import AddAddress from './components/AddAddress';
import {useQuery} from 'react-query';
import {GetAddressHandler} from './api';
import {theme} from '../../constants/theme';
import {Modalize} from 'react-native-modalize';
import ShowEditAddress from './components/ShowEditAddress';
import {useNavigation} from '@react-navigation/core';
const Address = () => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const {isLoading, data} = useQuery('GetAddressHandler', GetAddressHandler);
  const showEditAddress = useRef<Modalize>(null);
  const [address, setAddress] = useState({});
  return (
    <>
      <Container white>
        <Header title={t('Address')} />

        <AddressScroll
          data={data?.data}
          renderItem={({item}) => (
            <AddressBox
              {...item}
              onPress={() => {
                setAddress({});
                showEditAddress.current?.open();
                setAddress(item);
              }}
            />
          )}
          keyExtractor={(_, i) => i.toString()}
          ListFooterComponent={() => (
            <AddAddress
              onPress={() => {
                navigate('AddAddress');
              }}
            />
          )}
          ListEmptyComponent={() =>
            isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.main} />
            ) : (
              <></>
            )
          }
        />
      </Container>

      <Modalize
        ref={showEditAddress}
        snapPoint={theme.screenDimensions.height / 1.8}
        overlayStyle={{
          paddingTop: theme.statusBarHeight + 30,
        }}>
        <ShowEditAddress {...address} />
      </Modalize>
    </>
  );
};

export default Address;
export const AddressScroll = styled.FlatList.attrs((props: any) => ({
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: props.theme.appPaddingHorizontal,
  },
}))``;
