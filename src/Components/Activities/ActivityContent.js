import { Box, Heading, Stack, Text } from '@chakra-ui/layout';

import React from 'react';

import TitlePages from '../UI/TitlePages';


export const ActivityContent = () => {


  const mockText = `Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio
  La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación,
  salud, trabajo, deporte, responsabilidad y compromiso.`;


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

      </Box>

    </Stack>

  );

};

export default ActivityContent;