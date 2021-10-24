import Axios from '../../../constants/axios';
import {query} from '../../../types/types';

export const GetServiceHandler = async ({queryKey}: query) => {
  const {data} = await Axios.get('services/' + queryKey[1]);
  return data;
};

export const GetProvidersHandler = async ({queryKey}: query) => {
  const {data} = await Axios.post(
    `services/${queryKey[1].id}/providers`,
    queryKey[1].body,
  );
  return data;
};
