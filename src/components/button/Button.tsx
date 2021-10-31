import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';
import {IButton} from '../../types/interfaces';
import {TouchableOpacity, Text} from './style';

const Button: FC<IButton> = ({title, onPress, style, textStyle, isLoading}) => {
  const {t} = useTranslation();
  const [isMyPress, setIsMyPress] = useState(false);

  useEffect(() => {
    !isLoading && setIsMyPress(false);
  }, [isLoading]);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
        setIsMyPress(true);
      }}
      style={style}
      activeOpacity={0.7}
      disabled={isLoading}>
      {isLoading && isMyPress ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={textStyle}>{t(title)}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
