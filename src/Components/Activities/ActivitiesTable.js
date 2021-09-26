import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { Image } from '@chakra-ui/image';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion';
import { Box, Center, Stack } from '@chakra-ui/layout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity, getActivity } from '../../features/activitiesReducer';
import Loading from '../UI/Loading';
import { showErrorAlert } from '../../Services/alertsService';

export const ActivitiesTable = () => {

  const dispatch = useDispatch();
  const { activities :{activities, status} } = useSelector(state => state);

  useEffect(() => {
    dispatch(getActivity());
  },[]);

  
  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  };
  let content;
  switch (status) {
  case 'success':
    content = (
      <Table
        minWidth={{
          base: '100%',
          md: '600px',
          lg: '992px'
        }}
        maxWidth={{
          lg: '992px'
        }}
        variant='unstyled' 
      >
        <Thead bg='#333' color='#FFF'>
          <Tr>
            <Th textAlign='center'>Nombre</Th>
            <Th textAlign='center'>Imagen</Th>
            <Th textAlign='center'>Fecha de creación</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            activities.map((activity) => {
              return (
                <Tr
                  key={activity.id} 
                  _odd={{
                    bg: '#9AC9FB',
                    color:'#000'
                  }}
                  fontWeight='700'
                >
                  <Td textAlign='center'>
                    <Link to={`/actividades/${activity.id}`}>
                      {activity.name}  
                    </Link>
                    
                  </Td>
                  <Td minWidth={{
                    base: '100%',
                    md: '300px',
                    lg: '592px'
                  }}>
                    <Accordion allowToggle>
                      <AccordionItem border='none'>
                        <AccordionButton>
                          <Box flex='1' textAlign='center'>
                                Mostrar imagen
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel display='flex' justifyContent='center'>
                          <Image 
                            src={activity.image} 
                            alt={activity.name} 
                            width={{
                              base:'md',
                            }}
                          />
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Td>
                  <Td textAlign='center'>
                    {activity.createdAt}
                  </Td>
                  <Td>
                    <Stack direction='row' spacing={2}>
                      <Button variant='unstyled'>
                        <Link to={{pathname:'/create-activity', activity}}>
                          <MdEdit size='30px' color='#398be1' />
                        </Link> 
                      </Button>
                      <Button variant='unstyled'
                        onClick={() => {
                          handleDelete(activity.id);
                        }}
                      >
                        <MdDelete size='30px' color='#398be1' />
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              );
            })
          }
        </Tbody>
      </Table>
    );
    break;
  case 'loading':
    content = ( <Center h="50vh" > <Loading/> </Center>  );
    break;
  case 'failed':
    showErrorAlert('Ha ocurrido un error al recuperar la informacion de las actividades');
    content = (
      <Table
        minWidth={{
          base: '100%',
          md: '600px',
          lg: '992px'
        }}
        maxWidth={{
          lg: '992px'
        }}
        variant='unstyled' 
      >
        <Thead bg='#333' color='#FFF'>
          <Tr>
            <Th textAlign='center'>Nombre</Th>
            <Th textAlign='center'>Imagen</Th>
            <Th textAlign='center'>Fecha de creación</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
        </Tbody>
      </Table>
    );
    break;
  default:
    content = (<div></div>);
    break;
  }
  return content;
};
