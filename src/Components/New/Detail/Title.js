import React from 'react';
import { Box } from "@chakra-ui/react";

const Title = ({ title }) => {
    return (
        <Box 
            textAlign='center'
            as='h1'
            fontSize={{ base: '25px', md: '50px' }}
            fontWeight='700'
            color='#398be1'
            padding='10px 20px'
        >
            {title}
        </Box>
    )
}

export default Title
