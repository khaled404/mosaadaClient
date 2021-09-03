import React from 'react';
import styled, {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
import {EImages} from '../../../types/enums';

const NotificationBox = () => {
  return (
    <Container>
      <Image source={EImages.logoSm} style={image} />
      <Text>
        عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم
        ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص
        التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
        الانتقادات للتصميم الاساسي
      </Text>
    </Container>
  );
};

export default NotificationBox;

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${({theme}) => theme.pixel(20)};
  align-items: center;
  background-color: #fff;
  border: solid 1px rgba(112, 112, 112, 0.08);
  padding: ${({theme}) => theme.pixel(16)} ${({theme}) => theme.pixel(18)};
  border-radius: 20px;
  overflow: hidden;
`;

const image = css`
  width: ${({theme}) => theme.pixel(140)};
  height: ${({theme}) => theme.pixel(140)};
  padding: 20px;
  background-color: #f7f7fa;
  border-radius: 20px;
`;

const Text = styled.Text`
  width: 80%;

  padding: 0 ${({theme}) => theme.pixel(20)};
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
`;
