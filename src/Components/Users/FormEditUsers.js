import React from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@chakra-ui/button';
import { PostUser, PutUser } from '../../Services/userServices';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { UserMap } from './UserMap';

const FormEditUsers = ({location: {user}}) => {
  const Schema = Yup.object().shape({
    name: Yup.string()
      .required('Nombre requerido'),
    image: Yup.mixed()
      .required('Debe selecionar una foto de perfil JPG o PNG'),
    description:Yup.string()
      .required ('Debe contener minimo 10 caracteres'),
    role_id:Yup.mixed(),
    password:Yup.string()
      .required('Mimino 6 caracteres'),
    email:Yup.string()
      .required('debe contener @ y extension .com ')
  });

  const handleSubmit = (formData) => {
    const data = {
      ...formData,
      latitude: address.lat,
      longitude: address.lng,
      address: address.name
    };
    if (user) {
      PutUser(data)
        .then(res => console.log(res))
        .catch(error => console.error(error));
    } else {
      PostUser(data)
        .then(res => console.log(res))
        .catch(error => console.error(error));
    }
  };

  const [address, setAddress] = React.useState({
    lat: 0,
    lng: 0,
    name: ''
  });

  const handleChange = React.useCallback(
    (address) => {
      setAddress(address);
    },
    [setAddress],
  );

  return(
    
    <Stack
      height='100vh'
      alignItems='center'
      justifyContent='center'
      flexDirection={{
        base: 'column',
        lg: 'row'
      }}
    >
      <Stack
        padding={8}
        direction='column'
        width={['sm', 'lg']}
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
        marginRight={6}
      >
        <Box textAlign='center'>
          <Heading as='h1' color='#398BE1'>Editar Usuario</Heading>
        </Box>
        <Box 
          marginY={4}
        > 
          <Formik
            initialValues={{
              name: user ? user.name : '',
              description: user ? user.description : '',
              image: user ? user.image : '',
              role_id: user ? user.role_id : '0',
              password: user ? user.password : '',
              email: user ? user.email : '',
            }}
            validationSchema={Schema}
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
                    type='text' />
                  <ErrorMessage component={FormErrorMessage} name='name' />
                </FormControl>

                <FormControl marginTop={3} isRequired isInvalid={errors.description && touched.description}>
                  <FormLabel htmlFor='description'>Descripcion</FormLabel>
                  <Field
                    as={CKEditor}
                    data={values.description}
                    name='description'
                    editor={ClassicEditor}
                    onBlur={() => { } }
                    onFocus={() => {
                      touched.description = true;
                    } }
                    onChange={(_event, editor) => {
                      setFieldValue('description', editor.getData());
                    } } />
                </FormControl>

                <FormControl marginTop={3} isRequired isInvalid={errors.image && touched.image}>
                  <FormLabel>Imagen</FormLabel>
                  <Field
                    accept='image/jpg,image/png'
                    as={Input}
                    name='image'
                    onChange={(e) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(e.currentTarget.files[0]);
                      reader.onload = () => setFieldValue('image', reader.result);
                    } }
                    paddingTop={1}
                    type='file'
                    value={undefined} />
                  <ErrorMessage component={FormErrorMessage} name='image' />
                </FormControl>

                <FormControl marginTop={3} isRequired isInvalid={touched.email && errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Field 
                    as={Input}
                    p='15px 30px'
                    type='email'
                    placeholder=' @ y extension .com '
                    name='email'
                    autoComplete='off'
                    errorBorderColor='tomato'
                  />
                  <ErrorMessage component={FormErrorMessage} name='email'/>
                </FormControl>              

                <FormControl marginTop={3} isRequired isInvalid={touched.password && errors.password}>
                  <FormLabel htmlFor='password'>Contraseña</FormLabel>
                  <Field
                    as={Input}
                    name='password'
                    type='password'
                  />
                  <ErrorMessage component={FormErrorMessage} name='password' />
                </FormControl>

                <FormControl marginTop={3}>
                  <FormLabel htmlFor='role_id'>Rol:</FormLabel>
                  <Field name='role_id' as='select'>
                    <option value='0'>Administrador</option>
                    <option value='1'>Usuario </option>
                  </Field>
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
                  {user ? 'Actualizar' : 'Crear'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
      <Stack
        padding={4}
        direction='column'
        borderWidth={1}
        borderRadius={8}
        boxShadow='lg'
      >
        <UserMap setAddress={handleChange} />
      </Stack>
    </Stack>
  );
};
 
    
export default FormEditUsers;