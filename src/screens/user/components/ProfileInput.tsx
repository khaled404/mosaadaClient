import React, {FC} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import User from '../../../../assets/svg/User';
import Input from '../../../components/Form/Input';
import {theme} from '../../../constants/theme';
import {ITextInput} from '../../../types/interfaces';

interface IProfileInput extends ITextInput {
  ProfileIcon: any;
}
const ProfileInput: FC<IProfileInput> = props => {
  const {ProfileIcon, placeholder, editable} = props;
  return (
    <Container>
      <IconContainer>
        <ProfileIcon
          width={theme.pixel(40)}
          height={theme.pixel(40)}
          fill={theme.colors.main}
        />
      </IconContainer>
      <View style={{flex: 1}}>
        <Title>{placeholder}</Title>
        <Input
          {...props}
          removeStyle={true}
          isEdit={editable}
          style={{
            color: theme.colors.main,
            fontFamily: theme.fonts.bold,
            textAlign: 'right',
          }}
        />
      </View>
    </Container>
  );
};

export default ProfileInput;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${({theme}) => theme.pixel(35)} ${({theme}) => theme.pixel(15)};
`;

const Title = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.regular,
  fontSize: theme.pixel(20),
  marginBottom: theme.pixel(-17),
  paddingTop: theme.pixel(10),
  color: theme.colors.text,
}));

const IconContainer = styled.View` 
  padding-${({theme}) => theme.left}:${({theme}) => theme.pixel(40)};
`;
