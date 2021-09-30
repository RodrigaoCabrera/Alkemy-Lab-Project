import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Center } from '@chakra-ui/react';
import { getTitleRequest, getWelcomeTextRequest } from '../../Services/homeService';
import { BiErrorCircle } from 'react-icons/bi';
import errorApiAlert from '../../Services/ErrorApiAlert';

const Home = () => {
  const [titleText,setTitle] = useState('');
  const [welcomeText,setWelcome] = useState('');
  const [errorRequest, setErrorRequest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const setData =async ()=>{
      getTitleRequest()
        .then(res=>{
          if(res >= 400 && res < 600)errorApiAlert(res);
          setTitle(res.data['name']);
        })
        .catch(error=>errorApiAlert(error));
        
      getWelcomeTextRequest()
        .then(res=>{
          if(res >= 400 && res < 600)errorApiAlert(res);
          setWelcome(res.data['welcome_text']);
        })
        .catch(error=> errorApiAlert(error));
    };
    setData();
  },[]);
  
  return (
    <Box id="home" display="block">
      <Box px={6} backgroundColor="#9ac9fb" color="white">
        <Heading textAlign="center" mb={4}>{titleText}</Heading>
        <Text textAlign="justify" fontWeight="bold" pb={4}>{ welcomeText}</Text>
      </Box>
      <Box>
        {/* componente slider */}
      </Box>
      <Box>
        {/* listado de novedades */}
      </Box>
    </Box>
  );
};

export default Home;