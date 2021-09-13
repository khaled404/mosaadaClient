import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {Content, LogoContainer, Title} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import Mail from '../../../assets/svg/Mail';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useMutation} from 'react-query';
import {ForgotPasswordHandler} from './api';
import NextArrowButton from './components/NextArrowButton';
import {showMessage} from 'react-native-flash-message';
import {useAuth} from '../../context/auth';
import Email from '../../../assets/svg/Email';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPasswordScreen: FC = () => {
  const {reset, navigate} = useNavigation();
  const {t} = useTranslation();
  const {login} = useAuth();
  const {mutate, isLoading} = useMutation(ForgotPasswordHandler, {
    onSuccess: data => {
      showMessage({
        message: data?.message,
        type: 'danger',
      });
    },
    onError: (error: any) => {
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
  });
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {email: ''},
    validationSchema: LoginSchema,
    onSubmit: values => mutate(values),
  });

  return (
    <Container>
      <Content>
        <LogoContainer>
          <Image
            source={EImages.Logo}
            style={css`
              width: 96px;
              height: 99px;
            `}
          />
        </LogoContainer>
        <Title>{t('Please enter the following data')}</Title>
        <Input
          placeholder={t('Email')}
          LeftContent={Email}
          errors={errors}
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
          keyboardType="email-address"
        />
        <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
      </Content>
    </Container>
  );
};

export default ForgotPasswordScreen;
