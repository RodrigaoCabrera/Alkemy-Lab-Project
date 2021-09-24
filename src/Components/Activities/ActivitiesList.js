import React from 'react';
import { Heading, Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import { ActivitiesTable } from './ActivitiesTable';

const ActivitiesList = () => {
  
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      marginTop='12'
      spacing={6}
    >
      <Heading as='h1'>Listado Actividades</Heading>
      <Link 
        as={RouterLink}
        to='/create-activity'
        color='#398BE1'
        fontWeight='bold'
        fontSize='18px'
        alignSelf='center'
        _hover={{
          color: '#418BCC'
        }}
      >
        Crear actividad
      </Link>
      <ActivitiesTable />
    </Stack>
  );
};
 
export default ActivitiesList;