import React from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Link, Text, Flex, Heading, } from '@chakra-ui/layout';
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si';
import ToyCampaignLogo from './ToyCampaignLogo.png';
import { useMediaQuery } from '@chakra-ui/media-query';

const Footer = () => 

{
  const [isTabletSize, isLaptopSize, isSmartTvSize] = useMediaQuery([
    '(min-width: 768px)',
    '(min-width: 1024px)',
    '(min-width: 1920px)',
  ]);
  const onMobile = !(isTabletSize || isLaptopSize || isTabletSize || isSmartTvSize);
  const onTablet = (isTabletSize && !(isLaptopSize || isSmartTvSize));
  const onLaptop = (isLaptopSize && !(isSmartTvSize));
  const onSmartTv = (isSmartTvSize);


  const baseContent = (
    <Flex w='100%' h='15vh' align='center' justify='center' p={3}>
      <Image h='80%' src={ToyCampaignLogo} />
      <Box display='flex'>
        <SiInstagram color='white' fontSize='20px' />
        <SiFacebook color='white' fontSize='20px' />
        <SiLinkedin color='white' fontSize='20px' />
        <SiTwitter color='white' fontSize='20px' />
        <Heading><Text as='span' color='blue'>Visita Nuestra Web</Text></Heading>
        <Image
          src='/images/logo-ong.png'
          alt='Logo Somos MAS'
          boxSize='200px'
        /> </Box>
    </Flex>
  );

  const tabletContent = (
    <Flex w='100%' h='15vh' align='center' justify='space-around' p={3}>
      <Box display='flex'>
        <SiInstagram color='white' fontSize='20px' />
        <SiFacebook color='white' fontSize='20px' />
        <SiLinkedin color='white' fontSize='20px' />
        <SiTwitter color='white' fontSize='20px' />
        <Heading><Text as='span' color='blue'>Visita Nuestra Web</Text></Heading>
        <Image
          src='/images/logo-ong.png'
          alt='Logo Somos MAS'
          boxSize='200px'
        /> </Box>
    </Flex>
  );

  const laptopContent = (
    <Flex w='100%' h='15vh' align='center' justify='space-around' p={3}>
      <Box display='flex'>
        <SiInstagram color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.instagram.com/SomosMÃ¡s'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiFacebook color='white' fontSize='20px' /><Link
          isExternal
          href='https://www.facebook.com/Somos_MÃ¡s'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiLinkedin color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.linkedin.com/company/somosmas'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiTwitter color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.twitter.com/somosmas'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <Heading><Text as='span' color='blue'>Visita Nuestra Web</Text></Heading>
        <Image
          src='/images/logo-ong.png'
          alt='Logo Somos MÃ¡s'
          boxSize='200px'
        /> </Box>
    </Flex>
  );
  const smartTvContent = (
    <Flex w='100%' h='15vh' align='center' justify='space-around' p={3}>
      <Box display='flex'>
        <SiInstagram color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.instagram.com/SomosMÃ¡s'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiFacebook color='white' fontSize='20px' /><Link
          isExternal
          href='https://www.facebook.com/Somos_MÃ¡s'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiLinkedin color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.linkedin.com/company/somosmas'
          marginRight='15px'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <SiTwitter color='white' fontSize='20px' />
        <Link
          isExternal
          href='https://www.twitter.com/somosmas'
          display='flex'
          flexDirection='row'
          alignItems='center'
        >

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
        <Heading><Text as='span' color='blue'>Visita Nuestra Web</Text></Heading>
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
        <Image
          src='/images/logo-ong.png'
          alt='Logo Somos MÃ¡s'
          boxSize='200px'
        /> </Box>
    </Flex>
  );
  let content;
  if (onMobile) {
    content = baseContent;
  } else if (onTablet) {
    content = tabletContent;
  }
  else if (onLaptop) {
    content = laptopContent;
  }
  else if (onSmartTv) {
    content = smartTvContent;
  }
  return (
    <Flex w='100%' h='15vh'>
      {content}
    </Flex>

  );
};
export default Footer;