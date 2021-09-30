import React from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import './index.css';

export const SearchLocation = () => {

  return (
    <FormControl 
      marginTop={3} 
      marginBottom={3} 
      isRequired
    >
      <FormLabel htmlFor='address'>Dirección</FormLabel>
      <input
        type="text"
        placeholder="Dirección"
        style={{
          width: '500px',
          height: '40px',
          border: '1px solid #E2E8F0',
          borderRadius: '0.375rem',
          padding: '0 12px',
          fontSize: '1rem',
          outline: 'none',
          textOverflow: 'ellipses',
        }}
      />
    </FormControl>
  );
};
