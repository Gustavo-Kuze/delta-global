import React from 'react';
import { HStack, Switch, Text, useColorMode } from 'native-base';

// Este componente é usado para alternar entre os temas do app
// A tematização é controlada pela bibliteca NativeBase
const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Usar tema dark</Text>
      <Switch
        isChecked={colorMode === 'dark'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'dark'
            ? 'alterar para o tema dark'
            : 'alterar para o tema light'
        }
      />
    </HStack>
  );
};

export default ThemeToggler;
