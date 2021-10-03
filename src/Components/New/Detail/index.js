import React, { useState, useEffect} from 'react';
import Title from './Title';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Comments from './Comments';
import { useSelector } from 'react-redux';

const Detail = (props) => {
  const { match: { params} } = props;
  const { news: {news } } = useSelector(state => state);

  const [newDetail, setNewDetail] = useState({
    name: '',
    image: '',
    content: ''
  });

  useEffect(() => {
    setNewDetail(news.filter(newDetail => newDetail.id == params.id)[0]);
  }, []);

  return (
    <>
      <Flex direction='column' align='center'>
        <Title name={newDetail?.name || 'Novedad no cargada'} />

        <Flex
          minH='65vh'
          m='5px 5px'
          w='98%'
          borderRadius='5px'
          bgColor='#398be1'
          justifySelf='center'
          direction={{ base: 'column', sm: 'column', md: 'row' }}
          boxShadow={{ base: 'lg', sm: 'xl', md: 'xl' }}
        >
          <Box 
                         
            w={{ base: '100%', sm: '100%', md: '40%' }}
            borderRightRadius={{ base: '5px', sm: '5px', md: '0' }}
            borderLeftRadius='5px'
          >
            <Image 
              src={newDetail?.image} 
              alt='imagen de novedades' 
              boxSize='100%' 
              borderLeftRadius='5px'
              borderRightRadius={{ base: '5px', sm: '5px', md: '0' }}
            />
          </Box>

          <Box
            w={{ base: '100%', sm: '100%', md: '60%' }}
            display='flex'
            borderRightRadius='5px'
          >
            <Text
              alignSelf='center'
              textAlign={{ base: 'center', sm: 'center', md: 'start' }}
              p='10px 10px'
              fontSize={{ base: '20px', sm: '20px', md: '16.5px' }}
              fontWeight='600'
              w='full'
              color='#fff'
            >
              {newDetail?.content || 'Error en el contenido'}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Comments />
    </>
  );
};

export default Detail;