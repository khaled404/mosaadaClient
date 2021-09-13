import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {Content, LogoContainer, NextButton, Title} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import Mail from '../../../assets/svg/Mail';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import Lock from '../../../assets/svg/Lock';
import Phone from '../../../assets/svg/Phone';
import Email from '../../../assets/svg/Email';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6).required('Required'),
  phone: Yup.string()
    .min(11, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متشابهة')
    .required('Required'),
});

const RegisterStep1: FC = () => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {
      email: '',
      phone: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => navigate('RegisterStep2', values),
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
        <Input
          placeholder={t('Phone')}
          LeftContent={Phone}
          errors={errors}
          name="phone"
          keyboardType="phone-pad"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
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
        <Input
          placeholder={t('Password Confirmation')}
          LeftContent={Lock as any}
          errors={errors}
          name="passwordConfirmation"
          handleChange={handleChange}
          handleBlur={handleBlur}
          secureTextEntry={values.passwordConfirmation.length >= 1}
          onSubmitEditing={handleSubmit}
        />

        <NextButton onPress={handleSubmit}>
          <ArrowLeft />
        </NextButton>
      </Content>
    </Container>
  );
};

export default RegisterStep1;
