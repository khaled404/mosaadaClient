import Axios from '../../../constants/axios';

export const GetHomeHandler = async () => {
  const {data} = await Axios.get('home');
  return data;
};
