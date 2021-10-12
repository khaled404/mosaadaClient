import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {css} from 'styled-components/native';
import {Container} from '../../globalStyle';
import {Content, LogoContainer, Title} from './style';
import Image from '../../components/image/Image';
import {EImages} from '../../types/enums';
import {useTranslation} from 'react-i18next';
import Input from '../../components/Form/Input';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import User from '../../../assets/svg/User';
import {useMutation} from 'react-query';
import {RegisterHandler} from './api';
import NextArrowButton from './components/NextArrowButton';
import {showMessage} from 'react-native-flash-message';
import {useAuth} from '../../context/auth';
import UserId from '../../../assets/svg/UserId';
import AddIcon from '../../../assets/svg/AddIcon';
import UplodImage from '../../components/Form/UplodImage';
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  national_image: Yup.object(),
  national_id: Yup.string()
    .min(14, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
});

const RegisterStep2: FC = () => {
  const {reset} = useNavigation();
  const {params} = useRoute();
  const {t} = useTranslation();
  const {login} = useAuth();
  const {mutate, isLoading} = useMutation(RegisterHandler, {
    onError: (error: any) => {
      console.log(error?.response);
      if (error?.response?.data.errors.length !== 0) {
        showMessage({
          message: error?.response?.data?.errors
            .map((item: any) => item.value)
            .join('\n'),
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
      login(data.data, () => {
        reset({index: 1, routes: [{name: 'Home'}]});
      });
    },
  });

  const {handleChange, handleSubmit, handleBlur, values, errors, setValues} =
    useFormik({
      initialValues: {name: '', national_id: '', national_image: ''},
      validationSchema: RegisterSchema,
      onSubmit: values => {
        mutate({...values, ...params});
      },
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
          placeholder={t('National ID')}
          LeftContent={UserId}
          errors={errors}
          name="national_id"
          keyboardType="number-pad"
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <UplodImage
          placeholder={t('Front national card image')}
          LeftContent={UserId}
          RightContent={AddIcon}
          errors={errors}
          name="national_image"
          handleBlur={handleBlur}
          handleChange={(uri: any) =>
            setValues({
              ...values,
              national_image: uri,
            })
          }
        />
        <NextArrowButton isLoading={isLoading} onPress={handleSubmit} />
      </Content>
    </Container>
  );
};

export default RegisterStep2;
