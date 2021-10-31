import React, {useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styled, {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import Header from './components/Header';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {useTranslation} from 'react-i18next';
import {pixel} from '../../constants/pixel';
import {useNavigation, useRoute} from '@react-navigation/core';
import Loading from '../../components/loading/Loading';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {GetProvidersHandler, NewOrderHandler} from './api';
import {Animated, Dimensions, Platform} from 'react-native';
import Star from '../../../assets/svg/Star';
import {OpenUrlHandler} from '../../constants/helpers';
import Phone from '../../../assets/svg/Phone';
import {theme} from '../../constants/theme';
import Button from '../../components/button/Button';
import {showMessage} from 'react-native-flash-message';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const TenderMap = () => {
  const {t} = useTranslation();
  const {reset} = useNavigation();
  const {params} = useRoute<{params: {body: any}}>();
  const _map = React.useRef<any>(null);
  const _scrollView = React.useRef<any>(null);
  const mapAnimation = new Animated.Value(0);
  let mapIndex = 0;
  const queryClient = useQueryClient();
  const {isLoading, data, error} = useQuery(
    [
      'GetProvidersHandler',
      {
        id: params.body.services_id,
        body: {
          lat: params.body.lat,
          lng: params.body.lng,
          attr: params.body.attr,
        },
      },
    ],
    GetProvidersHandler,
  );

  const newOrderMutation = useMutation(NewOrderHandler, {
    onError: (error: any) => {
      console.log(error?.response);

      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Order has been sent successfully'),
        type: 'success',
      });
      reset({index: 1, routes: [{name: 'Home'}]});
      queryClient.refetchQueries('Orders');
    },
  });

  useEffect(() => {
    if (data?.data?.length !== 0 && _scrollView.current) {
      setTimeout(() => {
        onMarkerPress(data?.data?.length);
      }, 500);
    }
  }, [data]);

  useEffect(() => {
    if (data?.data?.length !== 0) {
      mapAnimation.addListener(({value}) => {
        let index = Math.floor(value / CARD_WIDTH + 0.3);
        if (index >= data?.data?.length) {
          index = data?.data?.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }

        const regionTimeout = () => {
          if (mapIndex !== index) {
            mapIndex = index;
            const coordinate = data?.data[index];
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

  const onMarkerPress = (markerID: any) => {
    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };
  if (isLoading) return <Loading />;

  const interpolations = data?.data?.map((marker: any, index: any) => {
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
  console.log(data, error?.response);

  return (
    <Container>
      <Header title={t('Choose worker')} />
      <MapView
        ref={_map}
        initialRegion={{
          latitude: params.body.lat,
          longitude: params.body.lng,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}>
        <Marker
          coordinate={{
            latitude: params.body.lat,
            longitude: params.body.lng,
          }}>
          <Image
            source={EImages.pin}
            style={css(({theme}) => ({
              width: theme.pixel(100),
              height: theme.pixel(100),
            }))}
          />
        </Marker>
        {data?.data?.map((marker: any, index: any) => {
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
              <Animated.View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: pixel(110),
                    height: pixel(110),
                  },
                  scaleStyle,
                ]}>
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
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 10,
        }}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingVertical: pixel(20),
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
        {data?.data?.map((item: any) => (
          <Card key={item.id}>
            {item?.services_support?.map((service: any) => (
              <Row key={service.id}>
                <View style={{paddingTop: 5}}>
                  <Image
                    url={service.image}
                    style={css(({theme}) => ({
                      width: theme.pixel(100),
                      height: theme.pixel(100),
                      borderRadius: 12,
                      overflow: 'hidden',
                    }))}
                  />
                </View>

                <Text>{service.title}</Text>
              </Row>
            ))}

            <Row style={{marginBottom: pixel(10)}}>
              <View>
                <Image
                  url={item.avatar}
                  style={css(({theme}) => ({
                    width: theme.pixel(100),
                    height: theme.pixel(100),
                    borderRadius: 12,
                    overflow: 'hidden',
                  }))}
                />
              </View>
              <Row style={{flex: 1}}>
                <View style={{marginRight: 'auto'}}>
                  <Text>{item.name}</Text>
                  <Row>
                    {[...Array(5).keys()].map(index => (
                      <Star
                        key={index}
                        fill={index < item.rate ? '#F8B61C' : '#dae1e9'}
                        width={pixel(25)}
                        height={pixel(25)}
                        style={{marginRight: 3}}
                      />
                    ))}
                  </Row>
                  <Price>
                    {data.more_information.price} {t('L.E')}
                  </Price>
                </View>
                {/* <IconContainer
                  onPress={() => {
                    OpenUrlHandler(`tel:${item?.phone}`);
                  }}>
                  <Phone
                    fill={theme.colors.main}
                    width={theme.pixel(40)}
                    height={theme.pixel(40)}
                  />
                </IconContainer> */}
              </Row>
            </Row>

            <Button
              title={t('Select')}
              onPress={() => {
                newOrderMutation.mutate({...params.body, provider_id: item.id});
              }}
              isLoading={newOrderMutation.isLoading}
              style={css`
                width: 50%;
                text-align: center;
                margin: auto auto ${({theme}) => theme.pixel(25)};
              `}
            />
          </Card>
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default TenderMap;

const Card = styled.View(({theme}) => ({
  elevation: 2,
  backgroundColor: '#FFF',
  borderRadius: theme.pixel(40),
  marginHorizontal: 10,
  shadowColor: '#000',
  shadowRadius: 5,
  shadowOpacity: 0.3,
  shadowOffset: {x: 2, y: -2},
  width: CARD_WIDTH,
  overflow: 'hidden',
}));

const View = styled.View(({theme}) => ({
  paddingTop: theme.pixel(30),
  paddingLeft: theme.pixel(20),
  paddingRight: theme.pixel(20),
}));

const Text = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(30),
  color: theme.colors.main,
  textAlign: 'left',
}));

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
const IconContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.pixel(70)};
  height: ${({theme}) => theme.pixel(70)};
  background-color: #f7f7fa;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: ${({theme}) => theme.pixel(20)};
`;

const Price = styled.Text`
  margin-right: auto;
  padding: ${({theme}) => theme.pixel(10)} ${({theme}) => theme.pixel(20)};
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.grayMain};
  font-size: ${({theme}) => theme.pixel(25)};
`;
