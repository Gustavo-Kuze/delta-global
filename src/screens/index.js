import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Students from './Students';

const Stack = createNativeStackNavigator();

// Neste arquivo são definidas todas as telas do app
function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Students" component={Students} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
