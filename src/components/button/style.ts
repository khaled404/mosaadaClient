import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-family: ${props => props.theme.fonts.medium};
  ${(props: any) => props.style}
`;

export const TouchableOpacity = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.main};
  padding: 20px;
  border-radius: 50px;
  position: relative;
  ${(props: any) => props.style}
`;
