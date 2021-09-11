import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.regular};
  ${(props: any) => props.style}
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.main};
  padding: ${({theme}) => theme.pixel(20)};
  border-radius: 50px;
  height: ${({theme}) => theme.pixel(100)};
  position: relative;
  align-items: center;
  justify-content: center;
  ${(props: any) => props.style}
`;
