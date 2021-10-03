import React from 'react';
import { Route, Redirect} from 'react-router';
import {verifyTokenAuthorization} from '../Services/privateApiService';
import { useSelector } from 'react-redux';

export default function BackOfficeRoute({component,path}) {
  const token = verifyTokenAuthorization();
  const { Usuario } = useSelector(state => state.auth);

  if(token === undefined){
    return <Redirect to="/"/>;
  }
  else if (Usuario.role_id === 0 ) {
    // Role_id === 0 (Usuario administrador)
    return <Route path={path} component={component} />;
  } else {
    return <Redirect to='/' />;
  }
}
