import React, {FC} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../constants/theme';
interface ISettingsBox {
  Icon: any;
  title: string;
  withBorder?: boolean;
  onPress?: () => void;
}
const SettingsBox: FC<ISettingsBox> = ({Icon, title, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Content>
        <View
          style={{width: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Icon fill={theme.colors.main} />
        </View>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default SettingsBox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  padding: ${({theme}) => theme.pixel(25)} 0;
`;

const Content = styled.View`
  padding: 0 ${({theme}) => theme.pixel(25)};
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.pixel(35)};
  font-family: ${({theme}) => theme.fonts.bold};
  padding-${({theme}) => theme.left}: ${({theme}) => theme.pixel(60)};
`;
