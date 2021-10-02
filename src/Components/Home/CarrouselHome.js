import React, { useState, useEffect } from 'react';
import { Image, Box, Flex, Text, Heading, Button, HStack} from '@chakra-ui/react';
import { FcNext, FcPrevious } from 'react-icons/fc';

const CarrouselHome = ({slides}) => {
  const [slideActual, setSlideActual] = useState(0);
  let timeSlide;

  const goToSlide = (num) => {
    if(num < slides.length && num >= 0){
      clearTimeout(timeSlide);
      setSlideActual(num);
    }
  };

  useEffect(() => {
    clearTimeout(timeSlide);
    timeSlide = setTimeout(()=> {
      if(slideActual === slides.length - 1){
        setSlideActual(0);
      }else{
        goToSlide(slideActual+1);
      }
    }, 5000);
  }, [slideActual]);

  return (
    <Flex w='100%' maxH='70vh' position='relative' justifyContent='center' 
      alignItems='center'
    >
      <Button zIndex='3' variant="ghost"
        w={{base: '50vw', md: 'auto'}}
        h={{base: '100%', md: 'auto'}}
        _hover={
          {base:{bg: 'transparent', border: 'none'},
            md:{bg: '#fff', border: 'none'}
          }}
        _focus={{bg: 'transparent', border: 'none'}}
        _active={{bg: 'transparent', border: 'none'}}
        position='absolute' left={{base: '0%', md: '2%'}}
        top={{base: '0%', md: '50%'}}
        onClick={()=> (goToSlide(slideActual-1))}
      > 
        <Box display={{base: 'none', md: 'block'}}>
          <FcPrevious size='40px'/>
        </Box>
      </Button>
      <Slide
        key={slides[slideActual].id} 
        image={slides[slideActual].image} 
        title={slides[slideActual].name}
        text={slides[slideActual].description.slice(3, -4)}
      />
      <Flex position='absolute' bottom='5%'>
        <HStack>
          {slides.map((slide, index) => {
            if(index === slideActual){
              return(<IndicatorCarrousel key={slide.id} active id={slide.id}/>);
            }else{
              return(<IndicatorCarrousel key={slide.id} id={slide.id}/>);
            }
          })}
        </HStack>
      </Flex>
      <Button zIndex='3' variant="ghost"
        w={{base: '50vw', md: 'auto'}}
        h={{base: '100%', md: 'auto'}}
        _hover={
          {base:{bg: 'transparent', border: 'none'},
            md:{bg: '#fff', border: 'none'}
          }}
        _focus={{bg: 'transparent', border: 'none'}}
        _active={{bg: 'transparent', border: 'none'}}
        position='absolute' right={{base: '0%', md: '2%'}}
        top={{base: '0%', md: '50%'}}
        onClick={()=> (goToSlide(slideActual+1))}
      > 
        <Box display={{base: 'none', md: 'block'}}>
          <FcNext size='40px'/>
        </Box>
      </Button>
    </Flex>
  );
};

const IndicatorCarrousel = ({active}) => {
  if(active){
    return (<Box w='14px' h='14px' borderRadius='50%' bg='#fafa88'/>);
  }
  return (<Box w='14px' h='14px' borderRadius='10px' border='2px solid #fafa88'/>);
};

const Slide = ({image, title, text}) => {
  return(
    <>
      <Box position='absolute' textAlign='center'>
        <Heading fontSize={{base: '1.8em', md: '3.4em'}} 
          fontWeight='700' color='#398be1' zIndex='9'
        >
          {title}
        </Heading>
        <Text fontSize={{base: '1em', md: '2em'}} color='#fff'>{text}</Text>
      </Box>
      <Image h={{base: '40vh',md: '70vh'}} w='100vw' zIndex='-1'
        src={image} 
        filter='brightness(45%)' objectFit="fill"
      />
    </>
  );
};

export default CarrouselHome;