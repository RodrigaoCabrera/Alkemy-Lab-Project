import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Table,Thead,Tbody,Tr,Th,Td, Heading, Flex, Icon, Button,} from '@chakra-ui/react';
import {BsPlusSquare} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin4Line} from 'react-icons/ri';
import { useEffect } from 'react';
import { deleteCategory, getCategories } from '../../Services/categoryService';



//aca se debe obtener la data desde useSelector del reducer
const CategoriesPage = () =>{
  const deleteHandler =  (idCategory) =>{
    //aca va a tener que conectarse el tema de alertas, trabajando con la response
    deleteCategory(idCategory).then(res=>console.log(res));
    setCategories(categories.filter((element)=>element.id!==idCategory));
  };

  const [categories,setCategories]= useState([]);
  useEffect(()=>{
    const setData = async()=>{
      const data = await getCategories();
      setCategories(data.data);
    };
    setData();
  },[]);
  return(
    <Flex direction='column' m={5} p={5}>
      <Flex justify='space-between' align='center'>
        <Heading >Categorias</Heading>
        <Link to='/create-category' >
          <Icon as={BsPlusSquare} boxSize='30px' mr={5} color='#418bcc'/>
        </Link>
      </Flex>
      <Table variant="simple" mt={5} bg='rgba(154, 201, 251,0.5)'rounded={5}>
        <Thead>
          <Tr>
            <Th>name</Th>
            <Th>created At</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories && categories.map(category =>{
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
          })}
        </Tbody>
      </Table>
    </Flex>
    
  );
};
export default CategoriesPage;
