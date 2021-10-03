import React from 'react';
import { Box } from '@chakra-ui/react';

const Title = ({ name }) => {
  return (
    <Box 
      textAlign='center'
      as='h1'
      fontSize={{ base: '25px', md: '40px' }}
      fontWeight='700'
      color='#398be1'
      padding='10px 20px'
    >
      {name}
    </Box>
  );
};

export default Title;
