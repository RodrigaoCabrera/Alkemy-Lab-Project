import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Link,
  Box,
  Image,
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';

export default function HeaderBackOffice() {
  const menuHamburger = <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.8182H30.6818M3 3H30.6818H3ZM3 12.4091H30.6818H3Z" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
   
  return(
    <Box position='fixed' top='0' left='0' bg='#418BCC' width='100%' p='3'>
      <Flex alignItems='center' justifyContent='space-between' width='100%' height={{base: '5vh', md: '7vh'}} px='3'>
        <Image src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png" alt="Logo ONG Somos Mas" width='6rem'/>
        <Menu>
          <MenuButton
            display={{sm:'none'}}
            as={IconButton}
            aria-label="Options"
            icon={menuHamburger}
            variant="outline"
            border='none'
            _hover={{bg:'none'}}
            _focus={{bg:'none'}}
            _active={{bg:'none'}}
          />
          <MenuList display={{sm:'none'}}>
            { /* Enlases  Movil */ }
          </MenuList>
          <Breadcrumb display={{base:'none', sm:'block'}}>
            { /* Enlases NO Movil */ } 
          </Breadcrumb>
        </Menu>
      </Flex>
    </Box>
  );
}
