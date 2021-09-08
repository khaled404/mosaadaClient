import React, {FC} from 'react';
import styled from 'styled-components/native';
import Bill from '../../../assets/svg/Bill';
import Gear from '../../../assets/svg/Gear';
import HomeIcon from '../../../assets/svg/HomeIcon';
import ListIcon from '../../../assets/svg/ListIcon';
import WalletIcon from '../../../assets/svg/WalletIcon';
import {pixel, sPixel} from '../../constants/pixel';
import {theme} from '../../constants/theme';

const BottomTabs: FC<any> = props => {
  const {
    navigation,
    navigationState: {routes, index},
  } = props;
  const Tabs = {
    HomeTab: HomeIcon,
    Wallet: WalletIcon,
    Orders: ListIcon,
    Notifications: Bill,
    Settings: Gear,
  };
  return (
    <TabsContainer>
      {routes.map((item: {name: String}, i: number) => {
        const Icon = Tabs[item.name];
        return (
          <TabContainer onPress={() => navigation.navigate(item.name)}>
            <Icon
              fill={i === index ? theme.colors.main : '#b2b2bc'}
              width={pixel(40)}
              height={pixel(40)}
            />
          </TabContainer>
        );
      })}
    </TabsContainer>
  );
};

export default BottomTabs;
const TabsContainer = styled.View`
  padding: ${sPixel(40)} ${props => props.theme.appPaddingHorizontal}px
    ${sPixel(50)};
  flex-direction: row;
  background-color: #fff;
  border-radius: 100px;
`;
const TabContainer = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
