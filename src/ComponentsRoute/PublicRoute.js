import React from 'react';
import { Route } from 'react-router';

export default function PublicRoute({component:Component,path}) {
  return <Route path={path} ><Component/></Route>;
}
