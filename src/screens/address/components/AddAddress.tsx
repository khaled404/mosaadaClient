import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import AddIcon from '../../../../assets/svg/AddIcon';
import MapPin from '../../../../assets/svg/MapPin';
import {theme} from '../../../constants/theme';

const AddAddress: FC<{onPress: () => void}> = ({onPress}) => {
  const {t} = useTranslation();
  return (
    <Container onPress={onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <MapPin
          fill={theme.colors.main}
          width={theme.pixel(60)}
          height={theme.pixel(60)}
        />
        <Title numberOfLines={1}>{t('Add new ddress')}</Title>
      </View>
      <AddIcon />
    </Container>
  );
};

export default AddAddress;
const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin-bottom: ${({theme}) => theme.pixel(20)};
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: ${({theme}) => theme.pixel(25)};
`;
const Title = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  color: theme.colors.main,
  fontSize: theme.pixel(20),
  paddingHorizontal: theme.pixel(20),
}));
