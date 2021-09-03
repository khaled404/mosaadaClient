import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useQuery} from 'react-query';
import {Container, Content} from '../../globalStyle';
import {GetUserHandler} from '../user/api';
import Banner from './components/Banner';
import Header from './components/Header';
import ServicesBox from './components/ServicesBox';
import {ServicesTitle} from './style';

const Home: FC = () => {
  const {t} = useTranslation();
  const {data, error} = useQuery('userData', GetUserHandler);
  // console.log(error.response);

  return (
    <Container>
      <Header />
      <Banner />
      <ServicesTitle>{t('How can we help you?')}</ServicesTitle>
      <Content>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox isRow />
          <ServicesBox isRow />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox isRow />
          <ServicesBox isRow />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox isRow />
          <ServicesBox isRow />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox isRow />
          <ServicesBox isRow />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ServicesBox isRow />
          <ServicesBox isRow />
        </View>
      </Content>
    </Container>
  );
};

export default Home;
