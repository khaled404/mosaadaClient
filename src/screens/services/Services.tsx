import React, {useEffect, useRef, useState} from 'react';
import Header from '../../components/header/Header';
import {Container, Content} from '../../globalStyle';
import InfoBox from './components/InfoBox';
import DateTimeInput from '../../components/Form/DateTimeInput';
import {useQuery} from 'react-query';
import {GetServiceHandler} from './api';
import {useNavigation, useRoute} from '@react-navigation/core';
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
import ServiceLocationBox from './components/ServiceLocationBox';
import AddressBox from './components/AddressBox';
import Button from '../../components/button/Button';
import {DateTime} from 'luxon';

type tParams = {params: {servicesId: number}};
export default function Services() {
  const {t} = useTranslation();
  const location = useRef<Modalize>();
  const {params}: tParams = useRoute();
  const {navigate} = useNavigation();
  const [initialValues, setInitialValues] = useState({
    values: {},
    yupSchema: {
      coords: {
        lat: Yup.number()
          .min(1, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lng: Yup.number()
          .min(1, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
      },
      date: Yup.date().required('Required'),
      attr: Yup.array().required('Required'),
    },
  });
  const {isLoading, data, error} = useQuery(
    ['GetServiceHandler', params.servicesId],
    GetServiceHandler,
  );
  const [addressName, setAddressName, setName] = useAddressName();
  const {handleChange, setValues, handleBlur, values, errors, handleSubmit} =
    useFormik({
      initialValues: initialValues.values,
      enableReinitialize: true,
      valivalidationSchema: initialValues.yupSchema,

      onSubmit: values => {
        const date = DateTime.fromJSDate(values?.date);
        const formatDate = `${date.day}-${date.month}-${date.year}`;
        const formatTime = `${date.hour}:${date.minute}`;
        const newAttr = [];
        const arrayOfKeys = Object.keys(values);

        for (let index = 0; index < arrayOfKeys.length; index++) {
          const element = arrayOfKeys[index];
          console.log('NaN');
          if (!isNaN(+element)) {
            newAttr.push(values[element]);
          }
        }
        console.log(values);

        const body = {
          order_date: formatDate,
          order_time: formatTime,
          lat: values.coords?.lat,
          lng: values.coords?.lng,
          attr: newAttr,
          services_id: params.servicesId,
        };

        if (data?.data?.tender) {
          return navigate('TenderMap', {id: params.servicesId, body: body});
        }
      },
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
            changeValue={changeValue}
            handleBlur={handleBlur}
          />
        </Content>
        <Button
          title="Confirmation"
          style={{width: '50%', margin: 'auto'}}
          onPress={handleSubmit}
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
              onPress={adders => {
                setName(adders.name);
                changeValue('coords', {
                  lat: adders.lat,
                  lng: adders.lng,
                });
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
