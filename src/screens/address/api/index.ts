import Axios from '../../../constants/axios';

export const GetAddressHandler = async () => {
  const {data} = await Axios.get('profile/address');
  return data;
};

export const EditAddressHandler = async (body: any) => {
  const {data} = await Axios.post(`profile/address/${body.id}/update`, body);
  return data;
};

export const AddAddressHandler = async (body: any) => {
  const {data} = await Axios.post('profile/address', body);
  return data;
};

export const DeleteAddressHandler = async (body: any) => {
  const {data} = await Axios.delete(`profile/address/${body.id}/delete`);
  return data;
};
