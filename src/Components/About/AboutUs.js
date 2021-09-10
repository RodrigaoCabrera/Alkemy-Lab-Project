import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import TitlePages from '../UI/TitlePages';

export const AboutUs = () => {

  const mockText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into 
  electronic typesetting, remaining essentially unchanged. It was popularised in 
  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker 
  including versions of Lorem Ipsum.`;

  return (
    <Stack>
      <TitlePages text='Nosotros' />
      <Box>
        <Heading as='h2' size='md' marginLeft={6} marginTop={3}>Sobre Nosotros</Heading>
        <Stack margin={6} marginTop={6}>
          <Text>
            {mockText}
          </Text>
        </Stack>
      </Box>
    </Stack>
  );
};
