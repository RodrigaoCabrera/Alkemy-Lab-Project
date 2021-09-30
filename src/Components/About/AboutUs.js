import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import TitlePages from "../UI/TitlePages";
import { GetRequest } from "../../Services/privateApiService";
import { Spinner, Center, Alert } from "@chakra-ui/react";
import { BiErrorCircle } from "react-icons/bi";
//Redes Sociales
import SocialNetworks from "./SocialNetworks";

export const AboutUs = () => {
  const [About, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorRequest, setErrorRequest] = useState(false);

  useEffect(() => {
    GetRequest("http://ongapi.alkemy.org/api/organization")
      .then((response) => {
        setAbout(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setErrorRequest(true);
        console.log(error);
      });
  }, [setAbout, setLoading, setErrorRequest]);

  return (
    <Stack>
      <TitlePages text="Nosotros" />
      <Box>
        <Heading as="h2" size="md" marginLeft={6} marginTop={3}>
          Sobre Nosotros
        </Heading>
        <Stack margin={6} marginTop={6}>
          {errorRequest === false ? (
            <>
              {loading === false ? (
                <Text>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: About.long_description,
                    }}
                  />
                </Text>
              ) : (
                <Center>
                  {" "}
                  <Spinner size="xl" />{" "}
                </Center>
              )}
            </>
          ) : (
            <Center>
              <Alert status="error" maxWidth="40vw">
                <BiErrorCircle />
                <span onClick={() => window.location.reload()}>
                  There was an error processing your request, please reload
                  page, clicking here
                </span>
              </Alert>
            </Center>
          )}
        </Stack>
      </Box>
      <SocialNetworks />
    </Stack>
  );
};
export default AboutUs;