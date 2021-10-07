import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Table,Thead,Tbody,Tr,Th,Td, Heading, Flex, Icon, Button, Box, Center, Spinner} from '@chakra-ui/react';
import {BsPlusSquare} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin4Line} from 'react-icons/ri';
import { useEffect } from 'react';
import { fetchCategory, removeCategory } from '../../app/categories-slice';
import Loading from '../UI/Loading';
import CategoriesSeach from './CategoriesSeach'

//aca se debe obtener la data desde useSelector del reducer
const CategoriesPage = () =>{
  const dispatch = useDispatch();
  const {categories,status} = useSelector(state=>state.categories);
  useEffect(()=>{
    dispatch(fetchCategory());
  },[]);
  const deleteHandler =  (idCategory) =>{
    //aca va a tener que conectarse el tema de alertas, trabajando con la response
    dispatch(removeCategory(idCategory));
  };
  return(
    <Flex direction='column' m={5} p={5}>
      <Flex justify='space-between' align='center'>
        <Heading >Categorias</Heading>
        <Link to='/create-category' >
          <Icon as={BsPlusSquare} boxSize='30px' mr={5} color='#418bcc'/>
        </Link>
      </Flex>
      <CategoriesSeach/>
      <Table variant="simple" mt={5} bg='rgba(154, 201, 251,0.5)'rounded={5}>
        <Thead>
          <Tr>
            <Th>name</Th>
            <Th>created At</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          { (status==='success' && categories) ? categories.map(category =>{
            return (
              <Tr key={category.id}>
                <Td>{category.name}</Td>
                <Td>{category.created_at}</Td>
                <Td >
                  <Flex justify='center' align='center'>
                    <Link to={{pathname:'/create-category',categoria:category}} >
                      <Icon as={BiEdit} boxSize='20px' color='#398be1'/>
                    </Link>
                    <Button onClick={()=>{deleteHandler(category.id);}}  as={RiDeleteBin4Line} variant="link" boxSize='20px'color='#398be1'/>
                  </Flex>
                  
                </Td>
              </Tr>
            );
          }):
            <Box ml={'30vw'} > <Center h='50vh' ><Loading/></Center> </Box>
          }
        </Tbody>
      </Table>
    </Flex>
    
  );
};
export default CategoriesPage;
