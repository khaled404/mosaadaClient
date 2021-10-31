import React, {FC, useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components/native';
import Calendar from '../../../assets/svg/Calendar';
import {theme} from '../../constants/theme';
import {DateTime} from 'luxon';
import {I18nManager} from 'react-native';
import {useTranslation} from 'react-i18next';
import Clock from '../../../assets/svg/Clock';
import DownArrow from '../../../assets/svg/DownArrow';
const {isRTL} = I18nManager;
interface IDateInput {
  containerStyle?: string;
  inputstyle?: string;
  errors?: any;
  touched?: any;
  name: string;
  handleChange?: any;
  handleBlur?: any;
  values?: any;
}

const DateInput: FC<IDateInput> = props => {
  const {errors, name, handleChange, handleBlur} = props;
  const [isActive, setIsActive] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const {t} = useTranslation();
  const dateTimeModeHandler = (modeName: string) => {
    setMode(modeName);
    setIsActive(true);
  };
  const DateFormta = () => {
    const day = DateTime.fromJSDate(dateTime).setLocale(isRTL ? 'ar' : 'en');
    return `${day.weekdayShort} ${day.day} ${day.monthLong}`;
  };
  useEffect(() => {
    handleChange(name, dateTime);
  }, [dateTime]);
  return (
    <Container>
      <Box
        onPress={() => {
          dateTimeModeHandler('date');
        }}>
        <Calendar fill={theme.colors.main} />
        <Title>{t('Day')}</Title>
        <DateAndTimeText>{DateFormta()}</DateAndTimeText>
        <DownArrow fill={theme.colors.main} width={15} height={15} />
      </Box>
      <Box
        onPress={() => {
          dateTimeModeHandler('time');
        }}>
        <Clock fill={theme.colors.main} />
        <Title>{t('Time')}</Title>
        <DateAndTimeText>
          {DateTime.fromJSDate(dateTime)
            .setLocale(isRTL ? 'ar' : 'en')
            .toFormat('hh:mm a')}
        </DateAndTimeText>
        <DownArrow fill={theme.colors.main} width={15} height={15} />
      </Box>
      {isActive && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={mode as any}
          value={new Date(dateTime)}
          minimumDate={new Date()}
          is24Hour={false}
          display="default"
          onChange={(item: any) => {
            setIsActive(false);
            setDateTime(e =>
              item.nativeEvent.timestamp ? item.nativeEvent.timestamp : e,
            );
          }}
        />
      )}
    </Container>
  );
};

export default DateInput;
const Box = styled.TouchableOpacity`
  background-color: #f7f7fa;
  width: 48%;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.pixel(23)} ${({theme}) => theme.pixel(17)};
`;
const Container = styled.View`
  padding-top: ${({theme}) => theme.pixel(40)};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const DateAndTimeText = styled.Text`
  color: #b4b4d5;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.pixel(17)};
  margin-right: auto;
`;
const Title = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.pixel(19)};
  padding: 0 ${({theme}) => theme.pixel(15)};
`;
