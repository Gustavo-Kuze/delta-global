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

// Ponto de entrada da aplicação
const App = () => {
  // script que foi usado para criar os usuários no firebase baseados no arquivo mock.js
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
    // Provider é um componente que permite acessar o store do redux
    <Provider store={configureStore}>
      {/* Container de navegação que controla as telas do app */}
      <NavigationContainer>
        {/* Instancia do Context API da lib NativeBase para controle de tema*/}
        <NativeBaseProvider>
          {/* Navegador Stack principal do app com as definições das telas*/}
          <MainNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
