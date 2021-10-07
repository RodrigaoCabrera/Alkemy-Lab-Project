import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import LogoSchool from './LogoShool.png';
import LogoONG from './LogoONG.png';

const Header = () => {

  const [tablet, Lapto,SmartTV] = useMediaQuery([
    '(min-width: 768px)',
    '(min-width: 1024px)',
    '(min-width: 1920px)',]);

  const onMobile = !(Lapto||tablet||SmartTV);
  const onTablet = (tablet && !(Lapto||SmartTV));
  const onLaptop = (Lapto && !(SmartTV));
  const onSmartTv = (SmartTV);

  const MobileHeaderSchool = (
    <Flex w='100%' h='15vh'align='center' justify='center'  p={4}>
      <Image  h='90%' src={LogoSchool}/>
    </Flex>
  );

  const tableHeaderSchool = (
    <Flex w='100%' h='15vh' align='center' justify='space-around' p={4}>
      <Image  h='90%' 
        src={LogoSchool}
        alt='Logo School'/>
      <Image 
        src={LogoONG}
        alt='Logo Somos Más'
        boxSize='150px'
      />
    </Flex>
  );

  const laptopheaderSchool = (
    <Flex w='100%' h='15vh'  align='center' justify='space-around' p={4}>
      <Image  h='95%' src={LogoSchool}/>
      <Flex direction='column' align='center' justify='center'>
        <Heading color='Black' size='xl'> 
          <Text as='span' color='black'>JUN</Text>
          <Text as='span' color='#DB5752'>TOS</Text>
          <Text as='span' color='#FAFA88'> EN</Text>
          <Text as='span' color='#9AC9FB'> LA</Text>
        </Heading>
        <Heading color='Black' size='xl'> 
          <Text as='span' color='black'>VUELTA</Text>
          <Text as='span' color='#DB5752'> AL</Text>
          <Text as='span' color='#FAFA88'>CO</Text>
          <Text as='span' color='#9AC9FB'>LE </Text>
        </Heading>
      </Flex>
      <Image 
        src={LogoONG}
        alt='Logo Somos Más'
        boxSize='200px'
      />
    </Flex>
  );

  const smartTvheaderSchool = (
    <Flex w='100%' h='15vh' bgColor='rgba(154, 201, 251,0.5)' align='center' justify='space-around' p={4}>
      <Image  h='80%' src={LogoSchool} alt='Campaña: Juguetes por mas sonrisas'/>
      <Flex direction='column' align='center' justify='center'>
        <Heading color='Black' size='xl'> 
          <Text as='span' color='black'>JUN</Text>
          <Text as='span' color='#DB5752'>TOS</Text>
          <Text as='span' color='#FAFA88'> EN</Text>
          <Text as='span' color='#9AC9FB'> LA</Text>
        </Heading>
        <Heading color='Black' size='xl'> 
          <Text as='span' color='black'>VUELTA</Text>
          <Text as='span' color='#DB5752'> AL</Text>
          <Text as='span' color='#FAFA88'>CO</Text>
          <Text as='span' color='#9AC9FB'>LE </Text>
        </Heading>
      </Flex>
      <Image 
        src={LogoONG}
        alt='Logo Somos Más'
        h='200px'
      />
    </Flex>
  );

  let headerSchool;
  if(onMobile){
    headerSchool=MobileHeaderSchool;
  }
  else if(onTablet){
    headerSchool=tableHeaderSchool;
  }
  else if(onLaptop){
    headerSchool=laptopheaderSchool;
  }
  else if(onSmartTv){
    headerSchool=smartTvheaderSchool; 
  }

  return (
    <div>
      {headerSchool}
    </div>
  );
};

export default Header;