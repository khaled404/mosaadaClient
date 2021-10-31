import React, {useState} from 'react';
import {ActivityIndicator, RefreshControl, View} from 'react-native';
import {Container} from '../../globalStyle';
import TabsHeader from '../../components/header/TabsHeader';
import {OrdersContainer, OrdersScroll} from './style';
import OrdersBox from './components/OrdersBox';
import {useInfiniteQuery, useQuery, useQueryClient} from 'react-query';
import {GetOrdersHandler} from './api';
import {theme} from '../../constants/theme';
const Orders = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pageData, setPageData] = useState([]);

  const queryClient = useQueryClient();
  const {data, isLoading, isFetching, refetch} = useQuery(
    ['Orders', pageNum],
    GetOrdersHandler,
    {
      refetchIntervalInBackground: true,
      keepPreviousData: true,

      onSuccess: ({data}) => {
        console.log(data, pageNum, 'data');
        setPageData(e => [...e, ...data]);
      },
    },
  );
  console.log(pageData);

  const loadMoreData = () => {
    setPageNum(e => e + 1);
  };
  return (
    <Container>
      <TabsHeader title="My Orders" />
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
          <ActivityIndicator size="large" color={theme.colors.main} />
        </View>
      ) : (
        <OrdersContainer>
          <OrdersScroll
            data={pageData}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.1}
            refreshControl={
              <RefreshControl
                onRefresh={refetch}
                refreshing={isFetching}
                progressViewOffset={40}
                colors={[theme.colors.main, theme.colors.grayMain]}
              />
            }
            renderItem={({item}: any) => <OrdersBox item={item} />}
          />
        </OrdersContainer>
      )}
    </Container>
  );
};

export default Orders;
