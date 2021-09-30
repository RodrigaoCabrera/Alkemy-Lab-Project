import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import ToyCampaignLogo from './ToyCampaignLogo.png';
const Header = () => {
  const [isTabletSize, isLaptopSize,isSmartTvSize] = useMediaQuery([
    '(min-width: 768px)',
    '(min-width: 1024px)',
    '(min-width: 1920px)',
  ]);
  const onMobile = !(isTabletSize||isLaptopSize||isTabletSize||isSmartTvSize);
  const onTablet = (isTabletSize && !(isLaptopSize||isSmartTvSize));
  const onLaptop = (isLaptopSize && !(isSmartTvSize));
  const onSmartTv = (isSmartTvSize);
  
  
  const baseContent = (
    <Flex w='100%' h='15vh'align='center' justify='center' /* bgColor='rgba(154, 201, 251,0.9)' */ p={3}>
      <Image  h='80%' src={ToyCampaignLogo}/>
    </Flex>
  );
  const tabletContent = (
    <Flex w='100%' h='15vh' /* bgColor='rgba(154, 201, 251,0.9)'  */align='center' justify='space-around' p={3}>
      <Image  h='80%' src={ToyCampaignLogo}/>
      <Image 
        src='/images/logo-ong.png'
        alt='Logo Somos Más'
        boxSize='200px'
      />
    </Flex>
  );
  const laptopContent = (
    <Flex w='100%' h='15vh'  align='center' justify='space-around' p={3}>
      <Image  h='80%' src={ToyCampaignLogo}/>
      <Flex direction='column' align='center' justify='center'>
        <Heading color='Black' size='xl'>Entre <Text as='span' color='#DB5752'> TO</Text><Text as='span' color='#FAFA88'>D</Text><Text as='span' color='#9AC9FB'>OS </Text></Heading>
        <Heading color='Black' size='xl'>Logramos <Text as='span' color='#DB5752'> M</Text><Text as='span' color='#FAFA88'>A</Text><Text as='span' color='#9AC9FB'>S </Text></Heading>
      </Flex>
     
      <Image 
        src='/images/logo-ong.png'
        alt='Logo Somos Más'
        boxSize='200px'
      />
    </Flex>
  );
  const smartTvContent = (
    <Flex w='100%' h='15vh' bgColor='rgba(154, 201, 251,0.5)' align='center' justify='space-around' p={3}>
      <Image  h='80%' src={ToyCampaignLogo} alt='Campaña: Juguetes por mas sonrisas'/>
      <Flex direction='column' align='center' justify='center'>
        <Heading color='Black' size='xl'>Entre <Text as='span' color='#DB5752'> TO</Text><Text as='span' color='#FAFA88'>D</Text><Text as='span' color='#9AC9FB'>OS </Text></Heading>
        <Heading color='Black' size='xl'>Logramos <Text as='span' color='#DB5752'> M</Text><Text as='span' color='#FAFA88'>A</Text><Text as='span' color='#9AC9FB'>S </Text></Heading>
      </Flex>
      <Image 
        src='/images/logo-ong.png'
        alt='Logo Somos Más'
        h='80%'
      />
    </Flex>
  );
  let content;
  if(onMobile){
    content=baseContent;
  }else if(onTablet){
    content=tabletContent;
  }
  else if(onLaptop){
    content=laptopContent;
  }
  else if(onSmartTv){
    content=smartTvContent; 
  }
  
  
  return (
    <Flex w='100%' h='15vh'>
      {content}
    </Flex>
      
  );
};
 
export default Header;