import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import Input from './Input';
import Select from './Select';

interface IForm {
  data?: Array<any>;
  values?: any;
  errors?: any;
  handleChange?: any;
  handleBlur?: any;
}
enum Inputs {
  Text = 'text',
  Select = 'select',
}

const FormInputs: FC<IForm> = props => {
  const {
    data,
    errors,
    values,
    handleChange = () => {},
    handleBlur = () => {},
  } = props;
  const {t} = useTranslation();
  return (
    <>
      <Title>{t('Service details')}</Title>
      {data?.map(item => {
        if (item.input_type === Inputs.Text) {
          return (
            <Input
              key={item.id}
              placeholder={item.placeholder}
              errors={errors}
              name={item.id.toString()}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values[item.id.toString()]}
            />
          );
        }

        if (item.input_type === Inputs.Select) {
          return (
            <Select
              key={item.id}
              placeholder={item.placeholder}
              errors={errors}
              name={item.id.toString()}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values[item.id.toString()]}
            />
          );
        }
      })}
    </>
  );
};

export default FormInputs;

export const Title = styled.Text(({theme}) => ({
  color: theme.colors.main,
  fontSize: theme.pixel(25),
  fontFamily: theme.fonts.bold,
  paddingTop: theme.pixel(55),
  paddingBottom: theme.pixel(26),
  textAlign: 'center',
}));
