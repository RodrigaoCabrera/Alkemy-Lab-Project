import React from 'react';
import { Button, Link } from '@chakra-ui/react';

const DonationsButton = ({ isActive, to = '/' }) => {
  return (
    <Link _hover={{ textDecoration: 'none', color: 'blue.200' }} href={to}>
      <Button color={isActive && 'red.200'} colorScheme="red" display="block">
        Donar Aqui
      </Button>
    </Link>
  );
};

export default DonationsButton;