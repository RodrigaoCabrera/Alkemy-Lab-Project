import React, { useState , useEffect, useCallback } from 'react';
import { Box, Heading, Button, Stack, Text, Table, Tbody, Td, Th, Thead, Tr, Input, Image} from '@chakra-ui/react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion';
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivity, getActivity, getActivitiesWithQuery } from '../../features/activitiesReducer';
import TitlePages from '../UI/TitlePages';

export const ActivityContent = () => {

  const mockText = `Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio
  La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación,
  salud, trabajo, deporte, responsabilidad y compromiso.`;

  const dispatch = useDispatch();
  const { activities :{activities, status} } = useSelector(state => state);

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length < 3) {
      dispatch(getActivity());
    }
    else {
      dispatch(getActivitiesWithQuery(e.target.value));
    }
  };
    
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , []);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  };

  return (
    <Stack>
      <TitlePages text='Actividades' />
      <Box>
        <Heading as='h2' size='md' marginLeft={6} marginTop={3}>Actividades</Heading>
        <Stack margin={6} marginTop={6}>
          <Text>
            {mockText}
          </Text>
        </Stack>
        <Box width='100%' display='flex' alignItems='center' flexDirection='column'>
          <Input width='300px' m='3' type='text' 
            placeholder='Buscar Actividad' onChange={debouncedChangeHandler}
          />
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
        </Box>
      </Box>
    </Stack>
  );
};

export default ActivityContent;