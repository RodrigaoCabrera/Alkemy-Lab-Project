import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Link, Stack, Text } from '@chakra-ui/layout';
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';

const Footer = () => {
  return (
    <Stack 
      backgroundColor='#398BE1'
      height={{
        base: '150px',
        md: '200px',
      }}
      width='100vw'
      color='white'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-evenly'
    >
      <Box>
        <Image 
          src='/images/logo-ong.png' 
          alt='logo-ong'
          boxSize={{
            base: '150px',
            md: '200px'
          }}
        />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
      >
        <Text 
          marginBottom='15px' 
          fontSize={{
            base: '20px',
            xl: '25px'
          }}
          display={{
            base: 'none',
            md: 'inline'
          }}
        >
          Visita nuestra página web
        </Text>
        <Box
          display='flex'
        >
          <Link 
            isExternal 
            href='https://www.facebook.com/Somos_Más' 
            marginRight='15px'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <SiFacebook color='white' fontSize='20px' />
            <Text 
              marginLeft='10px' 
              fontSize='20px'
              display={{
                base: 'none',
                lg: 'inline'
              }}
            >
              Facebook
            </Text>
          </Link>
          <Link 
            isExternal 
            href='https://www.instagram.com/SomosMás' 
            marginRight='15px'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <SiInstagram color='white' fontSize='20px' />
            <Text 
              marginLeft='10px' 
              fontSize='20px'
              display={{
                base: 'none',
                lg: 'inline'
              }}
            >
              Instagram
            </Text>
          </Link>
          <Link 
            isExternal 
            href='https://www.linkedin.com/company/somosmas' 
            marginRight='15px'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <SiLinkedin color='white' fontSize='20px' />
            <Text 
              marginLeft='10px' 
              fontSize='20px'
              display={{
                base: 'none',
                lg: 'inline'
              }}
            >
              Linkedin
            </Text>
          </Link>
          <Link 
            isExternal 
            href='https://www.twitter.com/somosmas'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <SiTwitter color='white' fontSize='20px' />
            <Text 
              marginLeft='10px' 
              fontSize='20px'
              display={{
                base: 'none',
                lg: 'inline'
              }}
            >
              Twitter
            </Text>
          </Link>
        </Box>
      </Box>
      <Box 
        display={{
          base: 'none',
          '2xl': 'flex'
        }}
        flexDirection='column'
        alignItems='center'
      >
        <Text fontSize='25px'>Otras campañas</Text>
        <Link to=''>
          <Text fontSize='20px'>Juguetes</Text>
        </Link>
        <Link to=''>
          <Text fontSize='20px'>Escuela</Text>
        </Link>
      </Box>
    </Stack>
  );
};
 
export default Footer;