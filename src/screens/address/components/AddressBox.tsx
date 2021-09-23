import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useMutation, useQueryClient} from 'react-query';
import styled from 'styled-components/native';
import Delete from '../../../../assets/svg/Delete';
import Edit from '../../../../assets/svg/Edit';
import MapPin from '../../../../assets/svg/MapPin';
import {pixel} from '../../../constants/pixel';
import {theme} from '../../../constants/theme';
import {DeleteAddressHandler} from '../api';

const AddressBox: FC<{
  onPress: () => void;
  name: string;
  address_name: string;
  id: string;
}> = ({address_name, name, id, onPress}) => {
  const queryClient = useQueryClient();
  const {t} = useTranslation();
  const {mutate, isLoading} = useMutation(DeleteAddressHandler, {
    onError: (error: any) => {
      console.log(error?.response);

      showMessage({
        message: error?.response?.data?.message,
        type: 'danger',
      });
    },
    onSuccess: data => {
      showMessage({
        message: t('Deleted successfully'),
        type: 'success',
      });
      queryClient.refetchQueries('GetAddressHandler');
    },
  });
  return (
    <Container onPress={onPress}>
      <InfoBox>
        <MapPin
          fill={theme.colors.main}
          width={theme.pixel(60)}
          height={theme.pixel(60)}
        />
        <View style={{paddingHorizontal: pixel(20)}}>
          <Title numberOfLines={1}>{name}</Title>
          <SubTitle numberOfLines={1}>{address_name}</SubTitle>
        </View>
      </InfoBox>
      <ControlsBox>
        <View style={{width: pixel(80), paddingHorizontal: pixel(20)}}>
          <Edit
            fill={theme.colors.main}
            width={theme.pixel(40)}
            height={theme.pixel(40)}
          />
        </View>
        <View style={{width: pixel(80)}}>
          {isLoading ? (
            <ActivityIndicator size="small" color={theme.colors.warning} />
          ) : (
            <TouchableOpacity
              style={{paddingHorizontal: pixel(20)}}
              onPress={() => mutate({id})}>
              <Delete
                fill={theme.colors.warning}
                width={theme.pixel(40)}
                height={theme.pixel(40)}
              />
            </TouchableOpacity>
          )}
        </View>
      </ControlsBox>
    </Container>
  );
};

export default AddressBox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${({theme}) => theme.pixel(40)};
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7fa;
  border: solid 1px rgba(112, 112, 112, 0.08);
  padding: ${({theme}) => theme.pixel(25)};
  border-radius: 20px;
`;

const InfoBox = styled.View`
  flex: 0.6;
  flex-direction: row;
  align-items: center;
`;
const ControlsBox = styled.View`
  flex: 0.4;
  flex-direction: row;
  justify-content: flex-end;
`;

const Title = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.main,
  fontSize: theme.pixel(27),
  paddingBottom: theme.pixel(20),
  textAlign: theme.right,
}));
const SubTitle = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.grayMain,
  fontSize: theme.pixel(20),
  textAlign: theme.right,
}));
