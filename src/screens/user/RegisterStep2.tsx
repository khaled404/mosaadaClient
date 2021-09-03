import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {Content, LogoContainer, NextButton, Title} from './style';
import Image from '../../components/image/Image';
import {AsyncKeys, EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import ArrowLeft from '../../../assets/svg/ArrowLeft';
import User from '../../../assets/svg/User';
import Phone from '../../../assets/svg/Phone';
import UserId from '../../../assets/svg/UserId';
import AddIcon from '../../../assets/svg/AddIcon';
import {useMutation} from 'react-query';
import {RegisterHandler} from './api';
import NextArrowButton from './components/NextArrowButton';
import {showMessage} from 'react-native-flash-message';
import {saveItem} from '../../constants/helpers';
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(11, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  // nationalID: Yup.number()
  //   .min(2, 'Too Short!')
  //   .max(50, 'Too Long!')
  //   .required('Required'),
});

const RegisterStep2: FC = () => {
  const {reset} = useNavigation();
  const {params} = useRoute();
  const {t} = useTranslation();

  const {mutate, isLoading, data} = useMutation(RegisterHandler, {
    onError: (error: any) => {
      if (Object.keys(error?.response?.data.errors).length !== 0) {
        showMessage({
          message: Object.values(error?.response?.data?.errors).join('\n'),
          type: 'danger',
        });
        return;
      }
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: async data => {
      await saveItem(AsyncKeys.USER_DATA, data.data);
      reset({index: 1, routes: [{name: 'Home'}]});
    },
  });

  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {name: '', phone: ''},
    validationSchema: RegisterSchema,
    onSubmit: values => mutate({...values, ...params}),
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
          name="name"
          handleChange={handleChange}
          handleBlur={handleBlur}
          onSubmitEditing={handleSubmit}
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

        {/* <Input
          placeholder={t('National ID')}
          LeftContent={UserId}
          errors={errors}
          name="nationalID"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <Input
          placeholder={t('Front card image')}
          LeftContent={UserId}
          RightContent={AddIcon}
          errors={errors}
          name="nationalID"
          handleChange={handleChange}
          handleBlur={handleBlur}
        /> */}
        <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
        {/* <NextButton
          onPress={() => {
            navigate('Home');
          }}>
          <ArrowLeft />
        </NextButton> */}
      </Content>
    </Container>
  );
};

export default RegisterStep2;
