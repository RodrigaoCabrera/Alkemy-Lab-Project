import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import axios from 'axios';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { PatchMembers, PostMembers } from '../../Services/MembersService';

const FormMembers = ({ object }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido'),
    image: Yup
      .mixed()
      .required('Debe seleccionar una imagen'),
    description:Yup.string().required('Campo requerido')
  });

  const handleSubmit = (formData) => {
    console.log('submit');
    if (object) {
        PatchMembers(object.id, formData) //Inclusión de método Patch
        .catch(err => console.error(err))
        .then(res => console.log(res));
    } else {
        PostMembers(formData) //Inclusión de método Post
        .catch(err => console.error(err))
        .then(res => console.log(res));
    }
  };

  return (
    <Stack
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      <Stack
        padding={8}
        direction='column'
        width={['sm', 'lg']}
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
      >
        <Box textAlign='center'>
          <Heading as='h1' color='#398BE1'>Editar Miembros</Heading>
        </Box>
        <Box 
          marginY={4}
        > 
          <Formik
            initialValues={{
              name: object?.name || '',
              description: object?.description || '',
              image: object?.image || ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({errors, touched, values, setFieldValue}) => (
              <Form>
                <FormControl isRequired isInvalid={errors.name && touched.name}>
                  <FormLabel htmlFor='name'>Nombre</FormLabel>
                  <Field 
                    as={Input}
                    autoComplete='off'
                    id='name'
                    name='name'
                    type='text'
                  />
                  <ErrorMessage component={FormErrorMessage} name='name' />
                </FormControl>
                <FormControl marginTop={3}>
                  <FormLabel htmlFor='description'>Descripcion</FormLabel>
                  <Field
                    as={CKEditor}
                    data={values.description}
                    name='description'
                    editor={ClassicEditor}
                    onBlur={()=>{}}
                    onFocus={()=>{
                      touched.description=true;
                    }}
                    onChange={(event,editor) => {
                      setFieldValue('description', editor.getData());
                    }}
                  />  
                </FormControl>
                <FormControl marginTop={3} isRequired isInvalid={errors.image && touched.image}>
                  <FormLabel>Imagen</FormLabel>
                  <Field 
                    accept='image/jpeg,image/png'
                    as={Input}
                    name='image'
                    onChange={(e) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(e.currentTarget.files[0]);
                      reader.onload = () => setFieldValue('image', reader.result);
                    }}
                    paddingTop={1}
                    type='file'
                    value={undefined}
                  />
                  <ErrorMessage component={FormErrorMessage} name='image' />
                </FormControl>
                <Field name="instagram">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.instagram && form.touched.instagram} mb="7">
                      <FormLabel htmlFor="instagram">Instagram</FormLabel>
                      <InputGroup>
                        <InputLeftAddon>
                          <FaInstagram />
                        </InputLeftAddon>
                        <Input
                          {...field}
                          id="instagram"
                          name="instagram"
                          pattern="https://.*"
                          placeholder="https://instagram.com/your_user"
                          title="Put your Instagram link here"
                          type="url"
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.instagram}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="facebook">
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.facebook && form.touched.facebook} mb="7">
                      <FormLabel htmlFor="facebook">Facebook</FormLabel>
                      <InputGroup>
                        <InputLeftAddon>
                          <FaFacebookF />
                        </InputLeftAddon>
                        <Input
                          {...field}
                          id="facebook"
                          name="facebook"
                          pattern="https://.*"
                          placeholder="https://facebook.com/your_user"
                          title="Put your Facebook link here"
                          type="url"
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.facebook}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  width='full'
                  marginTop={4}
                  type='submit'
                  backgroundColor='#398BE1'
                  color='#FFF'
                  _hover={{
                    bg: '#5FA5ED'
                  }}
                  _active={{
                    bg: '#5FA5ED'
                  }}
                >
                  {object ? 'Actualizar' : 'Crear'}
                </Button>
              </Form> 
            )} 
          </Formik>
        </Box> 
      </Stack> 
    </Stack>
  );}; 
export default FormMembers;   

