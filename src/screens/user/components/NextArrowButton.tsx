import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import ArrowLeft from '../../../../assets/svg/ArrowLeft';
import {NextButton} from '../style';

const NextArrowButton: FC<{isLoading: boolean; onPress: () => void}> = ({
  isLoading,
  onPress,
}) => {
  return (
    <NextButton onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ArrowLeft />
      )}
    </NextButton>
  );
};

export default NextArrowButton;
