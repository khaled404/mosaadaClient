import React from 'react';
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

const OrdersBox = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Left>
        <ServicesBox>
          <Image
            source={EImages.services2}
            style={css`
              width: ${({theme}) => theme.pixel(140)};
              height: ${({theme}) => theme.pixel(140)};
            `}
          />
          <View style={{paddingLeft: 10}}>
            <ServicesText>{t('Service')}</ServicesText>
            <ServicesName>غسيل</ServicesName>
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
          <MapPin fill={theme.colors.main} />
          <MapText>{t('Starting Location')}</MapText>
          <LocationText>الموقع الحالي</LocationText>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
          <MapPin fill={theme.colors.main} />
          <MapText>{t('Arrival Location')}</MapText>
          <LocationText>المنزل شارع الشفعى - ميت غمر</LocationText>
        </View>
      </Left>
      <Right>
        <StatusText>
          <SuccessIcon />
          <SuccessText>{t('Finished Service')}</SuccessText>
        </StatusText>

        <Amount>50</Amount>
        <Currency>{t('EGP')}</Currency>
      </Right>
    </Container>
  );
};

export default OrdersBox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${({theme}) => theme.pixel(40)};
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: solid 1px rgba(112, 112, 112, 0.08);
  padding: ${({theme}) => theme.pixel(25)} 0 ${({theme}) => theme.pixel(20)}
    ${({theme}) => theme.pixel(25)};
  border-radius: 20px;
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
  fontSize: theme.pixel(85),
  color: theme.colors.main,
}));
const Currency = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(35),
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
