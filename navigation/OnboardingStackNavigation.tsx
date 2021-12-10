import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PetChoose from '../screens/PetChoose/PetChoose';
import PetInfo from '../screens/PetInfo/PetInfo';
import { RouteNames } from '../utils/Constants';

const Stack = createStackNavigator();

// const options = {
//   headerBackTitleVisible: false,
//   cardStyleInterpolator: ({ current: { progress } }) => ({
//     cardStyle: {
//       opacity: progress,
//     },
//   }),
// };

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNames.PetChoose}
    >
      <Stack.Screen name="PetChoose" component={PetChoose} />
      <Stack.Screen
        name="PetInfo"
        component={PetInfo}
        // options={() => options}
      />
    </Stack.Navigator>
  );
}
