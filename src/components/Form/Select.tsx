import React, {FC} from 'react';
import styled from 'styled-components/native';

interface ISelect {
  placeholder: string;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  value: any;
}

const Select: FC<ISelect> = ({
  errors,
  handleBlur,
  handleChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <>
      <View>
        <Text> {placeholder} </Text>
        <TextValue> {placeholder} </TextValue>
      </View>
    </>
  );
};

export default Select;

const View = styled.TouchableOpacity`
  background-color: #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${({theme}) => theme.pixel(40)} ${({theme}) => theme.pixel(45)};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({theme}) => theme.pixel(45)};
`;

const Text = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.bold,
}));

const TextValue = styled.Text(({theme}) => ({
  color: theme.colors.text,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.regular,
}));
