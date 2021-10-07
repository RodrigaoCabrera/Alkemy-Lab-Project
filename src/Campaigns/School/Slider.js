import React, { useState, useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Spacer, Box, Text } from "@chakra-ui/react";
import nextSlides from './nextSlides';

const Slider = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    {
      id: "slide1",
      description: "Description de slide 1",
      image: "/images/Fotos10.jpg",
    },
    {
      id: "slide2",
      description: "Description de slide 2",
      image: "/images/Foto6.jpg",
    },
    {
      id: "slide3",
      description: "Description de slide 3",
      image: "/images/Foto4.jpg",
    },
  ];

  let slideTime;

  useEffect(() => {
    clearTimeout(slideTime);
    slideTime = setTimeout(() => {
      if (slideIdx < slides.length) {
        nextSlides(slideIdx + 1, slideTime, setSlideIdx);
      } else {
        nextSlides(1, slideTime, setSlideIdx);
      }
    }, 5000);
  }, [slideIdx]);

  return (
    <Box pos='relative' overflow='hidden' h='75vh'>
      {slides.map((slide) => (
        <Box 
          className={slide.id}
          key={slide.id} 
          w='100%' 
          h='100%' 
          pos='absolute' 
          transition='.6s' 
          right={slide.id === 'slide1' ? '0' : '-100%'}
          zIndex={slide.id === 'slide1' ? '5' : '0'}
        >
          <Image h={{base:'100%', md:'90%'}} src={slide.image} objectFit="fill" w="100%" />
          <Text
            color="#398be1"
            textAlign="center"
            fontSize="22px"
            fontWeight="700"
            display={{ base: "none", md: "block" }}
          >
            {slide.description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Slider;