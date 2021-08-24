import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Title} from '../style';
interface IInfoBox {
  title: String;
  description: String;
}
const InfoBox: FC<IInfoBox> = ({title, description}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default InfoBox;
const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Description = styled.Text`
  text-align: center;
  font-size: ${({theme}) => theme.pixel(22)};
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  line-height: 20px;
`;
