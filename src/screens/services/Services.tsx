import React from 'react';
import Header from '../../components/header/Header';
import {Container, Content} from '../../globalStyle';
import {EImages} from '../../types/enums';
import InfoBox from './components/InfoBox';
import DateTimeInput from '../../components/Form/DateTimeInput';
export default function Services() {
  return (
    <Container white>
      <Header title="خدمة ونش" imageURL={EImages.services1} />
      <Content>
        <InfoBox
          title="عن الخدمة"
          description="عند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي"
        />
        <DateTimeInput />
      </Content>
    </Container>
  );
}
