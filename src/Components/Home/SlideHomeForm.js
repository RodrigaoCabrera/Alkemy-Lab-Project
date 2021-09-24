import React, { useState } from 'react';
import { Button, Box, Text, Flex } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import ModalHome from './ModalHome';

const SlideHomeForm = ({slide, editSlideHandler}) => {

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const modalHandlerEdit = () => {
    setIsOpenEdit(!isOpenEdit);
  };

  return (
    <Box key={slide.id} w='100%' h='70px' p='3' bg='#6BBCFA' borderRadius="lg" my='4' border='1px solid #A7A7A7'>
      <Flex justifyContent='space-between'>
        <Box>
          <Text fontSize="md" as="em" fontWeight='500'> Slide Cargada: </Text>
          {console.log(slide)}
          <Text pl='5'>{slide.description && slide.description.slice(3, -4).slice(0, 20)}...</Text>
        </Box>
        <Button onClick={modalHandlerEdit}><FiEdit/></Button>
        <ModalHome modalHandler={modalHandlerEdit} isOpen={isOpenEdit} slideHandler={editSlideHandler} slideEdit={slide}/>
      </Flex>
    </Box>
  );
};

export default SlideHomeForm;