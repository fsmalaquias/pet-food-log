import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainStackNavigation from './navigation/MainStackNavigation';
import store, { persistor } from './stores/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigation />
      </PersistGate>
    </Provider>
  );
}
