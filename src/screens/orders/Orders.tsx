import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../globalStyle';
import TabsHeader from '../../components/header/TabsHeader';
import {OrdersContainer, OrdersScroll} from './style';
import OrdersBox from './components/OrdersBox';
const Orders = () => {
  return (
    <Container>
      <TabsHeader title="My Orders" />
      <OrdersContainer>
        <OrdersScroll
          data={[{}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <OrdersBox />}
          keyExtractor={(_, i) => i.toString()}
        />
      </OrdersContainer>
    </Container>
  );
};

export default Orders;
