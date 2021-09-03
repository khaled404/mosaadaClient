import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {sPixel} from '../../constants/pixel';
interface ITabsHeader {
  title?: string;
}
const TabsHeader: FC<ITabsHeader> = ({title}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Right></Right>
      <Title>{t(title as any)}</Title>
      <Left></Left>
    </Container>
  );
};
const Container = styled.View`
  background-color: #fff;
  padding: ${props => props.theme.statusBarHeight + 20}px
    ${props => props.theme.appPaddingHorizontal}px 0;
  border-bottom-left-radius: ${sPixel(180)};
  border-bottom-right-radius: ${sPixel(180)};
  flex-direction: row;
  justify-content: space-between;
  height: 22%;
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
export default TabsHeader;
