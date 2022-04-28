import React from 'react';
import { Center, Text, VStack } from 'native-base';
import ThemeToggler from '../components/ThemeToggler';

function Students() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Text>Estudantes</Text>
        <ThemeToggler />
      </VStack>
    </Center>
  );
}

export default Students;
