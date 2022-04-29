import React, { useEffect, useState } from 'react';
import { Box, Center, Heading, Text } from 'native-base';

import StudentsList from '../components/StudentsList';
import { getStudents } from '../services/studentsService';

function Students() {
  const [data, setData] = useState([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoadingStudents(true);
      const response = await getStudents();
      setData(response);
      setIsLoadingStudents(false);
    })();
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
        <StudentsList students={data} isLoading={isLoadingStudents} />
      </Box>
    </Center>
  );
}

export default Students;
