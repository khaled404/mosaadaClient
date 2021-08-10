import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {Content, LogoContainer, NextButton, Title} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import User from '../../../assets/svg/User';
import Phone from '../../../assets/svg/Phone';
import UserId from '../../../assets/svg/UserId';
import AddIcon from '../../../assets/svg/AddIcon';
const LoginSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.number()
    .min(11, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  nationalID: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegisterStep2: FC = () => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {userName: '', phone: '', nationalID: ''},
    validationSchema: LoginSchema,
    onSubmit: values => console.log(`Email:   `),
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
          placeholder={t('The name on the card')}
          LeftContent={User}
          errors={errors}
          name="userName"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
        />
        <Input
          placeholder={t('Phone')}
          LeftContent={Phone}
          errors={errors}
          name="phone"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
        />

        <Input
          placeholder={t('National ID')}
          LeftContent={UserId}
          errors={errors}
          name="nationalID"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
        />
        <Input
          placeholder={t('Front card image')}
          LeftContent={UserId}
          RightContent={AddIcon}
          errors={errors}
          name="nationalID"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
        />

        <NextButton
          onPress={() => {
            navigate('Home');
          }}>
          <ArrowLeft />
        </NextButton>
      </Content>
    </Container>
  );
};

export default RegisterStep2;
