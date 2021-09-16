import React from 'react';
import { Heading, Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';
import { ActivitiesTable } from './ActivitiesTable';



const ActivitiesList = () => {
  const activitiesMock = [
    {id:'436', name: 'Apoyo Escolar Nivel Primario', image: 'http://ongapi.alkemy.org/storage/XwACj230qB.jpeg', createdAt: new Date().toLocaleString()},
    {id:'437', name: 'Apoyo Escolar Nivel Secundario', image: 'http://ongapi.alkemy.org/storage/c1NyJKnQtO.jpeg', createdAt: new Date().toLocaleString()},
    {id:'439', name: 'Tutorías Individuales', image: 'http://ongapi.alkemy.org/storage/AmrSwNshrt.jpeg', createdAt: new Date().toLocaleString()},
    {id:'445', name: 'Donación de Alimentos', image: 'http://ongapi.alkemy.org/storage/ZsTitd4YsY.jpeg', createdAt: new Date().toLocaleString()},
  ];
  
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      marginTop='12'
      spacing={6}
    >
      <Heading as='h1'>Listado Actividades</Heading>
      <Link 
        as={RouterLink}
        to='/backoffice/activities/create'
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
      <ActivitiesTable activities={activitiesMock} />
    </Stack>
  );
};
 
export default ActivitiesList;