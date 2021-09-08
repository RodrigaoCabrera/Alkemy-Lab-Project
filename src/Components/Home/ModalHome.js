import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Input,
  Text
} from '@chakra-ui/react';

const ModalHome = ({modalHandler, isOpen, slideHandler, slideEdit}) => {
  const [text, setText] = useState(slideEdit ? slideEdit.text : '' );
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const validateSlide = () => {
    if(image.length > 0 && text.length > 0){
      setError('');
      return true;
    }else{
      setError('Porfavor rellene los campos obligatorios');
      return false;
    }
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        setImage(reader.result);
      };
    }
  };

  const saveFilesModal = () => {
    if(validateSlide()){
      setText('');
      setImage('');
      const id = slideEdit ? slideEdit.id : Math.random();
      slideHandler({id, text, image});
      modalHandler();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={modalHandler}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Home Slide</ModalHeader>
        <ModalBody minH='40vh' display='flex' flexDirection='column' justifyContent='space-around'>
          <FormControl isRequired>
            <FormLabel htmlFor="image">Imagen</FormLabel>
            <Input pt='1' type="file" name='image' onChange={imageHandler} accept="image/jpeg , image/png" />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel htmlFor="text">Texto</FormLabel>
            <Input as={Textarea} value={text} onChange={textHandler} id="text" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Text color='#DB5752' mr='3'>{error}</Text>
          <Button colorScheme="blue" mr={3} onClick={saveFilesModal}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalHome;