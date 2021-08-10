import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
import Home from './screens/home/Home';
import Profile from './screens/user/Profile';
import Login from './screens/user/Login';
import RegisterStep1 from './screens/user/RegisterStep1';
import RegisterStep2 from './screens/user/RegisterStep2';
enableScreens();
const Stack = createNativeStackNavigator();

const Stacks: FC = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Login">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
    <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Stacks />
  </NavigationContainer>
);
