import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import Button from '../../components/button/Button';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styled, {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import Header from './components/Header';
import * as Yup from 'yup';
import {showMessage} from 'react-native-flash-message';

import {useMutation, useQuery, useQueryClient} from 'react-query';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import Location from '../../../assets/svg/Location';
import {theme} from '../../constants/theme';
import {pixel} from '../../constants/pixel';
import {useNavigation, useRoute} from '@react-navigation/core';
import Geolocation from 'react-native-geolocation-service';
import Loading from '../../components/loading/Loading';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {GetProvidersHandler} from './api';
import {
  Animated,
  Dimensions,
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ShowEditAddressSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Required'),
  address_name: Yup.string().min(2).required('Required'),
});

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const TenderMap = () => {
  const {t} = useTranslation();
  const {goBack} = useNavigation();
  const {params} = useRoute<{params: {id: number; body: any}}>();
  console.log(params);

  const queryClient = useQueryClient();
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [coords, setCoords] = useState({
    latitude: 30.033333,
    longitude: 31.233334,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });
  const [savedCoords, setSavedCoords] = useState({
    latitude: 30.033333,
    longitude: 31.233334,
  });
  const [markarCoords, setMarkarCoords] = useState({
    latitude: 30.033333,
    longitude: 31.233334,
  });

  const {mutate} = useMutation(() => {}, {
    onError: (error: any) => {
      console.log(error?.response);

      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Added successfully'),
        type: 'success',
      });
      queryClient.refetchQueries('GetAddressHandler');
      goBack();
    },
  });

  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {
      name: '',
      address_name: '',
      lat: savedCoords.latitude,
      lng: savedCoords.longitude,
    },
    validationSchema: ShowEditAddressSchema,
    onSubmit: values => {
      mutate({
        ...values,
        lat: savedCoords.latitude,
        lng: savedCoords.longitude,
      });
    },
  });
  const isLoading = false;
  const data = {
    data: [
      {
        id: 2,
        name: 'eslamdd',
        email: 'ddd@esslam.com',
        phone: '01025361807',
        avatar:
          'https://www.gravatar.com/avatar/57871448f11aaac34766a68d9bf27061',
        api_token:
          'z7l0S5ycvvUepDX1YQVKytg73MtFFggifn7Wvwla9kKadhYqQnWTk29vWLLg',
        active: 1,
        user_type: 'provider',
        wallet: 0,
        provider_address: '',
        provider_lat: 32.55550000000000210320649784989655017852783203125,
        provider_lng: 23.33330000000000126192389870993793010711669921875,
        services_support: [
          {
            id: 1,
            title: 'ونش',
            col: 12,
            sort: 1,
            take_location: 1,
            tender: true,
            image:
              'https://mosaada.mih-med.com/uploads/services/163394329081742.png',
          },
        ],
      },

      {
        id: 3,
        name: 'eslamdd 2',
        email: 'ddd@esslam.com',
        phone: '01025361807',
        avatar:
          'https://www.gravatar.com/avatar/57871448f11aaac34766a68d9bf27061',
        api_token:
          'z7l0S5ycvvUepDX1YQVKytg73MtFFggifn7Wvwla9kKadhYqQnWTk29vWLLg',
        active: 1,
        user_type: 'provider',
        wallet: 0,
        provider_address: '',
        provider_lat: 32.53550000000000210320649784989655017852783203125,
        provider_lng: 23.33330000000000126192389870993793010711669921875,
        services_support: [
          {
            id: 1,
            title: 'ونش',
            col: 12,
            sort: 1,
            take_location: 1,
            tender: true,
            image:
              'https://mosaada.mih-med.com/uploads/services/163394329081742.png',
          },
        ],
      },
    ],
  };

  // const {isLoading, data, error} = useQuery(
  //   [
  //     'GetProvidersHandler',
  //     {
  //       id: params.id,
  //       body: {
  //         // lat: params.body.lat,
  //         // lng: params.body.lng,
  //         lat: 32.5555,
  //         lng: 23.3333,

  //         attr: [1, 3],
  //       },
  //     },
  //   ],
  //   GetProvidersHandler,
  //   {retry: false},
  // );
  console.log(data);
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    if (data?.data) {
      mapAnimation.addListener(({value}) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
        if (index >= data.data.length) {
          index = data.data.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }

        const regionTimeout = () => {
          if (mapIndex !== index) {
            mapIndex = index;
            const coordinate = data.data[index];
            _map.current.animateToRegion(
              {
                latitude: coordinate.provider_lat,
                longitude: coordinate.provider_lng,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              },
              350,
            );
          }
        };

        regionTimeout();
      });
    }
  });

  const onMarkerPress = markerID => {
    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };
  if (isLoading) return <Loading />;

  const interpolations = data.data.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  return (
    <Container>
      <Header title={t('Choose worker')} />

      <MapView
        ref={_map}
        initialRegion={{
          latitude: 32.5555,
          longitude: 23.3333,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}>
        {data.data.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <Marker
              key={marker.id}
              coordinate={{
                latitude: marker.provider_lat,
                longitude: marker.provider_lng,
              }}
              onPress={e => onMarkerPress(index)}>
              <Animated.View style={[styles.markerWrap, scaleStyle]}>
                <Image
                  source={EImages.worker}
                  style={css(({theme}) => ({
                    width: theme.pixel(93),
                    height: theme.pixel(93),
                  }))}
                />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>

      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {data.data.map((marker, index) => (
          <View style={styles.card} key={marker.id}></View>
        ))}
      </Animated.ScrollView>

      {/* <MapView
        initialRegion={{
          latitude: 32.5555,
          longitude: 23.3333,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={{flex: 1}}>
        <Marker
          coordinate={{
            latitude: 32.2555,
            longitude: 23.2333,
          }}>
          <Image
            source={EImages.pin}
            style={css(({theme}) => ({
              width: theme.pixel(100),
              height: theme.pixel(100),
            }))}
          />
        </Marker>

        {data.data.map(item => (
          <Marker
            coordinate={{
              latitude: item.provider_lat,
              longitude: item.provider_lng,
            }}>
            <Image
              source={EImages.worker}
              style={css(({theme}) => ({
                width: theme.pixel(120),
                height: theme.pixel(120),
              }))}
            />
          </Marker>
        ))}
      </MapView> */}
    </Container>
  );
};

export default TenderMap;

const styles = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: pixel(110),
    height: pixel(110),
  },
  marker: {
    width: pixel(110),
    height: pixel(110),
  },

  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
});
