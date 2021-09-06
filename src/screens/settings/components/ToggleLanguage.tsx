import React, {FC} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../constants/theme';
interface IToggleLanguage {
  title: string;
  onPress?: () => void;
  Icon: any;
}
const ToggleLanguage: FC<IToggleLanguage> = ({title, onPress, Icon}) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Icon />
    </Container>
  );
};

export default ToggleLanguage;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  padding: ${({theme}) => theme.pixel(25)}
    ${({theme}) => theme.pixel(theme.appPaddingHorizontal + 15)};
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.pixel(35)};
  font-family: ${({theme}) => theme.fonts.regular};
`;
