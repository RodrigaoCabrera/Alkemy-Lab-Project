
import React from 'react';
import { Box } from '@chakra-ui/react';
import HeaderBackOffice from './HeaderBackOffice';
import { Route } from 'react-router-dom';
const LayoutBackoffice = ({ children }) => {

    const routesBackoffice = 
    [ '/backoffice', '/create-activity', '/create-category', 
    '/create-news', '/backoffice/organization/edit', 
    "/backoffice/create-slide", "/create-testimonials", 
    '/backoffice/members', "/create-project" , "/backoffice/categories", 
    '/backoffice/create-slide', '/backoffice/slides', 
    '/backoffice/activities', '/create-edit-form', 
    '/editar-miembros', "/create-slides", "/create-user"
    ,'/backoffice/users' ];

    return (
        <Box w='100%'>
            <Route path={routesBackoffice} component={HeaderBackOffice} /> 
            <Box mt={100}>
                {children}
            </Box>
        </Box>
    )
}

export default LayoutBackoffice;