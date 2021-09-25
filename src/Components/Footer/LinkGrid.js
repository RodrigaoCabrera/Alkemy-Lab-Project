import React from 'react';
import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FooterHeading } from './suscribeForm/FooterHeading';

export const LinkGrid = ({urls}) => (
  <SimpleGrid columns={2} display='flex' justifyContent='space-around'>
    <Box minW="130px">
      <FooterHeading mb="4">Servicios</FooterHeading>
      <Stack>
        <Link as={RouterLink} to='/'>Inicio</Link>
        <Link as={RouterLink} to='/activity-content'>Actividades</Link>
        <Link as={RouterLink} to='/novedades'>Novedades</Link>
        <Link as={RouterLink} to='/nosotros'>Nosotros</Link>
        <Link as={RouterLink} to='/contacto'>Contacto</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Redes sociales</FooterHeading>
      <Stack>
        <Link href={`https://${urls.facebook_url}`} isExternal>Facebook</Link>
        <Link href={`https://${urls.instagram_url}`} isExternal>Instagram</Link>
        <Link href={`https://${urls.linkedin_url}`} isExternal>Linkedin</Link>
        <Link href={`https://${urls.twitter_url}`} isExternal>Twitter</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
