import React from 'react';
import { Flex, ListIcon, ListItem } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiTwotoneUpCircle } from 'react-icons/ai';

const ContactInfoItem = ({element}) =>{
  return(
    <ListItem>
      <Flex align='center' >
        <ListIcon as={AiTwotoneUpCircle} color="#9ac9fb"/>
        <Flex w='100%' bg='#9ac9fb'fontWeight="semibold" p={2} color='white' direction='column' m={1} rounded={5}>
          <Flex align='center'>
            <AiOutlineUser/>
            <Flex ml={2}>{element.name}</Flex>
          </Flex>
          <Flex align='center'>
            <AiOutlinePhone/>
            <Flex ml={2}>{element.phone}</Flex>
          </Flex>
          <Flex align='center'>
            <AiOutlineMail/>
            <Flex ml={2}>{element.email}</Flex>  
          </Flex>
        </Flex> 
      </Flex>
    </ListItem>
  ); 

};
export default ContactInfoItem;