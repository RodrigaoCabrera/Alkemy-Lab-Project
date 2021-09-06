import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Link as RouterLink } from 'react-router-dom';

const Organization = () => {

  const [orgData, setOrgData] = useState({
    name: '',
    logo: '',
    short_description: ''
  });
  
  const fetchData = async () => {
    const { data: {data}} = await axios.get('http://ongapi.alkemy.org/api/organization');
    return data;
  };

  useEffect(async () => {
    const data = await fetchData();
    setOrgData(data);
  }, []);

  return (
    <Stack 
      height='100vh'
      marginY={6}
      flexDirection='column' 
      spacing={2} 
      justifyContent='center' 
      alignItems='center' 
    >
      <Stack 
        spacing={{
          base: 6,
          md: 10
        }} 
        padding={2} 
        alignItems='center'
        maxWidth={{
          base: 'full',
          md: 'lg'
        }}
      >
        <Heading 
          as='h1' 
          textAlign='center' 
          color='#005EAF'
        >
          {orgData.name}
        </Heading>
        <Image
          src={orgData.logo}
          boxSize={'xs'}

          objectFit='cover'
        />
        <Heading as='h2' fontSize='24px'>Nuestro objetivo</Heading>
        <Text textAlign='justify'
          fontSize='lg'
        >
          {orgData.short_description}
        </Text>
      </Stack>
      <Stack paddingX={3}>
        <Link
          as={RouterLink}
          to='/backoffice/organization/edit'
          color='#005EAF'
          fontWeight='bold'
          fontSize='18px'
          alignSelf='center'
        >
          Editar
        </Link>
      </Stack>
    </Stack>
  );
};

export default Organization;
