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
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const RegisterStep1: FC = () => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {email: ''},
    validationSchema: LoginSchema,
    onSubmit: values => console.log(`Email: ${values.email},  `),
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
          LeftContent={Mail}
          errors={errors}
          name="email"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
        />

        <NextButton
          onPress={() => {
            navigate('RegisterStep2');
          }}>
          <ArrowLeft />
        </NextButton>
      </Content>
    </Container>
  );
};

export default RegisterStep1;
