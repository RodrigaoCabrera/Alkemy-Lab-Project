import React, { useEffect } from 'react';
import { Flex, Heading, Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import { ActivitiesTable } from './ActivitiesTable';
import ActivitiesSearchForm from '../Backoffice/Activities/ActivitiesSearchForm';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity } from '../../features/activitiesReducer';

const ActivitiesList = () => {

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      marginTop='12'
      spacing={6}
    >
      <Heading as='h1'>Listado Actividades</Heading>
      
      <Flex justify='space-around' w='100%' align='start' >
        <ActivitiesSearchForm w='70%'/>
        <Link 
          as={RouterLink}
          to='/create-activity'
          color='#398BE1'
          fontWeight='bold'
          fontSize='18px'
          alignSelf='center'
          _hover={{
            color: '#418BCC'
          }}
        >
        Crear actividad
        </Link>
      </Flex>
      <ActivitiesTable />
    </Stack>
  );
};
 
export default ActivitiesList;