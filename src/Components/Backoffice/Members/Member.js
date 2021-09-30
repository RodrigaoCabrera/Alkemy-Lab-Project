import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Image, Button, Td } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { MdDelete, MdEdit } from 'react-icons/md';

const Member = ({ member, dispatch, deleteMembers }) => {
  const breakpoints = createBreakpoints({
    //Puntos de quiebre para hacer responsive las imágenes.
    sm: '414px',
    md: '550px',
    lg: '768px',
    xl: '1023px',
  });

  const handleDelete = (id) => {
    dispatch(deleteMembers(id));
  };

  return (
    <>
      <Td>{member.name}</Td>
      <Td textAlign='center'>
        <Flex h='100%' w='100%' align='center' justify='center'>
          <Image
            src={member.image}
            alt='miembro de la ONG'
            boxSize={{ base: '100%', sm: '100%', md: '60%' }}
            borderRadius='6px'
          />
        </Flex>
      </Td>
      <Td>
        <Flex justify='center' align='center'>
          <Button variant="unstyled">
            <Link to={{ pathname: '/editar-miembros', member }}>
              <MdEdit size='30px' color='#398be1' />
            </Link>
          </Button>
          <Button
            variant='unstyled'
            onClick={() => {
              handleDelete(member.id);
            }}
          >
            <MdDelete size='30px' color='#398be1' />
          </Button>
        </Flex>
      </Td>
    </>
  );
};

export default Member;
