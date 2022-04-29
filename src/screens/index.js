import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Students from './Students';
import EditStudent from './EditStudent';

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
      <Stack.Screen name="EditStudent" component={EditStudent} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
