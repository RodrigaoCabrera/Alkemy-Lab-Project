import React, { useState, useEffect } from 'react';
import SlideCard from './SlideCard';
import { Box, Text, InputRightElement, InputGroup, Center, Tooltip } from '@chakra-ui/react';
import Loading from '../../UI/Loading'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import HeaderList from './HeaderList';
import { getSlidesAction } from '../../../features/slideReducer';
import { useDispatch, useSelector } from 'react-redux'
const sildesList = () => {

  const [Decreciente, setDecreciente] = useState(true);

  const dispatch = useDispatch();

  const { Status, Slides } = useSelector(store => store.slides);

  useEffect(() => {
    dispatch(getSlidesAction());
  }, []);

  let mockSlides;

  if ((Status === 'success')) {
    mockSlides = [...Slides];
    Decreciente
      ? mockSlides.sort(function (a, b) { return a.order - b.order; })
      : mockSlides.sort(function (a, b) { return b.order - a.order; });
  }
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
            linkCreate='/backoffice/create-slide/'
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
            !(Status === 'success') 
              ? <Box mt={3} ><Loading /></Box>
              : mockSlides.map(x =>
                <SlideCard
                  key={x.id} title={x.name}
                  image={x.image} order={x.order}
                  id={x.id} description={x.description}
                />)
          }
        </Box>
      </Center>
    </>
  )
};

export default sildesList;
