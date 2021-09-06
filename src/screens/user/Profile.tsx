import React, {useRef, useState} from 'react';
import {Container} from '../../globalStyle';
import {Modalize} from 'react-native-modalize';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../context/auth';
import {useNavigation} from '@react-navigation/core';

import ProfileHeader from './components/ProfileHeader';
import styled from 'styled-components/native';
import {ActivityIndicator, Text} from 'react-native';
import ProfileInput from './components/ProfileInput';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import User from '../../../assets/svg/User';
import Phone from '../../../assets/svg/Phone';
import Email from '../../../assets/svg/Email';
import Edit from '../../../assets/svg/Edit';
import {theme} from '../../constants/theme';
import Success from '../../../assets/svg/Success';
import {useMutation} from 'react-query';
import {showMessage} from 'react-native-flash-message';
import {EditUserHandler} from './api';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(11, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Profile = () => {
  const lang = useRef<Modalize>(null);
  const {t} = useTranslation();
  const {user, login} = useAuth();
  const [isEdit, setisEdit] = useState(false);
  const editUserMutation = useMutation(EditUserHandler, {
    onError: (error: any) => {
      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      console.log(data);
      showMessage({
        message: t('Profile updated successfully'),
        type: 'success',
      });

      login(data.data);
    },
  });
  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: {name: user?.name, email: user?.email, phone: user?.phone},
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(values);
      editUserMutation.mutate(values);
    },
  });

  const onOpen = () => {
    lang.current?.open();
  };
  return (
    <>
      <Container>
        <ProfileHeader imageURL={user?.avatar} />
        <ProfileContainer>
          <ScrollView>
            <Content>
              <ConatinerHeader>
                <IconContainer
                  onPress={() => {
                    isEdit && handleSubmit();
                    setisEdit(e => !e);
                  }}>
                  {editUserMutation.isLoading ? (
                    <ActivityIndicator size="small" color={theme.colors.main} />
                  ) : isEdit ? (
                    <Success
                      fill={theme.colors.main}
                      width={theme.pixel(45)}
                      height={theme.pixel(45)}
                    />
                  ) : (
                    <Edit
                      fill={theme.colors.main}
                      width={theme.pixel(45)}
                      height={theme.pixel(45)}
                    />
                  )}
                </IconContainer>
                <HeaderTitle>{t('Personal data')}</HeaderTitle>
              </ConatinerHeader>
              <ProfileInput
                placeholder={t('Name')}
                value={values.name}
                errors={errors}
                name="name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                editable={isEdit}
                ProfileIcon={User}
              />
              <ProfileInput
                placeholder={t('Phone')}
                value={values.phone}
                errors={errors}
                name="phone"
                handleChange={handleChange}
                handleBlur={handleBlur}
                editable={isEdit}
                ProfileIcon={Phone}
              />
              <ProfileInput
                placeholder={t('Email')}
                value={values.email}
                errors={errors}
                name="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                editable={isEdit}
                ProfileIcon={Email}
              />
            </Content>
          </ScrollView>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Profile;

const ProfileContainer = styled.View`
  width: 100%;
  height: ${({theme}) => theme.mediaQuery(788, '76%', '79%', 'h')};
  align-self: center;
  transform: ${({theme}) => `translateY(${theme.pixel(-5)})`};
  position: absolute;
  bottom: 0;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0 ${({theme}) => theme.appPaddingHorizontal}px;
`;

const Content = styled.View`
  background-color: #fff;
  width: 100%;
  border: solid 1px rgba(112, 112, 112, 0.17);
  border-radius: ${({theme}) => theme.pixel(35)};
  padding: ${({theme}) => theme.pixel(5)} 0;
`;

const ConatinerHeader = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.pixel(25)}
    ${({theme}) => theme.appPaddingHorizontal}px;
`;
const IconContainer = styled.TouchableOpacity``;
const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main};
`;
