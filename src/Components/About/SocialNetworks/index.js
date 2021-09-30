import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const index = () => {
  return (
    <HStack display="flex" justifyContent="end" paddingRight="10px">
      <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
        <a
          href="https://facebook.com/somos_mas10"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
        <a
          href="https://twitter.com/somos_mas10"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </Button>
      <Button colorScheme="twitter" leftIcon={<FaLinkedin />}>
        <a
          href="https://www.linkedin.com/in/somos-mas10/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </Button>
    </HStack>
  );
};

export default index;
