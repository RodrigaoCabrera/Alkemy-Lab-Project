import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import './CardListStyles.css';

const Card = ({imageUrl='http://ongapi.alkemy.org/storage/onIkohBvrv.jpeg',
  imageAlt = 'imagen Prueba',
  title =' ONG - Somos Más',
  description='Trabajar articuladamente con los distintos aspectos de la vida de las familias generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo. '}
) => {
  return (
    <Box className="card-info" borderWidth="1px" borderRadius="lg" overflow="hidden" >
      <Box mt={3}>
        <Image src={imageUrl} 
          alt={imageAlt} />
      </Box>
      <Box p="6">
        <Heading
          mb={2}
          fontWeight="bold"
          as="h5"
          textAlign="center"
        >{title}
        </Heading>
        <Text
          textAlign="justify" >
          {description}
        </Text >
      </Box>
    </Box>
  );
};
export default Card;