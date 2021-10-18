import axios from 'axios';
import {useEffect, useState} from 'react';
import {I18nManager} from 'react-native';
import {mapKey} from './config';

type return_type = ReturnType<
  () => [
    name: string,
    setLatLong: (latitude: number, longitude: number) => Promise<void>,
    setname: (name: string) => void,
  ]
>;

export default function (): return_type {
  const [name, setName] = useState('');

  const setLatLong = async (latitude: number, longitude: number) => {
    try {
      const {data} = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&language=${
          I18nManager.isRTL ? 'ar' : 'en'
        }&key=AIzaSyCAOeqyQHM7ZJlO0c-e7VOMU3eUnl8aDJk`,
      );
      data.results.map((item: any) => {
        if (
          item.types[0] === 'neighborhood' ||
          item.types[0] === 'administrative_area_level_2'
        ) {
          setName(item.formatted_address);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return [name, setLatLong, setName];
}
