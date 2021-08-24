import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';
import ChevronLeft from '../../../assets/svg/ChevronLeft';
import {sPixel} from '../../constants/pixel';
import Image from '../image/Image';
interface IHeader {
  title?: String;
  imageURL?: any;
}
const Header: FC<IHeader> = ({title, imageURL}) => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <Right></Right>
      <Title>{title}</Title>
      <Left>
        <TouchableOpacity onPress={goBack}>
          <ChevronLeft />
        </TouchableOpacity>
      </Left>
      <Image style={image} source={imageURL} />
    </Container>
  );
};
const Container = styled.View`
  background-color: #f7f7fa;
  padding: ${props => props.theme.statusBarHeight + 20}px
    ${props => props.theme.appPaddingHorizontal}px ${sPixel(130)};
  border-bottom-left-radius: ${sPixel(180)};
  border-bottom-right-radius: ${sPixel(180)};
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
  font-size: ${sPixel(30)};
  position: relative;
`;
const Left = styled.View`
  width: 25%;
  align-items: flex-end;
`;
const Right = styled.View`
  width: 25%;
  align-items: flex-start;
`;
const image = css`
  position: absolute;
  align-self: center;
  bottom: ${sPixel(-20)};
  width: 101.5px;
  height: 52.3px;
  right: 43%;
`;
export default Header;
