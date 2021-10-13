import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DonationsButton = () => {
  return (
    <Link _hover={{ textDecoration: 'none', color: 'blue.200' }} to='/donar'>
      <Button colorScheme="red" display="block">
        Donar Aqui
      </Button>
    </Link>
  );
};

export default DonationsButton;