import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Textarea,
  TableCaption,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Flex,
  Spinner,
  Input
} from '@chakra-ui/react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const NewsTable = ({news}) => {
  return(
    <Box w='100%' textAlign='center'>
      <Button variant='outline' colorScheme='blue' m='2'>
        <Link href='/backoffice/news/create'> Crear Novedad</Link>
      </Button>
      <Table variant="striped" colorScheme="messenger" size='sm'>
        <TableCaption>ONG Somos Mas</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Imagen</Th>
            <Th isNumeric>Creacion</Th>
            <Th textAlign='center'>Editar / Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {news.map((item) => <RowTable key={item.id} item={item} />)}
        </Tbody>
      </Table>
    </Box>
  );
};

const RowTable = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewModalEdit, setViewModalEdit] = useState(false);

  const viewImage = () => {
    setIsOpen(!isOpen);
  };

  const viewEdit = () => {
    setViewModalEdit(!viewModalEdit);
  };

  const editHandler = (itemEdit) => {
    console.log('enviando ', itemEdit);
  };

  const deletHandler = () => {
    console.log('borrado el item: ', item.id );
  };

  return(
    <>
      <Tr>
        <Td maxW='200px'>{item.name.slice(0, 70)}...</Td>
        <Td>
          <Button variant='outline' size='xs' colorScheme='blue' onClick={viewImage}>
            Ver Imagen
          </Button>
        </Td>
        <Td isNumeric>{item.created_at.slice(11, 16)} - {item.created_at.slice(0, 10)}</Td>
        <Td>
          <Flex justifyContent='space-around'>
            <Button size='sm' variant='outline' colorScheme='yellow' onClick={viewEdit}>
              <AiOutlineEdit size='1.5em'/>
            </Button>
            <Button size='sm' variant='outline' colorScheme='red' onClick={deletHandler}>
              <AiOutlineDelete size='1.7em'/>
            </Button>
          </Flex>
        </Td>
      </Tr>
      <ModalImage image={item.image} isOpen={isOpen} viewImage={viewImage} />
      <ModalEdit item={item} isOpen={viewModalEdit} viewModal={setViewModalEdit} editHandler={editHandler} />
    </>
  );
};

const ModalImage = ({image, isOpen, viewImage}) => {
  return (
    <Modal isOpen={isOpen} onClose={viewImage}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton/>
        </ModalHeader>
        <ModalBody display='flex' justifyContent='center'>
          <Spinner position='absolute' zIndex='-1'/>
          <Image src={image}/>
        </ModalBody>
      </ModalContent>
        
    </Modal>
  );
};

const ModalEdit = ({item, isOpen, viewModal, editHandler}) => {
  const [editItem, setEditItem] = useState({
    name: item.name

  });

  const saveEdit = () => {
    editHandler(editItem);
  };

  const imageHandler = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        setEditItem({...editItem, image: reader.result});
      };
    }
  };

  const inputsHandler = (e) => {
    if(e.target.name === 'name'){
      setEditItem({...editItem, name: e.target.value});
    }
    else if(e.target.name === 'image'){
      imageHandler(e);
    }
  };

  return(
    <>
      <Modal isOpen={isOpen} onClose={viewModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea value={editItem.name} name='name' resize='none' onChange={inputsHandler}/>
            <Input type='file' mt='4' pt='1' name='image' onChange={inputsHandler}/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={saveEdit}>
                  Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NewsTable;