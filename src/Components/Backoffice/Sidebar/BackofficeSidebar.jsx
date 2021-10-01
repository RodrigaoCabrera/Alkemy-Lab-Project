import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Heading,
  Flex
} from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const BackofficeSidebar = ({categories})=>{
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button as={GiHamburgerMenu} onClick={onOpen} size='sm'/>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='rgb(154, 201, 251)'>
          <Flex direction='column'>
            <DrawerCloseButton color='white' onClick={onClose}/>
            <DrawerHeader borderBottomWidth="1px"  color='white' >
              <Heading>Back Office</Heading>
            </DrawerHeader>
            <DrawerBody>
              {
                categories.map(element=>(<Link key={element.id} to={element.path}><Text color='white' fontWeight="extrabold" fontSize="lg" p={2} >{element.name}</Text></Link>))
              }
            </DrawerBody>

          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
  
};
export default BackofficeSidebar;