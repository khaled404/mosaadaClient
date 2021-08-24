import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {enableScreens} from 'react-native-screens';
import Home from './screens/home/Home';
import Profile from './screens/user/Profile';
import Login from './screens/user/Login';
import RegisterStep1 from './screens/user/RegisterStep1';
import RegisterStep2 from './screens/user/RegisterStep2';
import BottomTabs from './components/tabs/BottomTabs';
import {Dimensions} from 'react-native';
import Wallet from './screens/wallet/Wallet';
import Orders from './screens/orders/Orders';
import Notifications from './screens/notifications/Notifications';
import Settings from './screens/settings/Settings';
import Services from './screens/services/Services';

enableScreens();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Tabs = () => (
  <Tab.Navigator
    initialRouteName="HomeTab"
    tabBarPosition={'bottom'}
    screenOptions={{lazy: true, lazyPreloadDistance: 10, swipeEnabled: false}}
    initialLayout={{
      width: Dimensions.get('window').width,
    }}
    tabBar={props => <BottomTabs {...props} />}>
    <Tab.Screen name="HomeTab" component={Home} />
    <Tab.Screen name="Wallet" component={Wallet} />
    <Tab.Screen name="Orders" component={Orders} />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

const Stacks: FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    <Stack.Screen name="Home" component={Tabs} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
    <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Services" component={Services} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stacks />
  </NavigationContainer>
);
