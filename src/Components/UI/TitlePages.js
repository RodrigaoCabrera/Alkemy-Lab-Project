import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';

const TitlePages = (props) => {
  const imageDefault ='http://ongapi.alkemy.org/storage/onIkohBvrv.jpeg';
  return(
    <Flex justifyContent='start' alignItems='center'>

      <Text 
        as='h1' fontSize={{base: '25px', md: '50px'}} fontWeight='700' 
        color='#398be1' zIndex='9' position='absolute' ml='7'
      >
        {props.text}
      </Text>

      <Image filter='brightness(35%)' width='100%'
        maxH='70vh' src={props.image ? props.image : imageDefault}
        alt='Imagen de Fondo ONG' objectFit="cover"
      />

    </Flex>
  );
};

export default TitlePages;

