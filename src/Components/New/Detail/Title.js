import React from 'react';
import { Box } from "@chakra-ui/react";

const Title = ({ title }) => {
    return (
        <Box textAlign='center'>
            <h1>{title}</h1>
        </Box>
    )
}

export default Title
