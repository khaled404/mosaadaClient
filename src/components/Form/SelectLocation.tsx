import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {theme} from '../../constants/theme';
import {useTranslation} from 'react-i18next';
import Geolocation from 'react-native-geolocation-service';
import {showMessage} from 'react-native-flash-message';
import useAddressName from '../../constants/useAddressName';
import MapPin from '../../../assets/svg/MapPin';
import DownArrow from '../../../assets/svg/DownArrow';

interface ISelectLocation {
  placeholder: string;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  value: any;
  options: Array<{id: number; label: string; price: number}>;
  onPress: any;
  setAddressName: (lat: number, long: number) => void;
  addressName: string;
}

const SelectLocation: FC<ISelectLocation> = ({
  errors,
  onPress,
  name,
  addressName,
  setAddressName,
  handleChange,
}) => {
  const {t} = useTranslation();
  const [initCoords, setInitCoords] = useState<any>({
    lat: '',
    long: '',
  });

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      async ({coords}) => {
        handleChange(name, {lat: coords.latitude, lng: coords.longitude});
        await setAddressName(coords.latitude, coords.longitude);
      },
      error => {
        // See error code charts below.

        showMessage({
          type: 'danger',
          message: error.message,
        });
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getMyLocation();
  }, []);

  return (
    <>
      <SelectBoxContainer
        onPress={onPress}
        style={{
          borderColor: errors[name] ? theme.colors.warning : '#f7f7fa',
        }}>
        <MapPin
          fill={theme.colors.main}
          width={20}
          height={20}
          style={{right: 5}}
        />

        <Text> {t('Location')} </Text>
        <TextValue>{addressName}</TextValue>
        <DownArrow
          fill={theme.colors.main}
          width={15}
          height={15}
          style={{left: 12}}
        />
      </SelectBoxContainer>
    </>
  );
};

export default SelectLocation;

const SelectBoxContainer = styled.TouchableOpacity`
  background-color: #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${({theme}) => theme.pixel(40)} ${({theme}) => theme.pixel(45)};
  flex-direction: row;
  align-items: center;
  border-width: ${({theme}) => theme.pixel(2)};
`;

const Text = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.bold,
}));

const TextValue = styled.Text(({theme}) => ({
  color: theme.colors.text,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.regular,
  marginRight: 'auto',
}));
