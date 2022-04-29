import React from 'react';
import { Button, Center, Heading, VStack } from 'native-base';
import ThemeToggler from '../components/ThemeToggler';

// Tela inicial da aplicação que exibe o toggler para alterar entre o tema light e dark (ThemeToggler)
function Home({ navigation }) {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="xl">Escola Delta</Heading>
        <Heading size="md">Bem-vindo (a)</Heading>
        <ThemeToggler />
        <Button
          size="lg"
          onPress={() => {
            navigation.navigate('Students');
          }}>
          Acessar
        </Button>
      </VStack>
    </Center>
  );
}

export default Home;
