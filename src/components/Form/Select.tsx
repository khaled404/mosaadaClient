import React, {FC, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Modalize} from 'react-native-modalize';
import {theme} from '../../constants/theme';
import {FlatList, Modal, TouchableOpacity, View} from 'react-native';
import Square from '../../../assets/svg/Square';
import Tick from '../../../assets/svg/Tick';
import {useTranslation} from 'react-i18next';
import DownArrow from '../../../assets/svg/DownArrow';

interface ISelect {
  placeholder: string;
  errors: any;
  name: string;
  handleChange: any;
  handleBlur: any;
  value: any;
  options: Array<{id: number; label: string; price: number}>;
}

const Select: FC<ISelect> = ({
  errors,
  handleBlur,
  handleChange,
  name,
  placeholder,
  options,
  value,
}) => {
  const [isOpen, setisOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const {t} = useTranslation();
  const onSelectValue = (value: {id: number; label: string; price: number}) => {
    setCurrentValue(value.label);
    handleChange(name, value.id);
    setisOpen(e => !e);
  };
  return (
    <>
      <SelectBoxContainer
        onPress={() => {
          setisOpen(e => !e);
        }}
        style={{
          borderColor: errors[name] ? theme.colors.warning : '#f7f7fa',
        }}>
        <Text> {placeholder} </Text>
        <TextValue> {currentValue} </TextValue>
        <DownArrow
          fill={theme.colors.main}
          width={15}
          height={15}
          style={{left: 12}}
        />
      </SelectBoxContainer>
      <Modal animationType="fade" visible={isOpen} transparent>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setisOpen(e => !e);
          }}
          style={{
            paddingTop: theme.screenDimensions.height / 2,
            backgroundColor: theme.colorWithOpacity('#000000', 0.5),
            height: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: '100%',
            }}>
            <FlatList
              data={options}
              contentContainerStyle={{
                backgroundColor: '#fff',
                flex: 1,
                paddingTop: 20,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
              keyExtractor={item => `${item.id}-${item.label}-${item.price}`}
              renderItem={({item}) => {
                const Icon = item.label === currentValue ? Tick : Square;

                return (
                  <Container>
                    <SelectContainer
                      onPress={() => {
                        onSelectValue(item);
                      }}>
                      <View>
                        <SelectTitle>{item.label}</SelectTitle>
                        <PriceTitle>
                          {item.price} {t('L.E')}
                        </PriceTitle>
                      </View>
                      <Icon />
                    </SelectContainer>
                  </Container>
                );
              }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Select;

const SelectBoxContainer = styled.TouchableOpacity`
  background-color: #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${({theme}) => theme.pixel(40)} ${({theme}) => theme.pixel(45)};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({theme}) => theme.pixel(45)};
  border-width: ${({theme}) => theme.pixel(2)};
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
  marginRight: 'auto',
}));

const Container = styled.View`
  /* padding: ${({theme}) => theme.pixel(45)} 0; */
  position: relative;
`;
const SelectContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.gray};
  padding: ${({theme}) => theme.pixel(25)}
    ${({theme}) => theme.pixel(theme.appPaddingHorizontal + 15)};
`;

const SelectTitle = styled.Text`
  color: ${({theme}) => theme.colors.main};
  font-size: ${({theme}) => theme.pixel(35)};
  font-family: ${({theme}) => theme.fonts.regular};
`;

const PriceTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.pixel(25)};
  font-family: ${({theme}) => theme.fonts.regular};
`;
