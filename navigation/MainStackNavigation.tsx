import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IGlobalStoreInterface, setFirstOpen } from '../stores/slices/global.slice';
import { IReduxState } from '../stores/store';
import { RouteNames } from '../utils/Constants';
import LoggedInNavigation from './LoggedInNavigation';
import OnboardingStackNavigation from './OnboardingStackNavigation';

const Stack = createStackNavigator();

export default function () {
  const isFirstOpen = useSelector((state: IReduxState) => state.global.isFirstOpen);
  const [initialRouteName, setInitialRouteName] = useState(RouteNames.OnboardIngScreen);

  const getInitialRouteName = () => (isFirstOpen
    ? RouteNames.OnboardIngScreen
    : RouteNames.LoggedInScreen);

  useEffect(() => {
    setInitialRouteName(getInitialRouteName());
    console.log('MainStackNavigation.useEffect: initialRouteName: ', initialRouteName);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingStackNavigation} />
        <Stack.Screen name="LoggedInScreen" component={LoggedInNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
