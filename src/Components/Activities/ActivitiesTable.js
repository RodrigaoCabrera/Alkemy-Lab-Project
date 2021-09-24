import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { Image } from '@chakra-ui/image';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion';
import { Box, Stack } from '@chakra-ui/layout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Button } from '@chakra-ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity, getActivity } from '../../features/activitiesReducer';

export const ActivitiesTable = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  const { activities: {activities, status} } = useSelector(state => state);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  };

  return (
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
          status && activities.map((activity) => {
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
                  {activity.name}
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
};
