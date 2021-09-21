import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box } from '@chakra-ui/react';

const SkeletonSetup = ({ lines, height, width, isCard, bgCard, sizeCircle }) => {
  return (
    <>
      {
        isCard ? 
          <SkeletonCard width={width} height={height} lines={lines} bgCard={bgCard} sizeCircle={sizeCircle} /> :
          <SkeletonBasic width={width} height={height} lines={lines}/>
      }
    </>
  );
};

const SkeletonBasic = ({ width, height, lines }) => {
  const linesSkeleton = [];

  for(let i = 0; i < lines; i++){
    linesSkeleton.push({id: i});
  }
  
  return(
    <Stack>
      {
        linesSkeleton.map((item) => (
          <Skeleton key={item.id} width={width ? width : '230px'} height={height ? height : '18px'} />
        ))
      }
    </Stack>
  );
};

const SkeletonCard = ({ width, lines, bgCard, sizeCircle }) => {
  return(
    <Box width={width ? width : 'auto'} padding="6" boxShadow="lg" bg={bgCard ? bgCard : 'white'}>
      <SkeletonCircle size={sizeCircle ? sizeCircle : '20px'} />
      <SkeletonText mt="4" noOfLines={lines ? lines : 4} spacing="4"/>
    </Box>
  );
};

export default SkeletonSetup;