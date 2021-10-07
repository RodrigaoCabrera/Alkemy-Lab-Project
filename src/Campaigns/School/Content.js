import React, { useState, useEffect } from 'react';
import { Box, Text, Heading, Image } from '@chakra-ui/react';

const Content = () => {
  const [dateCampaign, setDateCampaign] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [first, setFirst] = useState(true);

  const calculateDate = () => {
    let date = new Date(2021, 9, 5, 16, 30, 0);
    let today = new Date();
    let dif = date - today;
    let objectDate = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    objectDate.days =  Math.floor(dif / (1000 * 60 * 60 * 24));
    objectDate.hours = Math.floor((dif % 86400000) / 3600000);
    objectDate.minutes = Math.floor((dif / 60000) % 60);
    objectDate.seconds = Math.floor(dif / 1000) % 60;
    setDateCampaign(objectDate);
  };

  useEffect(()=> {
    if(first){
      setInterval(calculateDate, 1000);
      setFirst(false);
    }
  }, []);

  return (
    <Box width='100%' p='40px' display='flex' bg={{base:'transparent', '2xl':'rgba(57,139,180,0.4)'}}>
      <Box position='absolute' width='94%' height='65%' display={{base: 'none', lg: 'block'}}>
        <Box position='absolute' top='50px' right='0'>
          <Image src='/images/logo-school.png' width='66%'/>
        </Box>
        <Box position='absolute' bottom='50px' left='40px'>
          <Image src='/images/content-logo6.png' width='120px'/>
        </Box>
        <Box position='absolute' bottom='0' right='0px'>
          <Image src='/images/content-logo5.png' width='190px'/>
        </Box>
        <Box position='absolute' bottom='0px' left='50%'>
          <Image src='/images/content-logo3.png' width='100px'/>
        </Box>
        <Box position='absolute' top='30px' left='120px'>
          <Image src='/images/content-logo4.png' width='110px'/>
        </Box>
      </Box>
      <Box px={['0', '10rem', '10rem', '18rem']} flexDirection='column' zIndex='9'>
        <Heading size={['lg']} mb='10px'> Campaña de apoyo escolar</Heading>
        <br/>
        <Text fontSize='lg'> 
          El confinamiento provocó que miles de niños se quedaran sin poder 
          seguir el curso escolar completo por falta de medios y ahora, con el inicio del curso,
          muchas familias sin recursos se ven en <Text fontWeight='700' as="i">dificultades para afrontar el coste que supone 
          la vuelta al cole.</Text>
          <br/>
          <br/>
          Queremos aligerar los gastos que el arranque del curso escolar supone para 
          las familias más vulnerables y para conseguirlo hemos puesto en marcha,
          el Proyecto <Text fontWeight='700' as="i"> “Juntos en la vuelta al cole”</Text>
          , un programa especial que va a permitir que niños y niñas en riesgo de pobreza
          empiecen el curso con el material escolar básico que necesitan.
          <br/>
          <br/>
          <Heading size={['md']} mb='10px'>Fecha, Hora y Lugar</Heading>
          El proyecto se llevara a cabo el dia <Text fontWeight='700' as="i">5 de octubre
          a las 16:30 en Parque Saavedra</Text>, Los esperamos!
        </Text>
        <Box my='4' display={['none', 'block']}>
          <Text fontSize='lg'>
            <Heading size={['md']} mt='30px' mb='5px'>
              Cuenta Regresiva:
            </Heading>
            <Text fontWeight='700' as="i" >
              {dateCampaign.days} Dias y {dateCampaign.hours}:{dateCampaign.minutes}:{dateCampaign.seconds} !!
            </Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
 
export default Content;