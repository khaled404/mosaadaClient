import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';
import {IButton} from '../../types/interfaces';
import {TouchableOpacity, Text} from './style';

const Button: FC<IButton> = ({title, onPress, style, textStyle, isLoading}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      activeOpacity={0.7}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={textStyle}>{t(title)}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
