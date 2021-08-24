import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import styled, {css} from 'styled-components/native';
import Calendar from '../../../../assets/svg/Calendar';
import Clock from '../../../../assets/svg/Clock';
import Image from '../../../components/image/Image';
import {pixel} from '../../../constants/pixel';
import {theme} from '../../../constants/theme';
import {EImages} from '../../../types/enums';

const RecordBox = () => {
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
            <Calendar fill={theme.colors.main} />
            <DateText>الأحد 8 مايو</DateText>
          </DateContainer>
          <DateContainer>
            <Clock fill={theme.colors.main} />
            <DateText>10:30 م</DateText>
          </DateContainer>
        </View>
      </Left>
      <Right>
        <Amount>50</Amount>
        <Currency>{t('EGP')}</Currency>
      </Right>
    </Container>
  );
};

export default RecordBox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${({theme}) => theme.pixel(40)};
  align-items: center;
  justify-content: space-between;
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
  color: theme.colors.main,
  fontSize: theme.pixel(17),
  paddingEnd: 10,
}));
