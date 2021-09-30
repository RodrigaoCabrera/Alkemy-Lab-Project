import React from 'react';
import { Box, Text, InputRightElement, Button, InputGroup, Image, Center } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { deleteSlideAction } from '../../../features/slideReducer'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const SlideCard = ({ title, image, order, id, description }) => {

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    console.log('editar');
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSlideAction(id));
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
            <Button p={4} variant="ghost" colorScheme="blackAlpha" onClick={ (e) => handleEdit(e) }> <Link to={{pathname:'/backoffice/create-slide/',object: {title: title, description: description, order: order, image: image, id: id} }} > <AiFillEdit /> </Link> </Button>
            <Button p={4} variant="ghost" colorScheme="blackAlpha" onClick={ (e) => handleDelete(e) }><AiFillDelete /></Button>          
          </InputRightElement>
        </InputGroup>
      </Box>
    </Center>
  );
};

export default SlideCard;
