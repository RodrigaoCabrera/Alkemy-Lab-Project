import React, { useEffect, useState } from 'react';
import { Box, Stack, StackDivider } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { LinkGrid } from './LinkGrid';
import { Logo } from './Logo';
import SubscribeForm  from './suscribeForm/SubscribeForm';
import { GetRequest } from '../../Services/publicApiService';
import { Copyright } from './Copyright';

const Footer = () => {

  const [organizationData, setOrganizationData] = useState({
    cellphone: '',
    phone: '',
    address: '',
    name: '',
  });
  
  const [urls, setUrls] = useState({
    facebook_url: '',
    instagram_url: '',
    linkedin_url: '',
    twitter_url: '',
  });

  useEffect(async () => {
    await GetRequest('http://ongapi.alkemy.org/api/organization')
      .then(res => {
        setUrls({
          facebook_url: res.data.facebook_url,
          instagram_url: res.data.instagram_url,
          linkedin_url: res.data.linkedin_url,
          twitter_url: res.data.twitter_url
        });
        setOrganizationData({
          cellphone: res.data.cellphone,
          phone: res.data.phone,
          address: res.data.address,
        });
      });
  }, []);

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW='7xl'
      alignSelf='center'
      py="12"
      px={{
        base: '4',
        md: '8',
      }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '10',
            lg: '28',
          }}
        >
          <Box flex="1">
            <Logo />
          </Box>
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '10',
              md: '20',
            }}
          >
            <LinkGrid
              spacing={{
                base: '10',
                md: '20',
                lg: '28',
              }}
              flex="1"
              urls={urls}
            />
            <SubscribeForm/>
          </Stack>
        </Stack>
        <Box 
          display='flex' 
          flexDirection={{
            base: 'column',
            md: 'row'
          }} 
          alignItems={{
            base: 'center'
          }}
          
          justifyContent='space-between'
        >
          <Box 
            display='flex'
            flexDirection={{
              base: 'column',
              md: 'row'
            }} 
            marginBottom={{
              base: '10px'
            }}
          >
            <Text marginBottom={{
              base: '5px',
              md: '0px'
            }} marginRight={4}>Teléfono: {organizationData.phone}</Text>
            <Text marginBottom={{
              base: '5px',
              md: '0px'
            }} marginRight={4}>Celular: {organizationData.cellphone}</Text>
            <Text marginBottom={{
              base: '5px',
              md: '0px'
            }}>Dirección: {organizationData.address}</Text>
          </Box>
          <Copyright />
        </Box>
      </Stack>
    </Box>
  );};

export default Footer;
