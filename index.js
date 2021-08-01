/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient({
  defaultOptions: {queries: {cacheTime: 50000}},
});

const RNapp = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => RNapp);
