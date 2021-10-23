import React, {useEffect, useRef, useState} from 'react';
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
import SelectLocation from '../../components/Form/SelectLocation';
import {Modalize} from 'react-native-modalize';
import {theme} from '../../constants/theme';
import useAddressName from '../../constants/useAddressName';
import {GetAddressHandler} from '../address/api';
import {Text} from 'react-native';
import ServiceLocationBox from './components/ServiceLocationBox';
import AddressBox from './components/AddressBox';
import Button from '../../components/button/Button';

type tParams = {params: {servicesId: number}};
export default function Services() {
  const {t} = useTranslation();
  const location = useRef<Modalize>();
  const {params}: tParams = useRoute();
  const [initialValues, setInitialValues] = useState({
    values: {},
    yupSchema: {},
  });
  const {isLoading, data, error} = useQuery(
    ['GetServiceHandler', params.servicesId],
    GetServiceHandler,
  );
  const [addressName, setAddressName, setName] = useAddressName();
  const {handleChange, setValues, handleBlur, values, errors} = useFormik({
    initialValues: initialValues.values,
    enableReinitialize: true,
    valivalidationSchema: initialValues.yupSchema,

    onSubmit: values => {},
  });

  const address = useQuery('GetAddressHandler', GetAddressHandler);

  const pageData = data?.data;

  const getInitState = () => {
    let initValues = {} as any;
    let yupSchema = {} as any;
    for (let index = 0; index < pageData?.inputs?.length; index++) {
      const element = pageData?.inputs[index].id;
      initValues[element] = '';
      yupSchema[element] = Yup.string().min(1, '').max(500, '').required();
    }
    setInitialValues({
      values: {
        ...initValues,
        coords: {
          lat: '',
          lng: '',
        },
        date: new Date(),
        attr: [],
      },
      yupSchema,
    });
  };

  useEffect(() => {
    getInitState();
  }, [pageData]);

  if (isLoading) return <Loading />;
  const a = {
    order_date: '12-12-2020',
    order_time: '10:00',
    services_id: 1,
    provider_id: 2,
    lat: 32.5555,
    lng: 23.3333,
    attr: [1],
  };
  console.log(values, 'values');
  const changeValue = (name: string, val: any) => {
    setValues(e => ({
      ...e,
      [name]: val,
    }));
  };
  return (
    <>
      <Container
        white
        style={{
          paddingBottom: 30,
        }}>
        <Header title={pageData.title} imageURL={pageData.image} />
        <Content>
          <InfoBox
            title={t('About service')}
            description={pageData.description}
          />
          <InfoBox title={t('Service Appointment')} />
          <DateTimeInput
            handleChange={changeValue}
            values={values}
            errors={errors}
            name="date"
          />
          {pageData.take_location === 1 && (
            <>
              <InfoBox title={t('Service Location')} />
              <SelectLocation
                values={values}
                errors={errors}
                handleChange={changeValue}
                name="coords"
                handleBlur={handleBlur}
                onPress={location.current?.open}
                addressName={addressName}
                setAddressName={setAddressName}
              />
            </>
          )}
          <FormInputs
            data={pageData.inputs}
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Content>
        <Button
          title="Confirmation"
          style={{width: '50%', margin: 'auto'}}
          onPress={() => {}}
        />
      </Container>

      <Modalize
        ref={location}
        modalStyle={{marginTop: theme.statusBarHeight + 30}}
        snapPoint={theme.screenDimensions.height / 1.5}
        HeaderComponent={() => <ServiceLocationBox />}
        flatListProps={{
          data: address?.data?.data,
          renderItem: ({item}) => (
            <AddressBox
              {...item}
              onPress={addres => {
                setName(addres.name);
                location.current?.close();
              }}
            />
          ),
          contentContainerStyle: {
            paddingHorizontal: theme.appPaddingHorizontal,
          },
        }}
      />
    </>
  );
}
