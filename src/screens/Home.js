import React from 'react';
import { Button, Center, Heading, VStack } from 'native-base';
import ThemeToggler from '../components/ThemeToggler';

function Home({ navigation }) {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Escola Delta</Heading>
        <Heading size="sm">Bem-vindo (a)</Heading>
        <ThemeToggler />
        <Button
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
