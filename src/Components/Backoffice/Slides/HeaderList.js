import React from 'react';
import { Box, Text, InputRightElement, Button, InputGroup, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';

const HeaderList = ({ titleList, linkCreate  }) => {
  return (
    <InputGroup>
      <Box w="100%" p={4} borderRadius="lg" 
        overflow="hidden" borderWidth="10px" 
      >
        <Text
          as='h1' fontSize={{ base: '10px', md: '30px' }} 
          fontWeight='700' color='#398be1' align="right"
          mr="20"
        >
          {titleList}
        </Text>
        <InputRightElement width="6vw">
          <Button mt="5vw" mr="2vw" variant="ghost" >
            <Text
              as='h1' fontSize={{ base: '10px', md: '20px' }} 
              fontWeight='700' color='#398be1' align="center"
            >
              <Tooltip label="Create new slide">
                <Link to={linkCreate}>
                  <GrAdd /> 
                </Link>
              </Tooltip>
            </Text>
          </Button>
        </InputRightElement>
      </Box>
    </InputGroup>
  );
};

export default HeaderList;
