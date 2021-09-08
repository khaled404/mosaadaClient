import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styled, {css} from 'styled-components/native';
import ChevronLeft from '../../../assets/svg/ChevronLeft';
import Image from '../../components/image/Image';
import {sPixel} from '../../constants/pixel';
import {Container, Content} from '../../globalStyle';
import {EImages} from '../../types/enums';

const Header: FC<{title: string}> = ({title}) => {
  const {goBack} = useNavigation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Right></Right>
        <HeaderTitle>{title}</HeaderTitle>
        <Left onPress={goBack}>
          <ChevronLeft />
        </Left>
      </HeaderContent>
      <Image style={image} source={EImages.Logo} />
    </HeaderContainer>
  );
};

const About = () => {
  const {t} = useTranslation();
  return (
    <Container white>
      <Header title={t('About us')} />
      <Content>
        {[1, 2, 3].map(item => (
          <PolicyContainer key={item}>
            <Title>هذا النص مثال لنص يمكن ان يستبدل</Title>
            <Paragraph>
              عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من
              التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان
              وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من
              الملاحظات او الانتقادات للتصميم الاساسي
            </Paragraph>
          </PolicyContainer>
        ))}
      </Content>
    </Container>
  );
};

export default About;

const PolicyContainer = styled.View(({theme}) => ({
  marginBottom: theme.pixel(25),
}));
const Title = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(25),
  marginBottom: theme.pixel(25),
}));
const Paragraph = styled.Text(({theme}) => ({
  color: theme.colors.text,
  fontFamily: theme.fonts.regular,
  fontSize: theme.pixel(20),
}));
const HeaderContainer = styled.View`
  background-color: #f7f7fa;
  padding: ${props => props.theme.statusBarHeight + 20}px
    ${props => props.theme.appPaddingHorizontal}px ${sPixel(50)};
  border-bottom-left-radius: ${sPixel(180)};
  border-bottom-right-radius: ${sPixel(180)};
  align-items: center;
  justify-content: center;
`;
const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${sPixel(30)};
  position: relative;
`;
const Left = styled.TouchableOpacity`
  width: 25%;
  align-items: flex-end;
`;
const Right = styled.View`
  width: 25%;
  align-items: flex-start;
`;
const image = css`
  margin-top: ${sPixel(40)};
  align-self: center;
  width: ${sPixel(233)};
  height: ${sPixel(217)};
`;
