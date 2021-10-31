import Axios from '../../../constants/axios';
import {query} from '../../../types/types';

export const GetOrdersHandler = async ({queryKey}: query) => {
  const {data} = await Axios.get('order?page=' + queryKey[1]);
  return data;
};

export const showOrderHandler = async ({queryKey}: query) => {
  const {data} = await Axios.get(`order/${queryKey[1]}`);
  return data;
};
