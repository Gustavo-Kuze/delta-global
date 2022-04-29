/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Center, Heading, Text } from 'native-base';

import StudentsList from '../components/StudentsList';
import { useDispatch, useSelector } from 'react-redux';
import { types as studentsTypes } from '../redux/ducks/students';

function Students() {
  const dispatch = useDispatch();
  const { isLoading, students } = useSelector(state => state.students);

  useEffect(() => {
    dispatch({
      type: studentsTypes.GET_STUDENTS_ASYNC,
    });
  }, []);

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
          Estudantes
        </Heading>
        <Text ml="5" mb="8">
          Deslize o item para ver as opções
        </Text>
        <StudentsList students={students} isLoading={isLoading} />
      </Box>
    </Center>
  );
}

export default Students;
