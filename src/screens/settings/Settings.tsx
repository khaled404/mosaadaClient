import React, {useRef} from 'react';
import {I18nManager} from 'react-native';
import {Container} from '../../globalStyle';
import {SettingsContainer, SettingsScroll} from './style';
import {Modalize} from 'react-native-modalize';
import {theme} from '../../constants/theme';
import SettingsBox from './components/SettingsBox';
import MapIconLg from '../../../assets/svg/MapIconLg';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../context/auth';
import Header from './components/Header';
import ListIcon from '../../../assets/svg/ListIcon';
import Phone from '../../../assets/svg/Phone';
import Exclamation from '../../../assets/svg/Exclamation';
import Global from '../../../assets/svg/Global';
import ShareIcon from '../../../assets/svg/Share';
import ToggleLanguage from './components/ToggleLanguage';
import Square from '../../../assets/svg/Square';
import Tick from '../../../assets/svg/Tick';
import RNRestart from 'react-native-restart'; // Import package from node modules
import Logout from '../../../assets/svg/Logout';
import {useNavigation} from '@react-navigation/core';
import Share from 'react-native-share';

const {isRTL, forceRTL, allowRTL} = I18nManager;
const Settings = () => {
  const lang = useRef<Modalize>(null);
  const {t} = useTranslation();
  const {user, logout} = useAuth();
  const {reset, navigate} = useNavigation();
  const onOpen = () => {
    lang.current?.open();
  };

  const toggleLang = () => {
    forceRTL(!isRTL);
    allowRTL(!isRTL);
    RNRestart.Restart();
  };

  const options = {
    title: 'title',
    subject: 'subject',
    message: `https://google.com/`,
  };

  const ShareHandler = () => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <>
      <Container>
        <Header title={user?.name} imageURL={user?.avatar} />

        <SettingsContainer>
          <SettingsScroll>
            <SettingsBox Icon={MapIconLg} title={t('Address')} />
            <SettingsBox
              Icon={ListIcon}
              title={t('Usage policy')}
              onPress={() => {
                navigate('Policy`');
              }}
            />
            <SettingsBox
              Icon={Phone}
              title={t('Contact us')}
              onPress={() => {
                navigate('Contact');
              }}
            />
            <SettingsBox
              Icon={Exclamation}
              title={t('About the app')}
              onPress={() => {
                navigate('About');
              }}
            />
            <SettingsBox Icon={Global} title={t('Language')} onPress={onOpen} />
            <SettingsBox
              Icon={ShareIcon}
              title={t('Share the app')}
              onPress={ShareHandler}
            />
            <SettingsBox
              Icon={Logout}
              title={t('Logout')}
              onPress={() => {
                logout(() => {
                  reset({index: 1, routes: [{name: 'Login'}]});
                });
              }}
            />
          </SettingsScroll>
        </SettingsContainer>
      </Container>

      <Modalize
        ref={lang}
        snapPoint={300}
        modalStyle={{marginTop: theme.statusBarHeight + 30}}>
        <ToggleLanguage
          title="عربي"
          Icon={!isRTL ? Square : Tick}
          onPress={() => {
            !isRTL && toggleLang();
          }}
        />
        <ToggleLanguage
          title="English"
          Icon={!isRTL ? Tick : Square}
          onPress={() => {
            isRTL && toggleLang();
          }}
        />
      </Modalize>
    </>
  );
};

export default Settings;
