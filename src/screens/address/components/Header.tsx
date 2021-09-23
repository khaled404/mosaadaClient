import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import ChevronLeft from '../../../../assets/svg/ChevronLeft';

interface IHeader {
  title?: String;
}
const Header: FC<IHeader> = ({title}) => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <Right></Right>
      <Title>{title}</Title>
      <Left onPress={goBack}>
        <ChevronLeft />
      </Left>
    </Container>
  );
};
const Container = styled.View`
  background-color: #f7f7fa;
  padding: ${props => props.theme.statusBarHeight + 20}px
    ${props => props.theme.appPaddingHorizontal}px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${({theme}) => theme.pixel(30)};
  position: relative;
`;
const Left = styled.TouchableOpacity`
  width: 25%;
  align-items: flex-end;
`;
const Right = styled.View`
  width: 25%;
  align-items: flex-start;
`;

export default Header;
