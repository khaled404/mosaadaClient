import {useFormik} from 'formik';
import React, {FC} from 'react';
import {View} from 'react-native';
import Input from '../../../components/Form/Input';
import * as Yup from 'yup';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import NextArrowButton from '../../user/components/NextArrowButton';
import {useMutation, useQueryClient} from 'react-query';
import {showMessage} from 'react-native-flash-message';
import {EditAddressHandler} from '../api';

interface IShowEditAddress {
  name: string;
  address_name: string;
  id: string;
  lat: string;
  lng: string;
}
const ShowEditAddressSchema = Yup.object().shape({
  name: Yup.string().min(2).required('Required'),
  address_name: Yup.string().min(2).required('Required'),
});

const ShowEditAddress: FC<IShowEditAddress> = ({
  name,
  address_name,
  id,
  lat,
  lng,
}) => {
  const {t} = useTranslation();
  const queryClient = useQueryClient();
  const {mutate, isLoading} = useMutation(EditAddressHandler, {
    onError: (error: any) => {
      console.log(error?.response);

      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Edited successfully'),
        type: 'success',
      });
      queryClient.refetchQueries('GetAddressHandler');
    },
  });
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {name, address_name},
    validationSchema: ShowEditAddressSchema,
    onSubmit: values => {
      mutate({...values, id, lat, lng});
    },
  });
  return (
    <Container>
      <Title>{t('Address details')}</Title>
      <Input
        placeholder={t('Address Title')}
        errors={errors}
        name="name"
        handleChange={handleChange}
        handleBlur={handleBlur}
        onSubmitEditing={handleSubmit}
        value={values.name}
      />
      <View style={{marginBottom: 50}}>
        <Input
          placeholder={t('Address details')}
          errors={errors}
          name="address_name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
          value={values.address_name}
        />
      </View>
      <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
    </Container>
  );
};

export default ShowEditAddress;

const Container = styled.View`
  padding: 0 ${({theme}) => theme.appPaddingHorizontal}px;
  flex: 1;
  height: 100%;
  margin-bottom: ${({theme}) => theme.pixel(85)};
  margin-top: ${({theme}) => theme.pixel(35)};
`;

const Title = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.main,
  fontSize: theme.pixel(35),
  paddingBottom: theme.pixel(40),
  alignSelf: 'center',
}));
