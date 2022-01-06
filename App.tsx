import './ReactotronConfig.js';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Reactotron from 'reactotron-react-native';
import MainStackNavigation from './navigation/MainStackNavigation';
import store, { persistor } from './stores/store';

export default function App() {
  useEffect(() => {
    Reactotron.log('reactotron');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigation />
      </PersistGate>
    </Provider>
  );
}
