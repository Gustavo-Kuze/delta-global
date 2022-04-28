/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MainNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
