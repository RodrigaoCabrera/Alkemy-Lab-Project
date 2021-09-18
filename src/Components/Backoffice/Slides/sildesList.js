import React, { useState } from 'react';
import SlideCard from './SlideCard';
import { Box, Text, InputRightElement, InputGroup, Center, Tooltip } from '@chakra-ui/react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import HeaderList from './HeaderList';

const sildesList = () => {

  const mockSlides = [
    {
      "id": 217,
      "name": "Escuela de verano",
      "description": "<p>Enseñamos natación a los niños en verano</p>",
      "image": "http://ongapi.alkemy.org/storage/F99ywgR0qo.jpeg",
      "order": 0,
      "user_id": null,
      "created_at": "2021-08-28T19:09:35.000000Z",
      "updated_at": "2021-08-28T19:09:35.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 242,
      "name": "test4",
      "description": "<p>test 123</p>",
      "image": "http://ongapi.alkemy.org/storage/6miBI4D0Vi.jpeg",
      "order": 7856986,
      "user_id": null,
      "created_at": "2021-09-05T17:45:51.000000Z",
      "updated_at": "2021-09-05T17:45:51.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 243,
      "name": "test123456789",
      "description": "<p>test1234</p>",
      "image": "http://ongapi.alkemy.org/storage/JovdlL6e4L.jpeg",
      "order": 5206984,
      "user_id": null,
      "created_at": "2021-09-05T17:47:53.000000Z",
      "updated_at": "2021-09-05T17:48:41.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 245,
      "name": "La%20macagua",
      "description": "%3Cp%3Ees%20una%20fruta%20muy%20%26aacute%3Bcida%2C%20ustedes%20no%20deberian%20permitir%20solo%204%20numeros%2C%20deberian%20colocar%20que%20se%20pueda%20colocar%20cualquier%20n%26uacute%3Bmero%20un%20long!%3C%2Fp%3E%0A",
      "image": "http://ongapi.alkemy.org/storage/ymSyMZ393s.png",
      "order": 805,
      "user_id": null,
      "created_at": "2021-09-05T22:49:36.000000Z",
      "updated_at": "2021-09-05T22:49:36.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 254,
      "name": "Prueba de funcionamiento metodos con cambios",
      "description": "<p>Prueba de funcionamiento de metodos centralizados. Cambiando los datos&nbsp;</p>",
      "image": "http://ongapi.alkemy.org/storage/CUElZ7pzyc.jpeg",
      "order": 6457647,
      "user_id": null,
      "created_at": "2021-09-09T15:07:26.000000Z",
      "updated_at": "2021-09-09T15:08:35.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 255,
      "name": "Prueba 1",
      "description": "<p>Prueba 1 para ver si las llamadas a la Api funcionan&nbsp;</p>",
      "image": "http://ongapi.alkemy.org/storage/X3uSu5XCJ3.jpeg",
      "order": 9411331,
      "user_id": null,
      "created_at": "2021-09-09T16:55:46.000000Z",
      "updated_at": "2021-09-09T16:55:46.000000Z",
      "deleted_at": null,
      "group_id": null
    },
    {
      "id": 256,
      "name": "Prueba de funcionamiento metodos 2",
      "description": "<p>CAMBIOS&nbsp;</p>",
      "image": "http://ongapi.alkemy.org/storage/oRpMMi3j86.jpeg",
      "order": 1002791,
      "user_id": null,
      "created_at": "2021-09-09T16:59:24.000000Z",
      "updated_at": "2021-09-09T16:59:57.000000Z",
      "deleted_at": null,
      "group_id": null
    }
  ];

  const [Decreciente, setDecreciente] = useState(true);

  Decreciente 
    ? mockSlides.sort(function (a, b) { return a.order - b.order; }) 
    : mockSlides.sort(function (a, b) { return b.order - a.order; });

  return (
    <>
      <Text
        as='h1' fontSize={{ base: '25px', md: '50px' }} 
        fontWeight='700' color='#398be1' align="center"
      >
        Slides Dashboard
      </Text>
      <Center>
        <Box w="90%" p={4} color="black" 
          borderRadius="lg" overflow="hidden" 
          borderWidth="5px"
        >
          <HeaderList 
            titleList="Slides List" 
            linkCreate='/backoffice/slides/create'  
          />
          <Center>
            <Box w="90%" p={4} color="black" 
              borderRadius="lg" overflow="hidden" 
              borderWidth="5px"
            >
              <InputGroup>
                <Text
                  as='h1' fontSize={{ base: '10px', md: '20px' }} 
                  fontWeight='700' color='#398be1' 
                  align="left" w={[100, 200, 400, 600, 700]}
                >
                  Name
                </Text>
                <Text
                  as='h1' fontSize={{ base: '10px', md: '20px' }} 
                  fontWeight='700' color='#398be1' 
                  ml="10" onClick={() => setDecreciente(!Decreciente)}
                >
                  <InputGroup ml="5" >
                    <InputRightElement>
                      <Tooltip label="Order">
                        <Text>
                          {
                            Decreciente == true 
                              ? <AiFillCaretDown /> 
                              : <AiFillCaretUp />
                          }
                        </Text>
                      </Tooltip>
                    </InputRightElement>
                  </InputGroup>
                </Text>
                <Text
                  as='h1' fontSize={{ base: '10px', md: '20px' }}
                  fontWeight='700' color='#398be1' 
                  align="right" ml="19%"
                >
                  Action
                </Text>
              </InputGroup>
            </Box>
          </Center>
          {
            mockSlides.map(x => 
              <SlideCard 
                key={x.id} title={x.name} 
                image={x.image} order={x.order} 
              />)
          }
        </Box>
      </Center>
    </>
  );
};

export default sildesList;
