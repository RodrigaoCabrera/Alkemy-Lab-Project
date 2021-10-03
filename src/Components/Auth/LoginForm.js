import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Image,
  Divider
} from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ingrese un email válido')
      .required('Requerido'),
    password: Yup.string()
      .min(6, 'Debe tener un mínimo de 6 caracteres')
      .max(16, 'Tu contraseña debe de tener entre 6 y 16 caracteres')
      .required('Requerido')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
        ,'Debe tener al menos una letra, un número y un caracter especial (!@#$%)')
  });

  return (
    <Flex 
      height='100%'
      direction='column'
      alignItems='center'
    >
      <Box>
        <Image 
          src='/images/logo-ong.png'
          alt='Logo Somos Más'
          boxSize='200px'
        />
      </Box>
      <Box 
        padding={8}
        minWidth={'sm' | 'md'}
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
      >
        <Box textAlign='center'>
          <Heading as='h1'>Iniciar sesión</Heading>
        </Box>
        <Divider marginY={6} />
        <Box marginY={4} textAlign='left'>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              setFormValues(values);
            }}
          >
            {({errors, touched}) => (
              <Form>
                <FormControl marginTop={2} isRequired isInvalid={touched.email && errors.email}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Field
                    as={Input}
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='off'
                  />
                  <ErrorMessage component={FormErrorMessage} name='email' />
                </FormControl>

                <FormControl marginTop={6} isRequired isInvalid={touched.password && errors.password}>
                  <FormLabel htmlFor='password'>Contraseña</FormLabel>
                  <Field
                    as={Input}
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='off'
                  />
                  <ErrorMessage component={FormErrorMessage} name='password' />
                </FormControl>

                <Button
                  width='full'
                  marginTop={4}
                  type='submit'
                  backgroundColor='#9AC9FB'
                  color='#000'
                  _hover={{
                    bg: '#5FA5ED'
                  }}
                  _active={{
                    bg: '#5FA5ED'
                  }}
                >
                  Iniciar sesión
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <Link to='/register'>Registrarse</Link>
      </Box>
    </Flex>
  );
};

export default LoginForm;
