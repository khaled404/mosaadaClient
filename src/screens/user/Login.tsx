import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled, {css} from 'styled-components/native';
import Button from '../../components/button/Button';
import {Container, Content} from '../../globalStyle';

const Login: FC = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Content>
        <Button />
      </Content>
    </Container>
  );
};

export default Login;
