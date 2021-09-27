import React, { useState, useEffect } from 'react';
import { Spinner, Center, Text } from '@chakra-ui/react';

import {GetSlides} from '/Service/SlidesService';

const SlidesDetail = (props) => {

  const { match: { params } } = props;
  const [Slides,SetSlides ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetSlides (params.id)
      .then((response) => {
        SetSlides(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [SetSlides, setLoading]);

  return (loading === false) ? (
    <div>
   
      <Text> <span dangerouslySetInnerHTML={{ __html: Slides.description  }} /> </Text>
    </div>
  ) : 
    <Center bg="tomato" h="100px" color="white"> <Spinner color="blue.500" /> </Center>;
};
export default SlidesDetail;