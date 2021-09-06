import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import Image from '../../../components/image/Image';
interface IHeader {
  title?: String;
  imageURL?: any;
}
const Header: FC<IHeader> = ({title, imageURL}) => {
  const {navigate} = useNavigation();
  return (
    <Container
      onPress={() => {
        navigate('Profile');
      }}>
      <ImageContainer>
        <Image style={image} url={imageURL} />
      </ImageContainer>
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  );
};
const Container = styled.TouchableOpacity`
  background-color: #fff;
  padding: ${props => props.theme.statusBarHeight + 50}px
    ${props => props.theme.appPaddingHorizontal}px
    ${({theme}) => theme.pixel(200)};
  border-bottom-left-radius: ${({theme}) => theme.pixel(180)};
  border-bottom-right-radius: ${({theme}) => theme.pixel(180)};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${({theme}) => theme.pixel(35)};
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;
const ImageContainer = styled.View`
  margin-bottom: ${({theme}) => theme.pixel(15)};
  overflow: hidden;
  border-radius: 100px;
  align-self: center;
  width: 81px;
  height: 81px;
`;

const image = css`
  width: 83px;
  height: 83px;
`;
export default Header;
