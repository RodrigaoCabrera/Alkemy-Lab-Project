import React, { useState } from 'react';
import Title from './Title';
import { Box, Grid, Flex, Text, Image, extendTheme } from '@chakra-ui/react';
import Comments from './Comments';
import { createBreakpoints } from "@chakra-ui/theme-tools";

const Detail = () => {
    const breakpoints = createBreakpoints({
        sm: '414px',
        md: '550px',
        lg: '768px',
        xl: '1023px',
    })
    const theme = extendTheme({ breakpoints })
    const [stateInitial, setStateInitial] = useState({
        title: 'Detalles',
        image: 'http://ongapi.alkemy.org/storage/onIkohBvrv.jpeg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    });

    return (
        <>
            <Flex direction='column' align='center'>
                <Title title={stateInitial.title} />

                <Flex
                    minH='65vh'
                    m='5px 5px'
                    w='98%'
                    borderRadius='5px'
                    bgColor='#398be1'
                    justifySelf='center'
                    direction={{ base: 'column', sm: 'column', md: 'row' }}
                    boxShadow={{ base: 'lg', sm: 'xl', md: 'xl' }}
                >
                    <Box 
                         
                        w={{ base: '100%', sm: '100%', md: '40%' }}
                        borderRightRadius={{ base: '5px', sm: '5px', md: '0' }}
                        borderLeftRadius='5px'
                    >
                        <Image 
                            src={stateInitial.image} 
                            alt='imagen de novedades' 
                            boxSize='100%' 
                            borderLeftRadius='5px'
                            borderRightRadius={{ base: '5px', sm: '5px', md: '0' }}
                        />
                    </Box>

                    <Box
                        w={{ base: '100%', sm: '100%', md: '60%' }}
                        display='flex'
                        borderRightRadius='5px'
                        >
                        <Text
                            alignSelf='center'
                            textAlign={{ base: 'center', sm: 'center', md: 'start' }}
                            p='10px 10px'
                            fontSize={{ base: '20px', sm: '20px', md: '16.5px' }}
                            fontWeight='600'
                            w='full'
                            color='#fff'
                        >
                            {stateInitial.content}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Comments />
        </>
    )
};

export default Detail;