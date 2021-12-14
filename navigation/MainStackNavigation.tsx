import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IReduxState } from '../stores/store';
import { RouteNames } from '../utils/Constants';
import LoggedInNavigation from './LoggedInNavigation';
import OnboardingStackNavigation from './OnboardingStackNavigation';

const Stack = createStackNavigator();

export default function MainStackNavigation() {
  const isFirstOpen = useSelector((state: IReduxState) => state.global.isFirstOpen);
  const [initialRouteName, setInitialRouteName] = useState(RouteNames.OnboardIngScreen);

  const getInitialRouteName = () => (isFirstOpen
    ? RouteNames.OnboardIngScreen
    : RouteNames.LoggedInScreen);

  useEffect(() => {
    setInitialRouteName(getInitialRouteName());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
        { isFirstOpen ? <Stack.Screen name="OnboardingScreen" component={OnboardingStackNavigation} />
          : <Stack.Screen name="LoggedInScreen" component={LoggedInNavigation} /> }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
