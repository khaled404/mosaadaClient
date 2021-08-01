import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {IButton} from '../../types/interfaces';
import {TouchableOpacity, Text} from './style';

const Button: FC<IButton> = ({title, onPress, style, textStyle, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      activeOpacity={0.7}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
