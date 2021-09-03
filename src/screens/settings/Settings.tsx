import React, {useRef} from 'react';
import {Container} from '../../globalStyle';
import {EImages} from '../../types/enums';
import Header from './components/Header';
import {SettingsContainer, SettingsScroll} from './style';
import {Modalize} from 'react-native-modalize';
import {theme} from '../../constants/theme';
import SettingsBox from './components/SettingsBox';
import MapIconLg from '../../../assets/svg/MapIconLg';
import {useTranslation} from 'react-i18next';
import {useQueryClient} from 'react-query';

const Settings = () => {
  const lang = useRef<Modalize>(null);
  const {t} = useTranslation();
  const onOpen = () => {
    lang.current?.open();
  };

  const queryClient = useQueryClient();

  const {data}: any = queryClient.getQueryData('userData');

  return (
    <>
      <Container>
        <Header title={data.name} imageURL={data.avatar} />
        <SettingsContainer>
          <SettingsScroll>
            <SettingsBox Icon={MapIconLg} title={t('Address')} />
          </SettingsScroll>
        </SettingsContainer>
      </Container>

      <Modalize
        ref={lang}
        snapPoint={300}
        modalStyle={{marginTop: theme.statusBarHeight + 30}}></Modalize>
    </>
  );
};

export default Settings;
