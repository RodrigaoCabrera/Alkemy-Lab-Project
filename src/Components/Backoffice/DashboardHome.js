import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DashboardHome = () => {

  return (

    <Box w='100%'>

        <Text as='h1' textAlign='center'
          fontSize={{ base: '25px', md: '40px' }}
          color='#398be1' fontWeight='700'
          mt={100}
        >
          Bienvenido al Backoffice
        </Text>

    </Box>
  );
};

export default DashboardHome;