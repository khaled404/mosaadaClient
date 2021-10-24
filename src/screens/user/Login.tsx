import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {
  Content,
  ForgotPassword,
  ForgotPasswordContainer,
  LogoContainer,
  RegisterContainer,
  RegisterText,
  RegisterTextTow,
  Title,
} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import Mail from '../../../assets/svg/Mail';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Lock from '../../../assets/svg/Lock';
import {useMutation} from 'react-query';
import {LoginHandler} from './api';
import NextArrowButton from './components/NextArrowButton';
import {showMessage} from 'react-native-flash-message';
import {useAuth} from '../../context/auth';
import Email from '../../../assets/svg/Email';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login: FC = () => {
  const {reset, navigate} = useNavigation();
  const {t} = useTranslation();
  const {login} = useAuth();
  const {mutate, isLoading, error} = useMutation(LoginHandler, {
    onError: (error: any) => {
      console.log(error?.response);
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      login(data.data, () => {
        reset({index: 1, routes: [{name: 'Home'}]});
      });
    },
  });
  console.log(error?.response);

  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {email: '', password: ''},
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
        <Title style={{marginTop: 40, marginBottom: 40}}>
          {t('Please enter the following data')}
        </Title>
        <Input
          placeholder={t('Email')}
          LeftContent={Email}
          errors={errors}
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          keyboardType="email-address"
        />
        <Input
          placeholder={t('Password')}
          LeftContent={Lock as any}
          errors={errors}
          name="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          secureTextEntry={values.password.length >= 1}
          onSubmitEditing={handleSubmit}
        />
        <ForgotPasswordContainer
          onPress={() => {
            navigate('ForgotPassword');
          }}>
          <ForgotPassword>{t('Forgot Password')}</ForgotPassword>
        </ForgotPasswordContainer>
        <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
      </Content>
      <RegisterContainer
        onPress={() => {
          navigate('RegisterStep1');
        }}>
        <RegisterText>{t("Don't have an account?")}</RegisterText>
        <RegisterTextTow>{t('Create an account')}</RegisterTextTow>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
