import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import Header from '../../components/header/Header';
import {Container, Content} from '../../globalStyle';

const Policy = () => {
  const {t} = useTranslation();
  return (
    <Container white>
      <Header title={t('Usage policy')} />
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

export default Policy;

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
