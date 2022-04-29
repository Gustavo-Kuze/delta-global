/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/screens';
import configureStore from './src/redux/store';

const App = () => {
  // script para criar os usuários no firebase baseados no mock
  // useEffect(() => {
  // (async () => {
  //   await Promise.all(
  //     studentsMock.map(async user => {
  //       return createStudent(user);
  //     }),
  //   );
  // })();
  // }, []);

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <NativeBaseProvider>
          <MainNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
