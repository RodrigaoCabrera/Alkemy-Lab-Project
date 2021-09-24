import React, { useEffect, useState } from 'react';
import { Box, Text, Heading, Spinner, Center, Alert } from '@chakra-ui/react';
import { GetRequest } from '../../Services/privateApiService'
import { BiErrorCircle } from "react-icons/bi";
const Home = () => {

  const [Home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorRequest, setErrorRequest] = useState(false);

  useEffect(() => {
    GetRequest('http://ongapi.alkemy.org/api/organization')
      .then((response) => {
        setHome(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorRequest(true);
        console.log(error);
      });
  }, [setHome, setLoading, setErrorRequest]);

  return (
    <Box id="home">
      <Box p={10} backgroundColor="#9ac9fb" color="white">
        {
          (errorRequest === false)
            ? <>
                {
                  loading === false
                    ? <>
                        <Heading textAlign="center">{Home.welcome_text}</Heading>
                        <Text textAlign="justify" fontWeight="bold">{Home.short_description}</Text>
                      </>
                    : <Center > <Spinner size="xl" /> </Center>
                }
              </>
            : <Center>
                <Alert status="error" maxWidth="40vw" variant="solid">
                  <BiErrorCircle />
                  <span onClick={ () => window.location.reload() }>There was an error processing your request, please reload page, clicking here</span>
                </Alert>
              </Center>
        }
      </Box>
      <Box>
        {/* componente slider */}
      </Box>
      <Box>
        {/* listado de novedades */}
      </Box>
    </Box>
  );
};

export default Home;