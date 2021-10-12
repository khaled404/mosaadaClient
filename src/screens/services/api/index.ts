import Axios from '../../../constants/axios';
import {query} from '../../../types/types';

export const GetServiceHandler = async ({queryKey}: query) => {
  const {data} = await Axios.get('services/' + queryKey[1]);
  return data;
};
