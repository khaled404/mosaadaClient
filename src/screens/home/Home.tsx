import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, View} from 'react-native';
import {useQuery} from 'react-query';
import {theme} from '../../constants/theme';
import {Container, Content} from '../../globalStyle';
import {GetHomeHandler} from './api';
import Banner from './components/Banner';
import Header from './components/Header';
import ServicesBox from './components/ServicesBox';
import {ServicesTitle} from './style';

const Home: FC = () => {
  const {t} = useTranslation();
  const {data, isLoading} = useQuery('GetHomeHandler', GetHomeHandler);
  return (
    <Container>
      <Header />
      <Banner isLoading={isLoading} data={data?.data?.sliders} />
      <ServicesTitle>{t('How can we help you?')}</ServicesTitle>
      <Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: isLoading ? 'center' : 'space-between',
            flexWrap: 'wrap',
          }}>
          {isLoading ? (
            <ActivityIndicator size="large" color={theme.colors.main} />
          ) : (
            <>
              {data?.data?.services?.map((item: any, index: any) => {
                if (index === 0) return <ServicesBox data={item} key={index} />;
                return <ServicesBox isRow data={item} key={index} />;
              })}
            </>
          )}
        </View>
      </Content>
    </Container>
  );
};

export default Home;
