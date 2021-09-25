import { Text } from '@chakra-ui/layout';
import * as React from 'react';

export const Copyright = (props) => (
  <Text fontSize="md" {...props}>
    &copy; {new Date().getFullYear()} Somos Más. All rights reserved.
  </Text>
);
