import styled from 'styled-components/native';
import {pixel, sPixel} from '../../constants/pixel';

export const LogoContainer = styled.View`
  padding: ${props => props.theme.statusBarHeight + pixel(70)}px 0 ${sPixel(70)};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.medium};
  margin-top: ${sPixel(93)};
  font-size: ${sPixel(25)};
  margin-bottom: ${sPixel(120)};
`;

export const Content = styled.View`
  width: 100%;
  height: 85%;
  background-color: #fff;
  border-bottom-left-radius: 180px;
  border-bottom-right-radius: 180px;
  position: relative;
  padding: 0 ${sPixel(30)};
  position: relative;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  margin: ${sPixel(44)} auto 0;
`;

export const ForgotPassword = styled.Text`
  color: ${props => props.theme.colors.warning};
  font-family: ${props => props.theme.fonts.bold};
  text-decoration: underline;
`;

export const NextButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.7,
}))`
  width: ${sPixel(120)};
  height: ${sPixel(120)};
  border-radius: 50px;
  background-color: ${props => props.theme.colors.main};
  align-items: center;
  justify-content: center;
  margin: auto auto 0;
  position: absolute;
  bottom: -${sPixel(40)};
  left: 45%;
`;

export const RegisterContainer = styled.TouchableOpacity`
  margin: auto auto 0;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${sPixel(70)};
`;
export const RegisterText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${sPixel(25)};
  margin-end: ${sPixel(8)};
  color: ${props => props.theme.colors.grayMain};
`;

export const RegisterTextTow = styled.Text`
  color: ${props => props.theme.colors.main};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${sPixel(25)};
`;
