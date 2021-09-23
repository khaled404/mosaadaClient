import {useFormik} from 'formik';
import React from 'react';
import Button from '../../components/button/Button';
import MapView from 'react-native-maps';
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
const ShowEditAddressSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Required'),
  address_name: Yup.string().min(2).required('Required'),
});
const AddAddress = () => {
  const {t} = useTranslation();
  const {goBack} = useNavigation();
  const queryClient = useQueryClient();
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
    initialValues: {name: '', address_name: '', lat: 1234, lng: 1234},
    validationSchema: ShowEditAddressSchema,
    onSubmit: values => {
      mutate(values);
    },
  });
  return (
    <Container>
      <Header title="إضافة عنوان جديد" />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}
      />
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
          <GetMyLoction>
            <Location
              fill={theme.colors.main}
              width={pixel(60)}
              height={pixel(60)}
            />
          </GetMyLoction>
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

const GetMyLoction = styled.TouchableOpacity`
  width: ${({theme}) => theme.pixel(115)};
  height: ${({theme}) => theme.pixel(115)};
  background-color: #f7f7fa;
  border-radius: 50px;
  margin-bottom: ${({theme}) => theme.pixel(45)};
  align-items: center;
  justify-content: center;
`;
