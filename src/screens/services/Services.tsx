import React from 'react';
import Header from '../../components/header/Header';
import {Container, Content} from '../../globalStyle';
import {EImages} from '../../types/enums';
import InfoBox from './components/InfoBox';
import DateTimeInput from '../../components/Form/DateTimeInput';
import {useQuery} from 'react-query';
import {GetServiceHandler} from './api';
import {useRoute} from '@react-navigation/core';
import Loading from '../../components/loading/Loading';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import FormInputs from '../../components/Form/FormInputs';

type tParams = {params: {servicesId: number}};
export default function Services() {
  const {t} = useTranslation();
  const {params}: tParams = useRoute();

  const {isLoading, data, error} = useQuery(
    ['GetServiceHandler', params.servicesId],
    GetServiceHandler,
  );

  const pageData = data?.data;

  const getInitState = () => {
    let values = {} as any;
    let yupSchema = {} as any;
    for (let index = 0; index < pageData?.inputs?.length; index++) {
      const element = pageData?.inputs[index].id;
      values[element] = '';
      yupSchema[element] = Yup.string().min(1, '').max(500, '').required();
    }
    return {values, yupSchema};
  };

  const {handleChange, handleSubmit, handleBlur, values, errors} = useFormik({
    initialValues: getInitState().values,
    valivalidationSchema: getInitState().yupSchema as any,
    onSubmit: values => {},
  });

  if (isLoading) return <Loading />;
  console.log(pageData);

  return (
    <Container white>
      <Header title={pageData.title} imageURL={pageData.image} />
      <Content>
        <InfoBox
          title={t('About service')}
          description={pageData.description}
        />
        <DateTimeInput />
        <FormInputs
          data={pageData.inputs}
          values={values}
          errors={errors}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </Content>
    </Container>
  );
}
