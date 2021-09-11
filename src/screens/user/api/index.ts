import {Platform} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import axios from '../../../constants/axios';

export const LoginHandler = async (body: any) => {
  const {data} = await axios.post('login', {
    ...body,
    dev_token: getUniqueId(),
  });
  return data;
};

export const RegisterHandler = async (body: any) => {
  let formData = new FormData();
  formData.append('national_image', {
    uri:
      Platform.OS === 'android'
        ? body.national_image.uri
        : body.national_image.uri.replace('file://', ''),
    name: body.national_image.fileName,
    type: body.national_image.type,
  });
  formData.append('name', body.name);
  formData.append('email', body.email);
  formData.append('national_id', body.national_id);
  formData.append('password', body.password);
  formData.append('password_confirmation', body.password);
  formData.append('phone', body.phone);
  formData.append('dev_token', getUniqueId());
  const {data} = await axios.post('register', formData, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return data;
};

export const ForgotPasswordHandler = async (body: any) => {
  const {data} = await axios.post('forget-password', body);
  return data;
};

export const GetUserHandler = async () => {
  const {data} = await axios.get('profile');
  return data;
};

export const EditUserHandler = async (body: any) => {
  let formData = new FormData();

  if (body.avatar) {
    formData.append('avatar', {
      uri:
        Platform.OS === 'android'
          ? body.avatar.uri
          : body.avatar.uri.replace('file://', ''),
      name: body.avatar.fileName,
      type: body.avatar.type,
    });
  }
  formData.append('national_id', body.national_id);

  formData.append('name', body.name);
  formData.append('email', body.email);
  formData.append('phone', body.phone);
  formData.append('dev_token', getUniqueId());

  const {data} = await axios.post('profile', formData, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return data;
};

export const ChangePasswordHandler = async (body: any) => {
  const {data} = await axios.post('forget-password', body);
  return data;
};

export const GetSettingHandler = async (body: any) => {
  const {data} = await axios.get('settings');
  return data;
};

export const ContactHandler = async (body: any) => {
  const {data} = await axios.post('forget-password', {
    ...body,
    contact_type_id: '1',
  });
  return data;
};
