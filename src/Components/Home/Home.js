import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { getTitleRequest, getWelcomeTextRequest } from '../../Services/homeService';
import CarrouselHome from '../Home/CarrouselHome';
import {GetSlides} from '../../Services/SlidesService';
import {GetNews} from'../../Services/NovedadesService';
import  NewsList from'../News/NewsList';
import Loading from '../UI/Loading';
import { showErrorAlert } from '../../Services/alertsService';

const Home = () => {
  const [titleText, setTitle] = useState('');
  const [welcomeText, setWelcome] = useState('');
  const [loading, setLoading] = useState(true);
  const [news,setNews]= useState([]);
  const [slides,setSlides]= useState([]);

  useEffect(() => {
    getTitleRequest()
      .then(res => {
        if (res.success) {
          setTitle(res.data['name']);
        } else {
          showErrorAlert();
        }
      })
      .catch(error => showErrorAlert(error));

    getWelcomeTextRequest()
      .then(res => {
        if (res.success) {
          setWelcome(res.data['welcome_text']);
        } else {
          showErrorAlert();
        }
      })
      .catch(error => showErrorAlert(error));
  }, []);

  React.useEffect(()=>{
    GetSlides().then(res=>{
      setSlides(res.data.slice(0,5));
      setLoading(false);
    });
    GetNews().then(res => {
      if(res.data) {
        setNews(res.data.slice(res.data.length - 4, res.data.length));
        setLoading(false);
      } else {
        showErrorAlert();
      }
    })
      .catch(error => showErrorAlert(error));
  },[]);

  return (
    slides.length&&
    <Box id ="home" display="block">
      <Flex w='100%' maxH='70vh' position='relative' justifyContent='center' alignItems='center'></Flex>
      {
        !loading
          ? <CarrouselHome slides={slides}  />
          : <Loading />
      }
      <Box px={6} backgroundColor="#9ac9fb" color="white">
        <Heading textAlign="center" mb={4}>{titleText}</Heading>
        <Text textAlign="justify" fontWeight="bold" pb={4}>{welcomeText}</Text>
      </Box>
      <Box>
        {
          !loading
            ? <NewsList news={news} />
            : <Loading />
        }
      </Box>
    </Box>
    
  );
};

export default Home;