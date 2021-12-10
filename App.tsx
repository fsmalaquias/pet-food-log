import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigation from './navigation/MainStackNavigation';
import store from './stores/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigation />
    </Provider>
  );
}
