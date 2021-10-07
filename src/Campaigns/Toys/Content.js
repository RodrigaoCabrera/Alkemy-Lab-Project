import { Box, Text, Flex } from '@chakra-ui/layout';
import React from 'react';
import './Content.css'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from "@chakra-ui/react"

const ContentCard = ({ title, description, site, date, imageURL }) => {

  const [isTabletSize, isLaptopSize, isSmartTvSize] = useMediaQuery([

    '(min-width: 768px)',

    '(min-width: 1024px)',

    '(min-width: 1920px)',

  ]);

  const onMobile = !(isTabletSize || isLaptopSize || isTabletSize || isSmartTvSize);

  const onTablet = (isTabletSize && !(isLaptopSize || isSmartTvSize));

  const onLaptop = (isLaptopSize && !(isSmartTvSize));

  const onSmartTv = (isSmartTvSize);

  const SegundosFaltantes = new Date(date).getTime() - new Date().getTime();
  const diasFaltantes = Math.round(SegundosFaltantes / (1000 * 60 * 60 * 24));

  const baseContent = (

    <Flex w='100%' h='15vh' align='center' justify='center' mt={10}>
      <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" m={1} maxH={'25vh'} boxShadow="dark-lg">
        <Box bgColor='rgba(154, 201, 251,0.9)' > <Text fontSize="xl" align="center" >{title}</Text> </Box>
        <p className="text" style={{ "maxHeight": "calc(var(--lh) * var(--max-lines))" }}>{description}</p>
        <Box as="span" color="gray.400" fontSize="sm">{site}</Box>
        <Box as="span" ml={'140'} color="gray.400" fontSize="sm">{date}</Box>
      </Box>

    </Flex>
  );

  const tabletContent = (

    <Flex w='100%' h='15vh' align='center' justify='center' p={20} mt={20}>
      <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" m={1} maxH={'30vh'} boxShadow="dark-lg">
        <Box bgColor='rgba(154, 201, 251,0.9)' > <Text fontSize="xl" align="center" >{title}</Text> </Box>
        <p className="text" style={{ "maxHeight": "calc(var(--lh) * var(--max-lines))" }}>{description}</p>
        <Box as="span" color="gray.400" fontSize="sm">{site}</Box>
        <Box as="span" ml={'150'} color="gray.400" fontSize="sm">{date}</Box>
        <Text color="gray.400" fontSize="sm" align="right" > faltan {diasFaltantes} dias</Text>
      </Box>
    </Flex>
  );
  const laptopContent = (

    <Flex w='100%' h='15vh' align='center' justify='center' p={100} mt={150} mb={100}>
      <Box d='flex' borderWidth="1px" borderRadius="md" boxShadow="dark-lg">
        <Image boxSize="300px" src={imageURL} alt="Dan Abramov" p={3} />
        <Box maxW="lg" overflow="hidden" m={1} maxH={'30vh'}>
          <Box bgColor='rgba(154, 201, 251,0.9)' > <Text fontSize="xl" align="center" >{title}</Text> </Box>
          <p className="textLg" style={{ "maxHeight": "calc(var(--lh) * var(--max-lines))" }}>{description}</p>
          <Box as="span" color="gray.400" fontSize="sm">{site}</Box>
          <Box as="span" ml={'300'} color="gray.400" fontSize="sm">{date}</Box>
          <Text color="gray.400" fontSize="sm" align="right" > faltan {diasFaltantes} dias</Text>
        </Box>
      </Box>
    </Flex>
  );
  const smartTvContent = (
    <Flex w='100%' h='15vh' align='center' justify='center' p={100} mt={150} mb={100}>
      <Box d='flex' borderWidth="1px" borderRadius="md" boxShadow="dark-lg" bgColor='rgba(250, 250, 136,0.3)' >
        <Image boxSize="300px" src={imageURL} alt="Dan Abramov" p={3} />
        <Box maxW="lg" overflow="hidden" m={1} maxH={'35vh'}>
          <Box bgColor='rgba(154, 201, 251,0.9)' > <Text fontSize="xl" align="center" >{title}</Text> </Box>
          <p className="textXl" style={{ "maxHeight": "calc(var(--lh) * var(--max-lines))" }}>{description}</p>
          <Box as="span" color="gray.400" fontSize="sm">{site}</Box>
          <Box as="span" ml={'300'} color="gray.400" fontSize="sm">{date}</Box>
          <Text color="gray.400" fontSize="sm" align="right" > faltan {diasFaltantes} dias</Text>
        </Box>
      </Box>
    </Flex>
  );

  let content;
  
  if (onMobile) {

    content = baseContent;

  } else if (onTablet) {

    content = tabletContent;

  }

  else if (onLaptop) {

    content = laptopContent;

  }

  else if (onSmartTv) {

    content = smartTvContent;

  }
  return content;
}


const Content = () => {

  const MockData = [
    {
      id: '1',
      title: 'Juguetes',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, sodales congue parturient aliquet vestibulum dictumst odio nisi vivamus, cubilia pellentesque euismod pharetra in est egestas. Et nisl nostra sed nullam duis augue cum fringilla a pulvinar placerat rutrum nulla, tempor magna velit massa litora senectus natoque ornare consequat ultrices ut. Hac dictum laoreet fusce suspendisse elementum natoque commodo nulla, quis habitasse metus in ligula ac phasellus integer massa, vestibulum sollicitudin velit dui ullamcorper vulputate sodales.',
      site: 'ASDASDF, Junín, Buenos Aires',
      date: 'December 17, 2021 03:24:00',
      imageURL: 'http://placekitten.com/200/300'
    },
    {
      id: '2',
      title: 'Test',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate, sodales congue parturient aliquet vestibulum dictumst odio nisi vivamus, cubilia pellentesque euismod pharetra in est egestas. Et nisl nostra sed nullam duis augue cum fringilla a pulvinar placerat rutrum nulla, tempor magna velit massa litora senectus natoque ornare consequat ultrices ut. Hac dictum laoreet fusce suspendisse elementum natoque commodo nulla, quis habitasse metus in ligula ac phasellus integer massa, vestibulum sollicitudin velit dui ullamcorper vulputate sodales.',
      site: 'ASDASDF, Junín, Buenos Aires',
      date: 'December 21, 2021 03:24:00',
      imageURL: 'http://placekitten.com/g/200/200'
    }
  ];

  return (
  <div>
    {
      MockData.map(x => <div key={x.id} > <ContentCard title={x.title} description={x.description} site={x.site} date={x.date} imageURL={x.imageURL} /> </div>)
    }
  </div>)
}

export default Content;