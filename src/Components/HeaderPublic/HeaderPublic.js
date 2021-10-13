import React, { useEffect, useState }from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Breadcrumb,
  Box,
  Image,
  Flex,
  IconButton,
  BreadcrumbLink,
  BreadcrumbItem
} from '@chakra-ui/react';
import {verifyTokenAuthorization} from '../../Services/privateApiService';
import DonationsButton from '../Donations/DonationsButton';
import { Link } from 'react-router-dom';
import AuthButtons from '../UI/AuthButtons';
import { useSelector } from 'react-redux';

const HeaderPublic = ({navigation=[]}) => {
  const { Usuario, Autenticacion } = useSelector(state => state.auth);
  const [location, setLocation] = useState('');

  useEffect(()=>{
    setLocation(window.location.pathname);
  },[]);

  const isCurrentPage = (Link) => {
    return (location === Link);
  };
  
  const menuHamburger = <svg width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.8182H30.6818M3 3H30.6818H3ZM3 12.4091H30.6818H3Z" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
 
  return(
    <Box bg='#418BCC' width='100%' p='3'>
      <Flex alignItems='center' justifyContent='space-between' width='100%' height={{base: '5vh', md: '7vh'}} px='3'>
        
        <Box display='flex'>
          <Box marginRight='15px'>
            { Usuario.role_id !== 0 && <DonationsButton /> }
          </Box>
          <Link to='/'>
            <Image src="http://ongapi.alkemy.org/storage/4ZR8wsUwr9.png" alt="Logo ONG Somos Mas" width='6rem'/>
          </Link>
        </Box>
        <Menu>
          <MenuButton
            display={{md:'none'}}
            as={IconButton}
            aria-label="Options"
            icon={menuHamburger}
            variant="outline"
            border='none'
            _hover={{bg:'none'}}
            _focus={{bg:'none'}}
            _active={{bg:'none'}}
          />
          <MenuList display={{md:'none'}}>
            {navigation.map((item) => {
              const role = Usuario.role_id;
              if(Autenticacion) {
                if(role === 0) {
                  return !item.notAdmin && <Item 
                    key={item.text}
                    isMobile={false} 
                    text={item.text} linkTo={item.link} 
                    isActive={isCurrentPage(item.link)}
                  />;
                } else {
                  return !item.onlyUserLoged && <Item 
                    key={item.text}
                    isMobile={false} 
                    text={item.text} linkTo={item.link} 
                    isActive={isCurrentPage(item.link)}
                  />;
                } 
              } else if (!item.notAdmin && !item.onlyUserLoged) {
                return <Item 
                  key={item.text}
                  isMobile={false} 
                  text={item.text} linkTo={item.link} 
                  isActive={isCurrentPage(item.link)}
                />;
              }
            })}
            <Box display='flex' flexDirection='column' maxWidth='50%'>
              <AuthButtons />
            </Box>
          </MenuList>

          <Breadcrumb display={{base:'none', md:'block'}}>
            {navigation.map((item) => {
              const role = Usuario.role_id;
              if(Autenticacion) {
                if(role === 0) {
                  return !item.notAdmin && <Item 
                    key={item.text}
                    isMobile={false} 
                    text={item.text} linkTo={item.link} 
                    isActive={isCurrentPage(item.link)}
                  />;
                } else {
                  return !item.onlyUserLoged && <Item 
                    key={item.text}
                    isMobile={false} 
                    text={item.text} linkTo={item.link} 
                    isActive={isCurrentPage(item.link)}
                  />;
                } 
              } else if (!item.onlyUserLoged) {
                return <Item 
                  key={item.text}
                  isMobile={false} 
                  text={item.text} linkTo={item.link} 
                  isActive={isCurrentPage(item.link)}
                />;
              }
            })}
            <AuthButtons />
          </Breadcrumb>
        </Menu>
  
      </Flex>
    </Box>
  );
};

const Item = ({isMobile, text, linkTo, isActive}) => {
  if(isMobile){
    return ( 
      <Link to={linkTo} fontSize='1.2rem' fontWeight='600'>
        <MenuItem bg={isActive ? '#9AC9FB' : '#fff'} _focus={{bg: '#none'}}>
          {text}
        </MenuItem>
      </Link>
    );
  }
  
  return (
    <BreadcrumbItem mx='7'>
      <BreadcrumbLink as={Link} to={linkTo} color='#fff' textDecoration={isActive ? 'underline' : 'none'}>
        {text}
        
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};

export default HeaderPublic;
