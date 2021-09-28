import React from 'react';
import { Route} from 'react-router';

export default function PublicRoute({component,path}) {
  return <Route path={path} component={component}/>;
}
