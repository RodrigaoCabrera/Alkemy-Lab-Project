import React from 'react';
import { Box, Text, Input, InputRightElement, Button, InputGroup, Image, Center } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const SlideCard = ({ title, image, order }) => {

  const handleEdit = (e) => {
    e.preventDefault();
    console.log('editar');
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('borrar');
  };


  return (
    <Center mt="1" >
      <Box w="90%" p={4} color="black" 
        borderRadius="lg" overflow="hidden" 
        borderWidth="5px"
      >
        <InputGroup size="md">
          <Image
            borderRadius="full"
            boxSize="40px"
            src={image}
          />
          <Text mt="1" w={[100, 200, 350, 500]}>{title}</Text>
          <Text mt="1" >{ order }</Text>
          <InputRightElement width="6rem">
            <Button p={4} variant="ghost" colorScheme="blackAlpha" onClick={ (e) => handleEdit(e) }><AiFillEdit /></Button>
            <Button p={4} variant="ghost" colorScheme="blackAlpha" onClick={ (e) => handleDelete(e) }><AiFillDelete /></Button>          
          </InputRightElement>
        </InputGroup>
      </Box>
    </Center>
  );
};

export default SlideCard;
