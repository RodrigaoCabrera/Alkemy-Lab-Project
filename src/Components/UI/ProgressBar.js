import { Stack } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import React from 'react';

export const ProgressBar = ({value, width, height}) => {
  return (
    <Stack
      width={width || '200px'}
      justifyContent='center'
    >
      {
        value >= 0
          ? <Progress size='lg' height={height || '20px'} value={value} colorScheme='blue' />
          : <Progress size='lg' height={height || '20px'} isIndeterminate colorScheme='blue' />
      }
    </Stack>
  );
};
