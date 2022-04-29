import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Students from './Students';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Students" component={Students} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
