/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import {QueryClient, QueryClientProvider} from 'react-query';
import {AuthProvider} from './src/context/auth';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {cacheTime: 50000},
    mutations: {
      onError: e => {
        console.log(e?.response, 'Error');
      },
    },
  },
});

const RNapp = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AuthProvider>
);

AppRegistry.registerComponent(appName, () => RNapp);
