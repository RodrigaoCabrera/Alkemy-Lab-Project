import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
//Librería para convertir texto html en texto plano.
import ReactHtmlParser from 'react-html-parser';

const ActivityContent = ({ text }) => {
    return (
        <Flex 
            direction='column'
            justify='center'
            align='center' 
            h='100vh' 
            w='full'
        >

            <Text 
                color='#398BE1' 
                fontSize='48px'
                fontWeight="700"
            >
                Actividad
            </Text>

            <Flex 
                w='90%' 
                h='80%'
                border='1px solid #c1c1c1'
                align='center'
                bg='#398BE1'
                boxShadow='2xl'
                borderRadius='3px'
            >
                <Text 
                    p='10px' 
                    textAlign='center'
                    color='#fff'
                    fontWeight="700"
                >
                    { typeof(text) === 'string' ? ReactHtmlParser(text) :  text}{/*Conversión de texto en html en texto plano */}
                </Text>
            </Flex>
        </Flex>
    )
}

export default ActivityContent;
