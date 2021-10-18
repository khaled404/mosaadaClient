import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import Button from '../../components/button/Button';
import MapView, {Marker} from 'react-native-maps';
import styled, {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import Header from './components/Header';
import * as Yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {AddAddressHandler} from './api';
import {useMutation, useQueryClient} from 'react-query';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import Location from '../../../assets/svg/Location';
import {theme} from '../../constants/theme';
import {pixel} from '../../constants/pixel';
import {useNavigation} from '@react-navigation/core';
import Geolocation from 'react-native-geolocation-service';
import Loading from '../../components/loading/Loading';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';

const ShowEditAddressSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Required'),
  address_name: Yup.string().min(2).required('Required'),
});
const AddAddress = () => {
  const {t} = useTranslation();
  const {goBack} = useNavigation();
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

  const setInitCoords = (position: any) => {
    setCoords(e => ({
      ...e,
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    }));
    setMarkarCoords({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
    setSavedCoords({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    });
  };

  const {mutate, isLoading} = useMutation(AddAddressHandler, {
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

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setInitCoords(position);

        setIsLoadingLocation(false);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
        showMessage({
          type: 'danger',
          message: error.message,
        });
        setIsLoadingLocation(false);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  useEffect(() => {
    getMyLocation();
  }, []);
  if (isLoadingLocation) return <Loading />;

  return (
    <Container>
      <Header title="إضافة عنوان جديد" />
      <MapView
        initialRegion={coords}
        region={coords}
        style={{flex: 1}}
        onRegionChangeComplete={e => {
          setMarkarCoords(e);
          setCoords(e);
          setSavedCoords({latitude: e.latitude, longitude: e.longitude});
        }}>
        <Marker
          coordinate={markarCoords}
          draggable
          onDragEnd={e => setSavedCoords(e.nativeEvent.coordinate)}>
          <Image
            source={EImages.pin}
            style={css(({theme}) => ({
              width: theme.pixel(100),
              height: theme.pixel(100),
            }))}
          />
        </Marker>
      </MapView>
      <Form>
        <Input
          placeholder={t('Address Title')}
          errors={errors}
          name="name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
          value={values.name}
        />
        <Row>
          <Input
            placeholder={t('Address details')}
            errors={errors}
            name="address_name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            onSubmitEditing={handleSubmit}
            value={values.address_name}
            style={{width: '78%'}}
          />
          <GetMyLocation onPress={getMyLocation}>
            <Location
              fill={theme.colors.main}
              width={pixel(60)}
              height={pixel(60)}
            />
          </GetMyLocation>
        </Row>
        <Button
          title={t('Add')}
          isLoading={isLoading}
          onPress={handleSubmit}
          style={css`
            width: 60%;
            text-align: center;
            margin: ${({theme}) => theme.pixel(25)} auto;
          `}
        />
      </Form>
    </Container>
  );
};

export default AddAddress;
const Form = styled.View`
  height: 35%;
  background-color: #fff;
  padding: ${({theme}) => theme.pixel(30)}
    ${({theme}) => theme.appPaddingHorizontal}px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const GetMyLocation = styled.TouchableOpacity`
  width: ${({theme}) => theme.pixel(115)};
  height: ${({theme}) => theme.pixel(115)};
  background-color: #f7f7fa;
  border-radius: 50px;
  margin-bottom: ${({theme}) => theme.pixel(45)};
  align-items: center;
  justify-content: center;
`;
