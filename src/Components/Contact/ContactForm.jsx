import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import {
  Button,
  Input,
  FormLabel,
  FormControl,
  Flex,
  Heading,
  FormErrorMessage,
  Textarea
} from '@chakra-ui/react';
import * as yup from 'yup';
import { PostContact } from '../../Services/ContactService';
import { showErrorAlert } from '../../Services/alertsService';


//Este form solo usa formik yup y chakra ui- falta mejorar el debounce
const schema = yup.object().shape({
  name: yup.string().required('Por favor ingrese un nombre'),
  phone: yup
    .number()
    .min(
      8,
      'Por favor ingrese un numero valido (minimo 8 caracteres)'
    )
    .required('Por favor ingrese un numero telefonico'),
  email: yup
    .string()
    .email('El email ingresado es invalido')
    .required('Por favor ingrese un email'),
  message: yup.string().required('El campo de mensaje no puede estar vacio'),
});
const ContactForm = () => {
  
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values) => {
        PostContact(values)
          .then(response => {
            if (!response.data) {
              showErrorAlert('Hubo un error al cargar el contenido, intente nuevamente');
            }
          })
          .catch(error => {
            showErrorAlert();
          });
      }}
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
    >
      {({
        handleSubmit,
        values,
        isValid,
        errors,touched
      }) => (
        <Flex height='100vh' align='center' justify='center'>
          <Form onSubmit={handleSubmit}  w={'60%'}>
            <Flex
              direction='column'
              align='center'
              p={'20px'}
              bg='gray.100'
              rounded={6}
            >
              <Heading mb={6}>Dejanos un Mensaje!</Heading>
              <FormControl m={2} isRequired isInvalid={errors.name && touched.name}>
                <FormLabel>Nombre</FormLabel>
                <Field 
                  p='15px 30px'
                  as={Input}
                  type='text'
                  placeholder='pej. Maria Rodriguez'
                  name='name'
                  errorBorderColor='tomato'
                  value={values.name} 
                />
                <ErrorMessage component={FormErrorMessage} name='name'/>
              </FormControl>
              <FormControl m={2} isRequired isInvalid={touched.email && errors.email}>
                <FormLabel>Correo Electronico</FormLabel>
                <Field 
                  as={Input}
                  p='15px 30px'
                  type='email'
                  placeholder='pej. mr@gmail.com '
                  name='email'
                  value={values.email}
                  errorBorderColor='tomato'
                />
                <ErrorMessage component={FormErrorMessage} name='email'/>
              </FormControl>
              <FormControl m={2} isRequired isInvalid={touched.phone && errors.phone}>
                <FormLabel>Telefono</FormLabel>
                <Field 
                  p='15px 30px'
                  type='number' 
                  name='phone'  
                  placeholder='pej. 1147562345' 
                  as={Input}
                  value={values.phone}
                  errorBorderColor='tomato'
                />
                <ErrorMessage component={FormErrorMessage} name='phone'/>
              </FormControl>
              <FormControl m={2} isRequired isInvalid={touched.message && errors.message}>
                <FormLabel>Ingresa tu mensaje</FormLabel>
                <Field
                  name='message'
                  value={values.message}
                  as={Textarea}
                  p='15px 30px'
                  
                  errorBorderColor='tomato'  
                />
                
                <ErrorMessage component={FormErrorMessage} name='message'/>
              </FormControl>
              <Button
                m={2}
                p='10px 15px'
                color='#fff'
                type='submit'
                disabled={!isValid}
                rightIcon={<AiOutlineSend />}
                bg='#2E86C1'
              >
                Enviar
              </Button>
            </Flex>
          </Form>
        </Flex>
      )}
    </Formik>
  );
};
export default ContactForm;
