import React, {FC} from 'react';
import styled from 'styled-components/native';
import {pixel, sPixel} from '../../constants/pixel';
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
    removeStyle = false,
    isEdit = false,
    multiline,
  } = props;

  return (
    <View removeStyle={removeStyle} multiline={multiline} isEdit={isEdit}>
      <IconContainer>
        <LeftContent
          fill={errors[name] ? theme.colors.warning : theme.colors.main}
          width={theme.pixel(40)}
          height={theme.pixel(40)}
          style={multiline ? {marginTop: pixel(20)} : {}}
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
          width={theme.pixel(40)}
          height={theme.pixel(40)}
        />
      </IconContainer>
    </View>
  );
};

export default Input;

const View = styled.View`
  ${({removeStyle}) =>
    removeStyle
      ? ''
      : `
  background-color:  #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${sPixel(15)} 0;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${sPixel(45)};
`}

  ${({multiline, theme}) =>
    multiline
      ? `
      align-items: flex-start;
      border-radius: 30px;

      `
      : ''}

  ${({isEdit, theme}) =>
    isEdit
      ? `
      border-bottom-width:1px ;
      border-bottom-color:${theme.colors.text} ;
    `
      : ''}
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
  text-align: ${({theme}) => theme.left};
` as any;
