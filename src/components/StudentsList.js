import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  Skeleton,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SwipeListView } from 'react-native-swipe-list-view';

/*
Este componente exibe uma lista com itens deslizáveis (react-native-swipe-list-view)
que renderiza os usuários cadastrados no Firebase.
*/

function StudentsList({ students, isLoading }) {
  const [listData, setListData] = useState(students);

  useEffect(() => {
    setListData(students);
  }, [students]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const renderItem = ({ item, index }) =>
    isLoading ? (
      <Center w="full" ml="4" mb="2">
        <VStack w="full">
          <HStack
            p="4"
            w="90%"
            h="24"
            maxW="400"
            borderWidth="1"
            space={8}
            overflow="hidden"
            rounded="md"
            _dark={{
              borderColor: 'coolGray.500',
            }}
            _light={{
              borderColor: 'coolGray.200',
            }}>
            <Skeleton h="48px" w="48px" borderRadius={'100'} />
            <VStack w="55%">
              <Skeleton.Text px="4" />
            </VStack>
            <VStack w="12%">
              <Skeleton.Text />
            </VStack>
          </HStack>
        </VStack>
      </Center>
    ) : (
      <Box>
        <Pressable
          onPress={() => console.log('You touched me')}
          _dark={{
            bg: 'coolGray.800',
          }}
          _light={{
            bg: 'white',
          }}>
          <Box pl="4" pr="5" py="2">
            <HStack alignItems="center" space={3}>
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  color="coolGray.800"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  bold>
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.address}
                </Text>
                {!!item.address2 && (
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.address2}
                  </Text>
                )}
                {!!item.address3 && (
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.address3}
                  </Text>
                )}
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                color="coolGray.800"
                _dark={{
                  color: 'warmGray.50',
                }}
                alignSelf="flex-start">
                {item.updatedAt}
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </Box>
    );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <Pressable
        w="70"
        ml="auto"
        bg="coolGray.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon
            as={<MaterialIcons name="edit" />}
            size="xs"
            color="coolGray.800"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
            Editar
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Excluir
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box safeArea flex="1" h="full">
      <SwipeListView
        // caso os dados entejam sendo carregados, mostra uma lista de 10 skeletons
        data={
          isLoading
            ? [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 },
                { id: 8 },
                { id: 9 },
                { id: 10 },
              ]
            : listData
        }
        renderItem={renderItem}
        renderHiddenItem={isLoading ? () => <></> : renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={() => {}}
      />
    </Box>
  );
}

export default StudentsList;
