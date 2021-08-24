import styled from 'styled-components/native';

export const Title = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.bold,
  paddingTop: theme.pixel(55),
  paddingBottom: theme.pixel(18),
}));
