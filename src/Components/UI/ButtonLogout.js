import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSelector, useDispatch} from 'react-redux';
import { logoutAction } from '../../features/authReducer';

const ButtonLogout = () => {
  const loggedIn = useSelector(state => state.auth.Autenticacion);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return(
    <>
      {
        loggedIn && 
        <Button 
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
          onClick={logout}
        > 
          Cerrar Sesion 
        </Button>
      }
    </>
  );
};

export default ButtonLogout;