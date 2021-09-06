import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import styled, {css} from 'styled-components/native';
import ChevronLeft from '../../../../assets/svg/ChevronLeft';
import Edit from '../../../../assets/svg/Edit';
import Image from '../../../components/image/Image';
interface IProfileHeader {
  imageURL?: any;
  onPress?: () => void;
}
const ProfileHeader: FC<IProfileHeader> = ({imageURL, onPress}) => {
  const {goBack} = useNavigation();
  return (
    <Container>
      <ImageContainer onPress={onPress}>
        <Image style={image} url={imageURL} />
        <IconContainer>
          <Edit width={15} height={15} fill="#fff" />
        </IconContainer>
      </ImageContainer>
      <TouchableOpacity onPress={goBack}>
        <ChevronLeft />
      </TouchableOpacity>
    </Container>
  );
};
const Container = styled.View`
  background-color: #fff;
  padding: ${props => props.theme.statusBarHeight + 50}px
    ${props => props.theme.appPaddingHorizontal}px
    ${({theme}) => theme.pixel(200)};
  border-bottom-left-radius: ${({theme}) => theme.pixel(180)};
  border-bottom-right-radius: ${({theme}) => theme.pixel(180)};
  flex-direction: row;
  position: relative;
  justify-content: center;
`;
const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: ${({theme}) => theme.statusBarHeight + 10}px;
  right: ${({theme}) => theme.appPaddingHorizontal}px;
`;
const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: ${({theme}) => theme.pixel(75)};
  width: ${({theme}) => theme.pixel(50)};
  height: ${({theme}) => theme.pixel(50)};
  border-radius: ${({theme}) => theme.pixel(10)};
  background-color: ${({theme}) => theme.colors.main};
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.TouchableOpacity`
  overflow: hidden;
  border-radius: 100px;
  align-self: center;
  width: 100px;
  height: 100px;
  position: relative;
`;

const image = css`
  width: 100px;
  height: 100px;
`;
export default ProfileHeader;
