import styled from 'styled-components/native';
import {sPixel} from '../../constants/pixel';
export const HeaderContainer = styled.View`
  padding: ${props => props.theme.statusBarHeight + 15}px
    ${({theme}) => theme.appPaddingHorizontal}px
    ${props => props.theme.statusBarHeight + 80}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
  border-bottom-left-radius: 85px;
  border-bottom-right-radius: 85px;
`;

export const UserContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  overflow: hidden;
`;
export const UserName = styled.Text`
  align-items: center;
  flex-direction: row;
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${sPixel(35)};
  margin-right: ${sPixel(35)};
`;

export const BannerContainer = styled.View`
  height: ${sPixel(270)};
  width: 100%;
  padding: 0 ${sPixel(35)};
`;

export const ServicesTitle = styled.Text`
  text-align: center;
  margin: 0 auto ${sPixel(30)};
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${sPixel(45)};
`;

export const ServicesContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  width: ${({isRow}: any) => (isRow ? '48%' : '100%')};
  background-color: #fff;
  padding: ${sPixel(10)};
  justify-content: flex-start;
  border-radius: 13px;
  margin-bottom: ${sPixel(30)};
` as any;

export const ServicesText = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: ${sPixel(15)};
  font-size: ${sPixel(18)};
`;

export const ServicesName = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${sPixel(20)};
`;
