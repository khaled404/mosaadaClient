import React, {FC} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import MapPin from '../../../../assets/svg/MapPin';
import {pixel} from '../../../constants/pixel';
import {theme} from '../../../constants/theme';

const AddressBox: FC<{
  onPress: (obj: {lat: number; lng: number; name: string}) => void;
  name: string;
  address_name: string;
  id: string;
  lat: string;
  lng: string;
}> = props => {
  const {address_name, name, id, onPress, lat, lng} = props;

  return (
    <Container
      onPress={() =>
        onPress({
          lat: +lat,
          lng: +lng,
          name: name,
        })
      }>
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
