import React, {FC} from 'react';
import {View} from 'react-native';
import styled, {css} from 'styled-components/native';
import Input from '../../../components/Form/Input';
import Image from '../../../components/image/Image';
import {theme} from '../../../constants/theme';
import {ITextInput} from '../../../types/interfaces';

interface IProfileInput extends ITextInput {
  ProfileIcon: any;
  iamgeNational?: boolean;
  onPress?: () => void | undefined;
}
const ProfileInput: FC<IProfileInput> = props => {
  const {ProfileIcon, placeholder, editable, iamgeNational, value, onPress} =
    props;
  return (
    <Container onPress={onPress} activeOpacity={!!onPress ? 0.5 : 1}>
      <IconContainer>
        <ProfileIcon
          width={theme.pixel(40)}
          height={theme.pixel(40)}
          fill={theme.colors.main}
        />
      </IconContainer>
      <View style={{flex: 1}}>
        <Title>{placeholder}</Title>
        {iamgeNational ? (
          <Image
            url={value}
            style={css`
              width: ${({theme}) => theme.pixel(240)};
              height: ${({theme}) => theme.pixel(240)};
              padding: ${({theme}) => theme.pixel(30)};
            `}
          />
        ) : (
          <Input
            {...props}
            removeStyle={true}
            isEdit={editable}
            style={{
              color: theme.colors.main,
              fontFamily: theme.fonts.bold,
              textAlign: theme.left,
            }}
          />
        )}
      </View>
    </Container>
  );
};

export default ProfileInput;

const Container = styled.TouchableOpacity`
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
  padding-right: ${({theme}) => theme.pixel(40)};
`;
