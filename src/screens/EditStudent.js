/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import {
  createStudentAsync,
  updateStudentAsync,
} from '../redux/ducks/students';

function EditStudent(props) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.students);
  const student = (props.route.params || {}).student || {};

  const [address, setAddress] = useState(student.address || '');
  const [address2, setAddress2] = useState(student.address2 || '');
  const [fullName, setFullname] = useState(student.fullName || '');
  const [avatarUrl, setAvatarUrl] = useState(student.avatarUrl || '');

  const saveStudent = async () => {
    if (student.id) {
      dispatch(
        updateStudentAsync(
          {
            id: student.id,
            address,
            address2,
            fullName,
            avatarUrl,
          },
          () => {
            props.navigation.goBack();
          },
        ),
      );
    } else {
      dispatch(
        createStudentAsync(
          {
            address,
            address2,
            fullName,
            avatarUrl,
          },
          () => {
            props.navigation.goBack();
          },
        ),
      );
    }
  };

  const selectImage = async () => {
    const reference = storage().ref(new Date().valueOf().toString());
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });

    const pathToFile = result.assets[0].uri;

    await reference.putFile(pathToFile);

    const url = await reference.getDownloadURL();

    setAvatarUrl(url);
  };

  return (
    <Center h="full">
      <Box
        _dark={{
          bg: 'coolGray.800',
        }}
        _light={{
          bg: 'white',
        }}
        flex="1"
        safeAreaTop
        w="100%"
        h="full">
        <Heading p="4" pb="3" size="lg">
          Formulário do Estudante
        </Heading>
        <Text ml="5" mb="10">
          Preencha todos os dados do formulário
        </Text>
        <Center w="100%">
          <Box safeArea p="2" w="90%" pb="8">
            <VStack space={3} mt="5">
              <Pressable
                onPress={() => selectImage()}
                _dark={{
                  bg: 'coolGray.800',
                }}
                _light={{
                  bg: 'white',
                }}>
                <Avatar
                  alignSelf="center"
                  size="2xl"
                  source={{
                    uri: avatarUrl,
                  }}
                />
              </Pressable>
              <FormControl>
                <FormControl.Label>Nome completo</FormControl.Label>
                <Input value={fullName} onChangeText={setFullname} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Endereço</FormControl.Label>
                <Input value={address} onChangeText={setAddress} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Cidade e UF</FormControl.Label>
                <Input value={address2} onChangeText={setAddress2} />
              </FormControl>
              <Button
                mt="6"
                colorScheme="green"
                size={'lg'}
                onPress={saveStudent}
                isLoading={isLoading}>
                Salvar
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default EditStudent;
