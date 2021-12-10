import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import PetHistory from '../screens/PetHistory/PetHistory';
import { setFirstOpen } from '../stores/slices/global.slice';

const Stack = createStackNavigator();

export default function () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFirstOpen(false));
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="PetHistory" component={PetHistory} options={{ gestureEnabled: false }} />
    </Stack.Navigator>
  );
}
