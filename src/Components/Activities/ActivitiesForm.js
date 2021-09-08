import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import axios from 'axios';


const ActivitiesForm = ({ object }) => {

  const schema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido'),
    image: Yup
      .mixed()
      .required('Debe seleccionar una imagen')
  });

  const handleSubmit = (formData) => {
    console.log('submit');
    if (object) {
      axios 
        .patch(`http://ongapi.alkemy.org/api/activities/${object.id}`, {
          name: formData.name,
          description: formData.description,
          image: formData.image
        })
        .catch(err => console.error(err))
        .then(res => console.log(res));
    } else {
      axios
        .post('http://ongapi.alkemy.org/api/activities', {
          name: formData.name,
          description: formData.description,
          image: formData.image
        })
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
          <Heading as='h1' color='#398BE1'>Actividades</Heading>
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
                  <FormLabel htmlFor='description'>Descripción</FormLabel>
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
  );
};
 
export default ActivitiesForm;