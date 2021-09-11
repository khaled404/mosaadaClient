import React, {FC} from 'react';
import Button from '../../../components/button/Button';
import {css} from 'styled-components';
import styled from 'styled-components/native';
import Image from '../../../components/image/Image';
interface IChangeNational {
  uri: any;
  onChangeHandler: (image: any) => void;
  close: any;
}
const ChangeNational: FC<IChangeNational> = props => {
  const {uri, close} = props;

  return (
    <Container>
      <Image url={uri} style={imageStyle} />
      <Controlers>
        <Button
          title="Close"
          style={css`
            width: 40%;
            text-align: center;
            margin: ${({theme}) => theme.pixel(25)} auto;
          `}
          onPress={close}
        />
      </Controlers>
    </Container>
  );
};

export default ChangeNational;

const Container = styled.View`
  flex: 1;
  padding: ${({theme}) => theme.pixel(10)}
    ${({theme}) => theme.appPaddingHorizontal}px;
  height: 100%;
`;
const Controlers = styled.View`
  padding: ${({theme}) => theme.pixel(10)} 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const imageStyle = css(({theme}) => ({
  width: '100%',
  height: theme.pixel(540),
  marginBottom: theme.pixel(20),
}));
