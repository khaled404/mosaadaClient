import React, {useRef, useState} from 'react';
import {Container} from '../../globalStyle';
import {Modalize} from 'react-native-modalize';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../context/auth';

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
import Lock from '../../../assets/svg/Lock';
import {theme} from '../../constants/theme';
import Success from '../../../assets/svg/Success';
import {useMutation} from 'react-query';
import {showMessage} from 'react-native-flash-message';
import {EditUserHandler} from './api';
import ChangePassword from './components/ChangePassword';
import UserId from '../../../assets/svg/UserId';
import ChangeNational from './components/ChangeNational';
import {launchImageLibrary} from 'react-native-image-picker';

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
  const changePassword = useRef<Modalize>(null);
  const changeNational = useRef<Modalize>(null);
  const {t} = useTranslation();
  const {user, login} = useAuth();

  const [isEdit, setisEdit] = useState(false);
  const editUserMutation = useMutation(EditUserHandler, {
    onError: (error: any) => {
      console.log(error?.response?.data);

      showMessage({
        message: error?.response?.data?.errors
          .map((item: any) => item.value)
          .join('\n'),
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
  const {handleChange, handleSubmit, handleBlur, values, setValues, errors} =
    useFormik({
      initialValues: {
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        avatar: undefined,
        imageUrl: user?.avatar,
        national_id: user?.national_id,
      },
      validationSchema: LoginSchema,
      onSubmit: values => {
        editUserMutation.mutate(values);
      },
    });

  const picImageHandler = async () => {
    try {
      launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 0.5,
        },
        (response: any) => {
          if (response?.assets) {
            setValues({
              ...values,
              avatar: response.assets[0],
              imageUrl: response.assets[0].uri,
            });
            handleSubmit();
          }
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onOpen = () => {
    changePassword.current?.open();
  };
  return (
    <>
      <Container>
        <ProfileHeader imageURL={values?.imageUrl} onPress={picImageHandler} />
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
              <ProfileInput
                placeholder={t('National ID')}
                value={user.national_id}
                errors={errors}
                name="national_id"
                keyboardType="number-pad"
                handleChange={handleChange}
                handleBlur={handleBlur}
                editable={isEdit}
                ProfileIcon={UserId}
              />
              <ProfileInput
                placeholder={t('Front national card image')}
                value={user?.national_image}
                errors={errors}
                name="national_image"
                handleChange={handleChange}
                handleBlur={handleBlur}
                editable={false}
                ProfileIcon={UserId}
                iamgeNational
                onPress={() => changeNational.current?.open()}
              />
            </Content>

            <Content>
              <ChangePasswordContainer onPress={onOpen}>
                <Lock width={theme.pixel(60)} height={theme.pixel(60)} />
                <PasswordText>*************</PasswordText>
                <Edit
                  fill={theme.colors.main}
                  width={theme.pixel(45)}
                  height={theme.pixel(45)}
                  style={theme.dir({marginLeft: 'auto'}, {marginRight: 'auto'})}
                />
              </ChangePasswordContainer>
            </Content>
          </ScrollView>
        </ProfileContainer>
      </Container>
      <Modalize
        ref={changePassword}
        snapPoint={theme.screenDimensions.height / 1.5}
        overlayStyle={{
          paddingTop: theme.statusBarHeight + 30,
        }}>
        <ChangePassword />
      </Modalize>
      <Modalize
        ref={changeNational}
        snapPoint={theme.screenDimensions.height / 1.5}
        overlayStyle={{
          paddingTop: theme.statusBarHeight + 30,
        }}>
        <ChangeNational
          uri={user?.national_image}
          onChangeHandler={image => {}}
          close={changeNational.current?.close}
        />
      </Modalize>
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
  margin-bottom: ${({theme}) => theme.pixel(35)};
`;

const ConatinerHeader = styled.View`
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => theme.pixel(25)}
    ${({theme}) => theme.appPaddingHorizontal}px;
`;
const IconContainer = styled.TouchableOpacity``;

const ChangePasswordContainer = styled.TouchableOpacity`
  padding: ${({theme}) => theme.pixel(50)}
    ${({theme}) => theme.appPaddingHorizontal}px;
  flex-direction: row;
  align-items: center;
`;
const PasswordText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.pixel(20)};
  margin-left: ${({theme}) => theme.pixel(40)};
`;
const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.main};
`;
