import React from 'react';
import { Heading, Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import UsersTable from './UsersTable';

const UsersList = () => {

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      marginTop='12'
      spacing={6}
    >
      <Heading as='h1'>Listado Usuarios</Heading>
      <Link 
        as={RouterLink}
        to='/create-user'
        color='#398BE1'
        fontWeight='bold'
        fontSize='18px'
        alignSelf='center'
        _hover={{
          color: '#418BCC'
        }}
      >
        Crear Usuario
      </Link>
      <UsersTable /> 
    </Stack>
  );
  
};

export default UsersList; 