import React from 'react';
import { Route } from 'react-router';

export default function BackOfficeRoute({component:Component,path}) {
  return <Route path={path} ><Component/></Route>;
}
