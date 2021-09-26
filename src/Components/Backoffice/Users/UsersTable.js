import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,

} from '@chakra-ui/react';
import { Link } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

const UsersTable = (props) => (
  <Table variant="striped" colorScheme="messenger" size='sm'>
 
 
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <Tr key={user.id}>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>
              <Link 
                as={RouterLink}
                to='/editar-usuario'
                color='#398BE1'
                fontWeight='bold'
                fontSize='18px'
                alignSelf='center'
                _hover={{
                  color: '#418BCC'
                }}
              ><Button variant='link' boxSize='30px'color='#398be1' /> Edit </Link>
              <Button size='sm' variant='outline' colorScheme='red'
                onClick={() => props.userDelete(user.id)}
              >
                Delete
              </Button>
              
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={3}>No users</Td>
        </Tr>
      )}
    </Tbody>
  </Table>
);

export default UsersTable;