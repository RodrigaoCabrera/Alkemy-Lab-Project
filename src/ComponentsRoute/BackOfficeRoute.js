import React from 'react';
import { Route, Redirect} from 'react-router';
import {verifyTokenAuthorization} from '../Services/privateApiService';

export default function BackOfficeRoute({component,path}) {
  const token = verifyTokenAuthorization();
  if(token === undefined){
    return <Redirect to="/login"/>;
  }
  else{
    return <Route path={path} component={component}/>;
  } 
}
