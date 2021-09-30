import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSelector} from 'react-redux';

const ButtonLogout = () => {
  const loggedIn = useSelector(state => state.auth.Autenticacion);

  const logout = () => {
    location.href = '/login';
    localStorage.removeItem('token');
  };

  return(
    <>
      {loggedIn && <Button colorScheme="teal" variant="outline" onClick={logout}> Cerrar Sesion </Button>}
    </>
  );
};

export default ButtonLogout;