import React, {FC} from 'react';

import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import styled, {css} from 'styled-components/native';
import CalendarSm from '../../../../assets/svg/CalendarSm';
import ClockSm from '../../../../assets/svg/ClockSm';
import SuccessIcon from '../../../../assets/svg/SuccessIcon';
import MapPin from '../../../../assets/svg/MapPin';
import Image from '../../../components/image/Image';
import {theme} from '../../../constants/theme';
import {EImages} from '../../../types/enums';
import {pixel} from '../../../constants/pixel';
import InProgress from '../../../../assets/svg/InProgress';
import Search from '../../../../assets/svg/Search';
import {returnStatus} from '../../../constants/helpers';
import Close from '../../../../assets/svg/Close';
import {useMutation} from 'react-query';
import {closeOrderHandler} from '../api';
import {showMessage} from 'react-native-flash-message';
import Button from '../../../components/button/Button';
import {useNavigation} from '@react-navigation/native';

interface IOrdersBox {
  item: {
    id: number;
    total: number;
    provider: Array<any>;
    status: string;
    order_date: string;
    order_time: string;
    services: {
      title: string;
      image: string;
    };
    tenders: {
      consent: Array<any>;
      offers: Array<any>;
    };
  };
}

const OrdersBox: FC<IOrdersBox> = ({item}) => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const closeMutate = useMutation(closeOrderHandler, {
    onError: (error: any) => {
      console.log(error?.response, 'Error');
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Order closed successfully'),
        type: 'success',
      });
    },
  });
  const Status = () => {
    const Icon = returnStatus(
      item.status,
      InProgress,
      Search,
      Close,
      SuccessIcon,
    );
    const color = returnStatus(
      item.status,
      theme.colors.yellow,
      theme.colors.grayMain,
      theme.colors.warning,
      theme.colors.success,
    );

    return (
      <StatusText>
        <Icon />
        <SuccessText style={{color}}>
          {t(
            returnStatus(
              item.status,
              'In Progress',
              'Searching',
              'Closed',
              'Finished Service',
            ),
          )}
        </SuccessText>
      </StatusText>
    );
  };
  return (
    <Container
      onPress={() => {
        navigate('OrderDetails', {id: item.id});
      }}>
      <Row>
        <Left>
          <ServicesBox>
            <Image
              url={item.services.image}
              style={css`
                width: ${({theme}) => theme.pixel(140)};
                height: ${({theme}) => theme.pixel(140)};
              `}
            />
            <View style={{paddingLeft: 10}}>
              <ServicesText>{t('Service')}</ServicesText>
              <ServicesName>{item.services.title}</ServicesName>
            </View>
          </ServicesBox>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <DateContainer>
              <CalendarSm fill={theme.colors.main} />
              <DateText>الأحد 8 مايو</DateText>
            </DateContainer>
            <DateContainer>
              <ClockSm fill={theme.colors.main} />
              <DateText>10:30 م</DateText>
            </DateContainer>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <MapPin
              width={pixel(30)}
              height={pixel(30)}
              fill={theme.colors.main}
            />
            <MapText>{t('Starting Location')}</MapText>
            <LocationText>الموقع الحالي</LocationText>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <MapPin
              width={pixel(30)}
              height={pixel(30)}
              fill={theme.colors.main}
            />
            <MapText>{t('Arrival Location')}</MapText>
            <LocationText>المنزل شارع الشفعى - ميت غمر</LocationText>
          </View>
        </Left>
        <Right>
          {Status()}
          <Amount>{item.total}</Amount>
          <Currency>{t('EGP')}</Currency>
        </Right>
      </Row>
      {/* {returnStatus(
        item.status,
        <Button
          title="Cancel"
          style={css(({theme}) => ({
            marginTop: theme.pixel(25),
            backgroundColor: theme.colors.main,
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }))}
          isLoading={closeMutate.isLoading}
          onPress={() => {
            closeMutate.mutate(item.id);
          }}
        />,
        <Button
          title="Cancel"
          style={css(({theme}) => ({
            marginTop: theme.pixel(25),
            backgroundColor: theme.colors.main,
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }))}
          isLoading={closeMutate.isLoading}
          onPress={() => {
            closeMutate.mutate(item.id);
          }}
        />,
        <></>,
        <></>,
      )} */}
    </Container>
  );
};

{
  /* <Button
title="Close"
isLoading={closeMutate.isLoading}
onPress={() => {
  closeMutate.mutate(item.id);
}}
/> */
}

export default OrdersBox;

const Container = styled.TouchableOpacity`
  background-color: #fff;
  border: solid 1px rgba(112, 112, 112, 0.08);
  padding: ${({theme}) => theme.pixel(25)} 0 ${({theme}) => theme.pixel(20)}
    ${({theme}) => theme.pixel(25)};
  border-radius: 20px;
  margin-bottom: ${({theme}) => theme.pixel(40)};
`;

const Row = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
const Left = styled.View`
  flex: 0.6;
  align-items: flex-start;
`;
const Right = styled.View`
  flex: 0.3;
  flex-direction: row;
  align-items: flex-end;
`;
const Amount = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(50),
  color: theme.colors.main,
}));
const Currency = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(30),
  color: theme.colors.main,
}));
const ServicesBox = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
const ServicesText = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.regular,
  color: theme.colors.main,
  fontSize: theme.pixel(23),
}));
const ServicesName = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.main,
  fontSize: theme.pixel(27),
  paddingBottom: theme.pixel(57),
}));
const DateContainer = styled.View`
  flex: 0.5;
  align-items: center;
  flex-direction: row;
`;
const DateText = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.grayMain,
  fontSize: theme.pixel(17),
  paddingEnd: 10,
}));
const MapText = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.main,
  fontSize: theme.pixel(17),
  paddingEnd: 10,
}));
const LocationText = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.regular,
  color: theme.colors.text,
  fontSize: theme.pixel(17),
  paddingEnd: 10,
}));
const StatusText = styled.View`
  position: absolute;
  top: ${({theme}) => theme.pixel(-65)};
  right: ${({theme}) => theme.pixel(25)};
  flex-direction: row;
  align-items: center;
`;
const SuccessText = styled.Text(({theme}) => ({
  color: theme.colors.success,
  paddingEnd: theme.pixel(15),
  fontFamily: theme.fonts.regular,
  fontSize: theme.pixel(24),
}));
