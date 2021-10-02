import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Center, Flex } from '@chakra-ui/react';
import { getTitleRequest, getWelcomeTextRequest } from '../../Services/homeService';
//import { BiErrorCircle } from 'react-icons/bi';
import errorApiAlert from '../../Services/ErrorApiAlert';
import HeaderPublic from '../HeaderPublic/HeaderPublic';
import Footer from '../Footer/Footer';
import CarrouselHome from '../Home/CarrouselHome';
import {GetSlides} from '../../Services/SlidesService';
import {GetNews} from'../../Services/NovedadesService';
import  NewsList from'../News/NewsList';
import LinkInside from '../../Layouts/LinkInside';






const Home = () => {
  const [titleText, setTitle] = useState('');
  const [welcomeText, setWelcome] = useState('');
  const [errorRequest, setErrorRequest] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news,setNews]= useState([]);
  const [slides,setSlides]= useState([]);

  useEffect(() => {
    const setData = async () => {
      getTitleRequest()
        .then(res => {
          if (res >= 400 && res < 600) errorApiAlert(res);
          setTitle(res.data['name']);
        })
        .catch(error => errorApiAlert(error));

      getWelcomeTextRequest()
        .then(res => {
          if (res >= 400 && res < 600) errorApiAlert(res);
          setWelcome(res.data['welcome_text']);
        })
        .catch(error => errorApiAlert(error));
    };
    setData();
  }, []);

  React.useEffect(()=>{
    GetSlides().then(res=>{
      setSlides(res.data.slice(0,5));
    });
    GetNews ().then(res => {
      setNews(res.data.slice(0,5));
    });
  },[]);

  const LinkInside = [
    { text: 'Inicio', link: '/', onlyUserLoged: true },
    { text: 'Actividades', link: '/activity-content', onlyUserLoged: true },
    { text: 'Novedades', link: '/novedades', onlyUserLoged: true },
    { text: 'Nosotros', link: '/nosotros', onlyUserLoged: true },
    { text: 'Contacto', link: '/contacto', onlyUserLoged: true },
    { text: 'CrearUsuario', link:'/create-user', onlyUserLoged:true },
  ];
 

  return (
    slides.length&&
    <Box id ="home" display="block">
      <Flex w='100%' maxH='70vh' position='relative' justifyContent='center' alignItems='center'></Flex>
      
      <HeaderPublic navigation= {LinkInside} />

      <CarrouselHome slides={slides}  />
     
      <Box px={6} backgroundColor="#9ac9fb" color="white">
        <Heading textAlign="center" mb={4}>{titleText}</Heading>
        <Text textAlign="justify" fontWeight="bold" pb={4}>{welcomeText}</Text>
      </Box>
      <Box>
        <NewsList news  = { news } />
      </Box>
      <Footer/>
    </Box>
    
  );
};

export default Home;