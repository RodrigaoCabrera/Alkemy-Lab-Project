import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Spinner 
} from '@chakra-ui/react';
import { Box, Center, Stack } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { GetUsers, DeleteUser } from '../../../Services/userServices';
import { MdDelete, MdEdit } from 'react-icons/md';
import Loading from '../../UI/Loading';

const UsersTable = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState({
    message: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    GetUsers()
      .then(res => {
        setUsers(res.state);
        setError(res.error);
        setLoading(res.loading);
      });
  }, []);

  const handleDelete = (id) => {
    DeleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };
  
  return (
    <Table variant="striped" colorScheme="messenger" size='sm'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          !loading ? users.map(user => {
            return (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Stack direction='row' spacing={2}>
                    <Button variant='unstyled'>
                      <Link to={{pathname:'/create-user', user}}>
                        <MdEdit size='30px' color='#398be1' />
                      </Link> 
                    </Button>
                    <Button variant='unstyled'
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                    >
                      <MdDelete size='30px' color='#398be1' />
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            );
          }): <Box ml={'30vw'} > <Center h='50vh' ><Loading/></Center> </Box>
        }
      </Tbody>
    </Table>
  );
};

export default UsersTable;