import React, { useEffect } from 'react';
import Member from './Member';
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Link,
  Center,
  Text,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import { getMembers, deleteMembers } from '../../../features/membersReducer';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../UI/Loading';

const MembersList = () => {
  const dispatch = useDispatch();

  const {
    members: { members, status },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <Flex direction='column' m={5} p={5}>
      <Flex justify='center' align="center" direction='column'>
        <Heading>Lista de Miembros</Heading>
        <Link
          as={ReachLink}
          to='/editar-miembros'
          color='#9AC9FB'
          fontWeight='bold'
          fontSize='18px'
        >
          Crear Miembro
        </Link>
      </Flex>
      {status === 'loading' ? (
        <Center h='50vh'><Loading /></Center>
      ) : members?.length !== 0 && members !== undefined ? (
        <Table variant='simple' mt={5} bg='rgba(154, 201, 251,0.5)' rounded={5}>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th textAlign='center'>Photo</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {members.map((member) => {
              return (
                <Tr key={member.id}>
                  <Member 
                    member={member} 
                    dispatch={dispatch} 
                    deleteMembers={deleteMembers}
                  />
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Text fontWeight='700'>La lista está vacia</Text>
      )}
    </Flex>
  );
};

export default MembersList;
