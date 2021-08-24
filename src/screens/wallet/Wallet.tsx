import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container} from '../../globalStyle';
import RecordBox from './components/RecordBox';
import {
  AddButton,
  Amount,
  Content,
  Currency,
  Header,
  PlusText,
  RecordsContainer,
  RecordsHeader,
  RecordsScroll,
} from './style';

const Wallet = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content>
        <Header>{t('Wallet')}</Header>
        <Amount>2600</Amount>
        <Currency>{t('EGP')}</Currency>
        <AddButton>
          <PlusText>+</PlusText>
        </AddButton>
      </Content>
      <RecordsContainer>
        <RecordsHeader>{t('Payment Records')}</RecordsHeader>

        <RecordsScroll
          data={[{}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <RecordBox />}
          keyExtractor={(_, i) => i.toString()}
        />
      </RecordsContainer>
    </Container>
  );
};

export default Wallet;
