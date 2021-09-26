import React from 'react';
import { Heading, Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import UsersTable from './UsersTable';

const UsersList = () => {
 
  const usersMock  = [

    {id:'307', name: 'angel', email:'angelruggia@gmai.com', users: 'http://ongapi.alkemy.org/api/users'},
    {id:'313', name: 'Juan', email:'PanchoBaticano@hotmail.com', users: 'http://ongapi.alkemy.org/api/users'},
    {id:'315', name: 'sdasdasd', email:'asdasdas@empresa.com', users: 'http://ongapi.alkemy.org/api/users'},
    {id:'370', name: 'lucia', email:'lucia@gmail.com', users: 'http://ongapi.alkemy.org/api/users'},
  ];

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
        to='/backoffice/users/create'
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
      <UsersTable users={usersMock}/> 
    </Stack>
  );
  
};
    
 



export default UsersList; 