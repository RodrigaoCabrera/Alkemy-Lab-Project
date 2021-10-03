import React, { Component } from 'react';
import { Route} from 'react-router';
import WebPublicaLayout from '../Layouts/WebPublicaLayouts';

export default function PublicRoute({component,path}) {
  return (
    <>
      <WebPublicaLayout>
        <Route path={path} component={component}/>;
      </WebPublicaLayout>
    </>
  );
}
