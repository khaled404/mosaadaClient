import {useFormik} from 'formik';
import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Form/Input';
import * as Yup from 'yup';
import {useTranslation} from 'react-i18next';
import Lock from '../../../../assets/svg/Lock';
import {NextButton} from '../style';
import ArrowLeft from '../../../../assets/svg/ArrowLeft';
import styled from 'styled-components/native';
import NextArrowButton from './NextArrowButton';
import {useMutation} from 'react-query';
import {ChangePasswordHandler} from '../api';
import {showMessage} from 'react-native-flash-message';

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().min(6).required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متشابهة')
    .required('Required'),
});

const ChangePassword = () => {
  const {t} = useTranslation();

  const {mutate, isLoading} = useMutation(ChangePasswordHandler, {
    onError: (error: any) => {
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Password has been modified successfully'),
        type: 'success',
      });
    },
  });
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {password: '', passwordConfirmation: ''},
    validationSchema: ChangePasswordSchema,
    onSubmit: values => {
      mutate(values);
    },
  });
  return (
    <Container>
      <Input
        placeholder={t('New Password')}
        LeftContent={Lock as any}
        errors={errors}
        name="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        secureTextEntry={values.password.length >= 1}
        onSubmitEditing={handleSubmit}
      />
      <View style={{marginBottom: 50}}>
        <Input
          placeholder={t('New Password Confirmation')}
          LeftContent={Lock as any}
          errors={errors}
          name="passwordConfirmation"
          handleChange={handleChange}
          handleBlur={handleBlur}
          secureTextEntry={values.passwordConfirmation.length >= 1}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
    </Container>
  );
};

export default ChangePassword;

const Container = styled.View`
  padding: 20px ${({theme}) => theme.appPaddingHorizontal}px;
  flex: 1;
  height: 100%;
  margin-bottom: ${({theme}) => theme.pixel(85)};
  margin-top: ${({theme}) => theme.pixel(35)};
`;
