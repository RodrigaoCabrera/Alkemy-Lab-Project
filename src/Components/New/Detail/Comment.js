import React from 'react';
import { Text } from '@chakra-ui/react';

const Comment = ({ text }) => {
    return (
        
        <Text
            fontWeight='500'
            border='1px solid #398be1'
            color=''
            m='10px 10px'
            p='10px 15px'
            borderRadius='5px'
            bgColor='#fff'
        >
            { text }
        </Text>
    )
}

export default Comment
