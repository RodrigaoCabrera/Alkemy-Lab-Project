import { Image } from '@chakra-ui/image';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import ThankImage from './ThankImage.jpg';
const ThanksScreen = ()=>{
  return(
    <Flex mt={8} justifyContent='center'>
      <Flex direction='column'align='stretch' justify='flex-end' w='90%' position='relative'>
        <Heading fontWeight='bold' size='3xl' textAlign='center' p={4} position='absolute'   bgColor='rgba(154, 201, 251,0.5)'>
         Gracias por ayudarnos a lograr cada dia <Text as='span' color='#DB5752' >M</Text><Text color='#FAFA88' as='span'>A</Text><Text color='#9AC9FB' as='span'>S</Text> !
        </Heading>
        <Image src={ThankImage} />
      </Flex>
    </Flex>
  );
};
export default ThanksScreen;