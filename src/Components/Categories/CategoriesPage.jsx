import React from 'react';
import {Link} from 'react-router-dom';
import {Table,Thead,Tbody,Tr,Th,Td, Heading, Flex, Icon, Button,} from '@chakra-ui/react';
import {BsPlusSquare} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin4Line} from 'react-icons/ri';

const MOCK_DATA = [
  {
    'id': 553,
    'name': 'Programas Educativos',
    'description': '<p>Apoyo escolar general</p>',
    'image': 'http://ongapi.alkemy.org/storage/WsjkGsP5rC.png',
    'parent_category_id': null,
    'created_at': '2021-08-29T14:22:00.000000Z',
    'updated_at': '2021-08-29T14:22:00.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 554,
    'name': 'Primeras infancias',
    'description': '<p>Acompañamiento y ayuda a los chicos</p>',
    'image': 'http://ongapi.alkemy.org/storage/SxxDW7MsyI.jpeg',
    'parent_category_id': null,
    'created_at': '2021-08-29T14:23:53.000000Z',
    'updated_at': '2021-08-29T14:23:53.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 556,
    'name': 'Tutorias',
    'description': '<p>Tutorías varias</p>',
    'image': 'http://ongapi.alkemy.org/storage/ShZIbhh8Y2.jpeg',
    'parent_category_id': null,
    'created_at': '2021-08-29T14:25:24.000000Z',
    'updated_at': '2021-08-29T14:25:24.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 558,
    'name': 'Educacion',
    'description': '<p>Campania educativa</p>',
    'image': 'http://ongapi.alkemy.org/storage/OmfkvCnkkx.png',
    'parent_category_id': null,
    'created_at': '2021-08-29T15:27:02.000000Z',
    'updated_at': '2021-08-29T15:27:02.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 590,
    'name': 'Progamacion en React.js',
    'description': '<p>El arte de escribir programas informaticos que automaticen la solucion de problemas.</p>\n\n<p>React.js esta enfocado en la creacion de paginas web.</p>\n\n<p>No se puede hacer un programa sin bugs.</p>',
    'image': 'http://ongapi.alkemy.org/storage/SNZ2agQ0qP.jpeg',
    'parent_category_id': null,
    'created_at': '2021-09-05T23:05:35.000000Z',
    'updated_at': '2021-09-06T00:48:46.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 597,
    'name': 'asasdasd',
    'description': 'asas',
    'image': 'http://ongapi.alkemy.org/storage/hmfoQwnCBj.jpeg',
    'parent_category_id': null,
    'created_at': '2021-09-06T17:06:48.000000Z',
    'updated_at': '2021-09-06T17:06:48.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 599,
    'name': 'asasdsad',
    'description': 'asdasdasd',
    'image': 'http://ongapi.alkemy.org/storage/8mAbgE1ANr.jpeg',
    'parent_category_id': null,
    'created_at': '2021-09-06T17:20:43.000000Z',
    'updated_at': '2021-09-06T17:20:43.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 602,
    'name': 'zxcxcv',
    'description': null,
    'image': 'http://ongapi.alkemy.org/storage/C0Ot7gVuFL.jpeg',
    'parent_category_id': null,
    'created_at': '2021-09-06T18:40:27.000000Z',
    'updated_at': '2021-09-06T18:40:27.000000Z',
    'deleted_at': null,
    'group_id': null
  },
  {
    'id': 605,
    'name': 'Categoria añadida',
    'description': '<p>Se a&ntilde;adio la categoria</p>',
    'image': 'http://ongapi.alkemy.org/storage/rK9cdEX7nY.jpeg',
    'parent_category_id': null,
    'created_at': '2021-09-07T03:06:14.000000Z',
    'updated_at': '2021-09-07T03:11:41.000000Z',
    'deleted_at': null,
    'group_id': null
  }
];
const CategoriesPage = () =>{
  return(
    <Flex direction='column' m={5} p={5}>
      <Flex justify='space-between' align='center'>
        <Heading >Categorias</Heading>
        <Link to='/backoffice/categorías/create' >
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
          {MOCK_DATA && MOCK_DATA.map(element =>{
            return (
              <Tr key={element.id}>
                <Td>{element.name}</Td>
                <Td>{element.created_at}</Td>
                <Td >
                  <Flex justify='center' align='center'>
                    <Link to={`/backoffice/categorías/edit/${element.id}`}>
                      <Icon as={BiEdit} boxSize='20px' color='#398be1'/>
                    </Link>
                    <Button /* onClick={} */ as={RiDeleteBin4Line} variant="link" boxSize='20px'color='#398be1'/>
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
