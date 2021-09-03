import React, {FC} from 'react';
import styled from 'styled-components/native';
interface ISettingsBox {
  Icon: () => JSX.Element;
  title: string;
  withBorder?: boolean;
}
const SettingsBox: FC<ISettingsBox> = ({Icon, title, withBorder = true}) => {
  return (
    <Container withBorder={withBorder}>
      <Content>
        <Icon />
        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default SettingsBox;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  padding: ${({theme}) => theme.pixel(35)} 0;
`;

const Content = styled.View`
  padding: 0 ${({theme}) => theme.pixel(25)};
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.pixel(35)};
  font-family: ${({theme}) => theme.fonts.bold};
`;
