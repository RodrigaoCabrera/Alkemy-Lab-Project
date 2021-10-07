import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';


const Gracias = () => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="space-evenly"
      mt="200px"
    >
      <Text fontSize={{ base: '30px', md: '40px', lg: '46px' }} textAlign="center">
        ¡Muchas gracias por tu donación!
        <Image src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png" alt="Logo ONG Somos Mas" width='6rem'  />
      </Text>
    </Box>
  );

};


export default Gracias;