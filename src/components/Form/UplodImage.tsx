import React, {FC, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import styled from 'styled-components/native';
import {sPixel} from '../../constants/pixel';
import {theme} from '../../constants/theme';

interface IUplodImage {
  LeftContent?: any;
  RightContent?: any;
  errors?: any;
  name: string;
  handleChange?: any;
  handleBlur?: any;
  placeholder?: string;
}

const UplodImage: FC<IUplodImage> = props => {
  const {
    LeftContent = () => <></>,
    RightContent = () => <></>,
    errors,
    name,
    handleChange = () => {},
    placeholder,
  } = props;
  const [imageName, setImageName] = useState(placeholder);
  const picImageHandler = async () => {
    try {
      launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 0.5,
        },
        (response: any) => {
          if (response?.assets) {
            handleChange(response.assets[0]);
            setImageName(response.assets[0].fileName);
          }
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View onPress={picImageHandler}>
      <IconContainer>
        <LeftContent
          fill={errors[name] ? theme.colors.warning : theme.colors.main}
          width={theme.pixel(40)}
          height={theme.pixel(40)}
        />

        <Title numberOfLines={1}>{imageName}</Title>
      </IconContainer>

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

export default UplodImage;

const View = styled.TouchableOpacity`
  background-color: #f7f7fa;
  width: 100%;
  border-radius: 100px;
  padding: ${sPixel(36)} 0;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${sPixel(45)};
  justify-content: space-between;
`;
const IconContainer = styled.View`
  padding: 0 ${sPixel(25)};
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.pixel(25)};
  max-width: 80%;
  overflow: hidden;
  padding: 0 ${sPixel(20)};
`;
