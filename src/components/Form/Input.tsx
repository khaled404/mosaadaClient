import React, {FC} from 'react';
import styled from 'styled-components/native';
import {sPixel} from '../../constants/pixel';
import {theme} from '../../constants/theme';
import {ITextInput} from '../../types/interfaces';

const Input: FC<ITextInput> = props => {
  const {
    LeftContent = () => <></>,
    RightContent = () => <></>,
    errors,
    name,
    handleChange = () => {},
    handleBlur = () => {},
  } = props;

  return (
    <View>
      <IconContainer>
        <LeftContent
          fill={errors[name] ? theme.colors.warning : theme.colors.main}
        />
      </IconContainer>
      <TextInput
        {...props}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      <IconContainer>
        <RightContent
          fill={errors[name] ? theme.colors.warning : theme.colors.main}
        />
      </IconContainer>
    </View>
  );
};

export default Input;

const View = styled.View`
  background-color: #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${sPixel(15)} 0;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${sPixel(45)};
`;
const IconContainer = styled.View`
  padding: 0 ${sPixel(25)};
`;

const TextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.text,
}))`
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  font-size: ${sPixel(25)};
  width: 100%;
  flex: 1;
` as any;
