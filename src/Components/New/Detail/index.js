import React, { useState } from 'react';
import Title from './Title';
import { Box, Grid, Flex } from '@chakra-ui/react';

const Detail = () => {
    const [stateInitial, setStateInitial] = useState({
        title: 'Bienvenido',
        img: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    });

    //Llamada a la api
    /*
    useEffect(() => {
        const res = fetch('');
        const novedades = res.json();

        setStateInitial(novedades);
    }, []);
    */
console.log(setStateInitial)
    return (
        <Box bgColor='#eaeaea'>
            <Grid
                templateColumns='repeat(1, 1fr)'
                templateRows='20vh 80vh'

            >
                <Title title={stateInitial.title}/>

                <Flex
                    border='1px' 
                    borderStyle='solid' 
                    borderColor='#000'
                >
                    <Box w='30%'>
                        <img src={stateInitial.img} alt='imagen de novedades' />
                    </Box>
                    
                    <Box w='70%' pl='10px' alignSelf='center'>
                        <p>{stateInitial.content}</p>
                    </Box>
                </Flex>
            </Grid>
        </Box>
    )
};

export default Detail;