import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Center } from '@chakra-ui/react';
import { getTitleRequest, getWelcomeTextRequest } from '../../Services/homeService';
import { BiErrorCircle } from 'react-icons/bi';

const Home = () => {
  const [titleText,setTitle] = useState('');
  const [welcomeText,setWelcome] = useState('');
  const [errorRequest, setErrorRequest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const setData =async ()=>{
      getTitleRequest().then(res=>setTitle(res)).catch(error=>console.log(error));
      getWelcomeTextRequest().then(res=>setWelcome(res)).catch(error=>console.log(error));
    };
    setData();

  },[]);
  
  return (
    <Box id="home">
      <Box p={10} backgroundColor="#9ac9fb" color="white">
        <Heading textAlign="center">{titleText}</Heading>
        <Text textAlign="justify" fontWeight="bold">{ welcomeText}</Text>
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