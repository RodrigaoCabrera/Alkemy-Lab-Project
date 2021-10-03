import React from 'react';
import {Box, Image} from '@chakra-ui/react';

const NewsCard = (props) => {

  return (
    <Box borderRadius="lg" overflow="hidden" width='350px'>
      <Box alignItems='center' justifyContent='center'>
        <Image src={props.imageUrl} alt={props.imageAlt} />
      </Box>
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.title}
        </Box>

        <Box>
          <p>{props.content}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
