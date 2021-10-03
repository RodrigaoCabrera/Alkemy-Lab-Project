import React, { useState } from 'react';
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
  Box,
  Image,
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react';
import BackofficeSidebar from './Sidebar/BackofficeSidebar';
import { Link } from 'react-router-dom';
import AuthButtons from '../UI/AuthButtons';
import ButtonLogout from '../UI/ButtonLogout';

export default function HeaderBackOffice() {

  const categories = [
    {
      name: 'Inicio',
      id: 1,
      path: '/backoffice',
    },
    {
      name: 'members',
      id: 2,
      path: '/backoffice/members',
    },
    {
      name: 'users',
      id: 3,
      path: '/backoffice/users'
    },
    {
      name: 'categories',
      id: 5,
      path: '/backoffice/categories'
    },
    {
      name: 'activities',
      id: 6,
      path: '/backoffice/activities'     
    },
    {
      name: 'slides',
      id: 7,
      path: '/backoffice/slides'
    },
    {
      name: 'news',
      id: 8,
      path: '/backoffice/news'      
    }
  ];

  const menuHamburger = <BackofficeSidebar categories={categories} />;

  return (
    <Box top='0' left='0' bg='#418BCC' width='100%' p='3'>
      <Flex alignItems='center' justifyContent='space-between' width='100%' height={{ base: '5vh', md: '7vh' }} px='3'>
        <Link to='/'>
          <Image src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png" alt="Logo ONG Somos Mas" width='6rem' />
        </Link>
        <Menu>
          <MenuButton
            display={{ md: 'none' }}
            as={IconButton}
            aria-label="Options"
            icon={menuHamburger}
            variant="ghost"
            border='none'
            _hover={{ bg: 'none' }}
            _focus={{ bg: 'none' }}
            _active={{ bg: 'none' }}
          />
          <Breadcrumb display={{ base: 'none', md: 'block' }} separator=" " >
            { /* Enlases NO Movil */}
            {
              categories.map(x => <BreadcrumbItem key={x.id} color='white'><Link to={x.path}><Text fontWeight="extrabold" fontSize="lg" p={2} >{x.name}</Text></Link></BreadcrumbItem>)
            }
            <ButtonLogout />
          </Breadcrumb>
        </Menu>
      </Flex>
    </Box>
  );
}
