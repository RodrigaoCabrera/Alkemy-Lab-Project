import React from 'react';
import { Image } from '@chakra-ui/image';
import { Link, Stack } from '@chakra-ui/layout';
import { Link as RouterLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <Stack justifyContent='center' alignItems='center'>
      <Link as={RouterLink} to='/'>
        <Image 
          src='/images/logo-ong.png'
          alt='Logo Somos Más'
          boxSize='200px'
        />
      </Link>
    </Stack>
  );
};
