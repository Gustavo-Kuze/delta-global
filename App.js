/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/screens';
import configureStore from './src/redux/store';
// import database from '@react-native-firebase/database';

const App = () => {
  // useEffect(() => {
  //   const reference = database().ref('/users');
  //   /*
  //     reference.set({
  //       name: 'John Doe',
  //       age: 30,
  //       isDeveloper: true,
  //     });
  //   */
  //   reference.on('value', snapshot => {
  //     console.log(snapshot.val());
  //   });
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
