import React from 'react';
import {View} from 'react-native';
import {Container, Content} from '../../globalStyle';
import Header from '../../components/header/Header';
import {useTranslation} from 'react-i18next';
import styled, {css} from 'styled-components/native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import Input from '../../components/Form/Input';
import User from '../../../assets/svg/User';
import Phone from '../../../assets/svg/Phone';
import ListIcon from '../../../assets/svg/ListIcon';
import Button from '../../components/button/Button';
import Gmail from '../../../assets/svg/Gmail';
import {theme} from '../../constants/theme';
import Whatsapp from '../../../assets/svg/Whatsapp';
import Sms from '../../../assets/svg/Sms';
import {useMutation, useQuery} from 'react-query';
import {ContactHandler, GetSettingHandler} from './api';
import {OpenUrlHandler} from '../../constants/helpers';
import {showMessage} from 'react-native-flash-message';
import Email from '../../../assets/svg/Email';
const ContactSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(11, 'Too Short!')
    .max(11, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(10000, 'Too Long!')
    .required('Required'),
});

const Contact = () => {
  const {t} = useTranslation();
  const {data} = useQuery('GetSettingHandler', GetSettingHandler);
  const {handleChange, handleSubmit, handleBlur, values, resetForm, errors} =
    useFormik({
      initialValues: {email: '', name: '', phone: '', message: ''},
      validationSchema: ContactSchema,
      onSubmit: values => {
        mutate(values);
      },
    });
  const {mutate, isLoading} = useMutation(ContactHandler, {
    onError: (error: any) => {
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
    onSuccess: () => {
      resetForm();

      showMessage({
        message: t('Message added successfully'),
        type: 'success',
      });
    },
  });

  return (
    <Container white>
      <Header title={t('Contact us')} />
      <Content>
        <Title>{t('You can send a complaint or suggestion here')}</Title>
        <View style={{marginTop: 20}}>
          <Input
            placeholder={t('The name on the card')}
            LeftContent={User}
            errors={errors}
            name="name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.name}
          />
          <Input
            placeholder={t('Phone')}
            LeftContent={Phone}
            errors={errors}
            name="phone"
            keyboardType={'phone-pad'}
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.phone}
          />
          <Input
            placeholder={t('Email')}
            LeftContent={Email}
            errors={errors}
            name="email"
            keyboardType="email-address"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
          />
          <Input
            placeholder={t('Text of the complaint or suggestion')}
            LeftContent={ListIcon}
            errors={errors}
            name="message"
            handleChange={handleChange}
            handleBlur={handleBlur}
            numberOfLines={10}
            multiline
            value={values.message}
            style={{textAlignVertical: 'top'}}
          />
        </View>
        <Title>{t('For direct contact')}</Title>
        <DirectContactContainer>
          <IconContainer
            onPress={() => {
              OpenUrlHandler(`sms:${data?.data?.settings?.sms}`);
            }}>
            <Sms
              fill={theme.colors.main}
              width={theme.pixel(40)}
              height={theme.pixel(40)}
            />
          </IconContainer>
          <IconContainer
            onPress={() => {
              OpenUrlHandler(`https://wa.me/${data?.data?.settings?.whatsapp}`);
            }}>
            <Whatsapp
              fill={theme.colors.main}
              width={theme.pixel(40)}
              height={theme.pixel(40)}
            />
          </IconContainer>
          <IconContainer
            onPress={() => {
              OpenUrlHandler(`tel:${data?.data?.settings?.phone}`);
            }}>
            <Phone
              fill={theme.colors.main}
              width={theme.pixel(40)}
              height={theme.pixel(40)}
            />
          </IconContainer>
          <IconContainer
            onPress={() => {
              OpenUrlHandler(`mailto:${data?.data?.settings?.email}`);
            }}>
            <Gmail
              fill={theme.colors.main}
              width={theme.pixel(40)}
              height={theme.pixel(40)}
            />
          </IconContainer>
        </DirectContactContainer>
      </Content>
      <Button
        title="Send"
        style={css`
          width: 50%;
          text-align: center;
          margin: ${({theme}) => theme.pixel(25)} auto;
        `}
        onPress={handleSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Contact;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.pixel(24)};
  font-family: ${({theme}) => theme.fonts.bold};
  align-self: center; ;
`;

const DirectContactContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: ${({theme}) => theme.pixel(25)};
`;

const IconContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.pixel(70)};
  height: ${({theme}) => theme.pixel(70)};
  background-color: #f7f7fa;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 ${({theme}) => theme.pixel(10)};
`;
