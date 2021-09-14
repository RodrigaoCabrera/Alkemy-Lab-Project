import React from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import {FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Box, Heading, Stack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@chakra-ui/button';



const FormEditUsers = ({object}) => {
  const Schema = Yup.object().shape({
    name: Yup.string()
      .required('Nombre requerido'),
    image: Yup.mixed()
      .required('Debe seleccionar una imagen'),
    description:Yup.string()
      .required ('Debe contener minimo 10 caracteres'),
    profile_image:Yup.string()
      .required('Debe selecionar una foto de perfil JPG o PNG'),
    role_id:Yup.mixed(),
    password:Yup.string()
      .required('Mimino 6 caracteres'),
    email:Yup.string()
      .required('debe contener @ y extension .com ')
    
  });

  const handleSubmit = (formData) => {
    console.log('submit');
    if (object) {
      axios 
        .patch(`http://ongapi.alkemy.org/api/users/${object.id}`, {
          name: formData.name,
          description: formData.description,
          image: formData.image,
          profile_image:formData.profile_image,
          role_id:formData.role_id,
          password:formData.password,
          email:formData.email

        })
        .catch(err => console.error(err))
        .then(res => console.log(res));
    } else {
      axios
        .post('http://ongapi.alkemy.org/api/users', {
          name: formData.name,
          description: formData.description,
          image: formData.image,
          profile_image:formData.profile_image,
          role_id:formData.role_id,
          password:formData.password,
          email:formData.email
        })
        .catch(err => console.error(err))
        .then(res => console.log(res));
    }
  };
  

  return(
    
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
          <Heading as='h1' color='#398BE1'>Editar Usuario</Heading>
        </Box>
        <Box 
          marginY={4}
        > 
          <Formik
            initialValues={{
              name: object?.name || '',
              description: object?.description || '',
              image: object?.image || '',
              profile_image: object?.profile_image || '',
              role_id: object?.role_id || '',
              password: object?.password || '',
              email: object?.email || '',

            }}
            validationSchema={Schema}
            onSubmit={handleSubmit}
          >
            {({errors, touched, values, setFieldValue}) => (
              <><Form>
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
                <FormControl marginTop={3}>
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

                <FormControl m={2} isRequired isInvalid={touched.email && errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Field 
                    as={Input}
                    p='15px 30px'
                    type='email'
                    placeholder=' @ y extension .com '
                    name='email'
                    value={values.email}
                    errorBorderColor='tomato'
                  />
                  <ErrorMessage component={FormErrorMessage} name='email'/>
                </FormControl>

                <div className='rol_edit'>
                  <FormLabel htmlFor='roleId' className="label-edit">Rol:</FormLabel>
                  <Field name='roleId' as='select' className='input-edit'>
                    <option value='admin'>Administrador</option>
                    <option value='user'>Usuario </option>
                  </Field>
                </div>
                <div className='btn_edit'>
                  <button type='submit'></button>
                </div>
              </Form>
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
              </>
              
            )}
          </Formik>
        </Box>
      </Stack>
    </Stack>
  );
};
 
    
export default FormEditUsers;