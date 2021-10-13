import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { Link } from 'react-router-dom';
import ButtonLogout from '../UI/ButtonLogout';

const AuthButtons = () => {
  const {Autenticacion} = useSelector(state => state.auth);

  return (
    <>
      {
        Autenticacion 
          ? <ButtonLogout /> 
          : (
            <>
              <Button 
                marginRight={5}
                marginBottom={{
                  base: 1,
                  md: 0
                }}
                marginLeft={{
                  base: 2,
                  md: 0
                }}
                backgroundColor='#418BCC'
                borderColor='#FFF'
                border='1px'
                color='#FFF'
                _hover={{
                  bg: '#5FA5ED'
                }}
                _active={{
                  bg: '#5FA5ED'
                }}
                as={Link}
                to='/login'
                hidden={Autenticacion}
              >
                Login
              </Button>
              <Button 
                backgroundColor='#5FA5ED'
                color='#FFF'
                marginLeft={{
                  base: 2,
                  md: 0
                }}
                _hover={{
                  bg: '#418BCC',
                  borderColor: '#FFF',
                  border: '1px'
                }}
                _active={{
                  bg: '#418BCC',
                  borderColor: '#FFF',
                  border: '1px'
                }}
                as={Link}
                to='/register'
                hidden={Autenticacion}
              >
                Sign Up
              </Button>
            </>
          ) 
      }
    </>
  );
};

export default AuthButtons;
