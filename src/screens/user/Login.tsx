import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {
  Content,
  ForgotPassword,
  ForgotPasswordContainer,
  LogoContainer,
  NextButton,
  RegisterContainer,
  RegisterText,
  RegisterTextTow,
  Title,
} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/input/Input';
import Mail from '../../../assets/svg/Mail';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Lock from '../../../assets/svg/Lock';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login: FC = () => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: LoginSchema,
    onSubmit: values =>
      console.log(`Email: ${values.email}, Password: ${values.password}`),
  });
  console.log(values);

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
          LeftContent={Mail}
          errors={errors}
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder={t('Password')}
          LeftContent={Lock}
          errors={errors}
          name="password"
          handleChange={handleChange}
          handleBlur={handleBlur}
          secureTextEntry
          onSubmitEditing={handleSubmit}
        />
        <ForgotPasswordContainer>
          <ForgotPassword>{t('Forgot Password')}</ForgotPassword>
        </ForgotPasswordContainer>

        <NextButton>
          <ArrowLeft />
        </NextButton>
      </Content>
      <RegisterContainer>
        <RegisterText>{t("Don't have an account?")}</RegisterText>
        <RegisterTextTow>{t('Create an account')}</RegisterTextTow>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
