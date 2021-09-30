import React from 'react'
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const PrivateRoute = ({component:Component, path, ...rest}) => {

    const loggedIn = useSelector(state => state.auth.Autenticacion);

    return loggedIn ? <Redirect to='/' /> : <Route path={path} {...rest} component={Component}/>;

  }
  

export default PrivateRoute;
