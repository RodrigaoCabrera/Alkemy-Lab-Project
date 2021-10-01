import React, { useCallback } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, getNewsWithQuery } from '../../features/newsReducer';

const NewsTable = () => {

  const { news } = useSelector(state => state.news);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getNews());
  }, []);

  const handleChange = (e) => {
    if (e.target.value < 3) {
      dispatch(getNews());
    } else {
      dispatch(getNewsWithQuery(e.target.value));
    }
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleChange, 400)
    , []);

  return(
    <Box w='100%' textAlign='center'>
      <Button variant='outline' colorScheme='blue' m='2'>
        <Link to='/create-news'> Crear Novedad</Link>
      </Button>
      <Box margin={6} flex={1} alignSelf='center'>
        <Input maxWidth='500px' placeholder='Novedad' onChange={debouncedChangeHandler} />
      </Box>
      <Table variant="striped" colorScheme="messenger" size='sm'>
        <TableCaption>ONG Somos Mas</TableCaption>
        <Thead>
          <Tr>
            <Th textAlign='center'>Nombre</Th>
            <Th textAlign='center'>Imagen</Th>
            <Th textAlign='center' isNumeric>Creacion</Th>
            <Th textAlign='center'>Editar / Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {news && news.map((item) => <RowTable key={item.id} item={item} />)}
        </Tbody>
      </Table>
    </Box>
  );
};

const RowTable = ({item: novedades}) => {

  const deletHandler = () => {
    console.log('borrado el item: ', novedades.id );
  };

  return(
    <>
      <Tr>
        <Td maxW='200px'>{novedades.name.slice(0, 70)}...</Td>
        <Td  minWidth={{
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
                  src={novedades.image} 
                  alt={novedades.name} 
                  width={{
                    base:'sm',
                  }}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Td>
        <Td isNumeric>{novedades.created_at.slice(11, 16)} - {novedades.created_at.slice(0, 10)}</Td>
        <Td>
          <Flex justifyContent='space-around'>
            <Button size='sm' variant='outline' colorScheme='yellow'>
              <Link to={{pathname:'/create-news', novedades}}>
                <AiOutlineEdit size='1.5em'/>
              </Link> 
            </Button>
            <Button size='sm' variant='outline' colorScheme='red' onClick={deletHandler}>
              <AiOutlineDelete size='1.7em'/>
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  );
};

export default NewsTable;