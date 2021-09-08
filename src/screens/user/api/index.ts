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
  const json = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    password: body.password,
    password_confirmation: body.password,
    dev_token: getUniqueId(),
  };
  const {data} = await axios.post('register', json);
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
  const {data} = await axios.put('profile', {
    ...body,
    dev_token: getUniqueId(),
  });
  return data;
};

export const ChangePasswordHandler = async (body: any) => {
  const {data} = await axios.post('forget-password', body);
  return data;
};
