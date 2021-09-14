    
import React, { useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {Box, Heading, Stack } from '@chakra-ui/layout';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { userHistory } from 'react-router';
import * as  Yup  from 'yup';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Button } from '@chakra-ui/button';


//User creation and edition
// Add user object and complete form and to do request to path
   
const UsersEditForm =({ object }) =>{
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(4,'Minimo cuatro caracteres')
      .max(100,'Maximo demasiado caracteres')
      .required('Nombre es requerido'),
    password: Yup.string()
      .min(4,'la contraseña debe tener minimo 4 caracteres')
      .max(10, 'constraseña demasiada extensa')
      .required('la contraseña es requerida'),
    email: Yup.string()
      .required('campo requerido; debe tener @ y extension .com u otra')
      .email('Email debe ser valido'),
    descripcion:Yup.string()
      .min('la descripcion minimo 10 caracteres'),
    Imagen: Yup.mixed()
      .required(' debe selecionar imagen JPG o PNG')
  });
};
const handleSubmit = (formData) => {
  console.log('submit');
  if (object) {
    axios
    .patch(`http://ongapi.alkemy.org/api/user/${object.id}`, { 
      name:formData.name

      
  const mapData = (user) => {
    initialValues = { name:user.name, email: user.email, rol: user.rol, image:user.image,description:user.description};

  };


  let initialValues = {
    name :'',
    email:'',
    password:'',
    rol_id:'1',
    image:'',
    description: '',
  };

        
  if (id !== undefined) {
    initialValues = {
      ...initialValues,
      name: singleUser?.name,
      email: singleUser?.email,
      role_id: singleUser?.role_id,
      description:singleUser?.description,
      image:singleUser?.image,
    };
  }
        
  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchUser(id));
    }
    mapData(singleUser);
            
  }, []);
        
  const history = useHistory();
        
  return (
            
    <Stack
      w='100%'
      flexDirection='column'
      minHeight='100vh'
      align='center'
      justify='center'
      padding={10}
    >
      <Heading margin={5}>{id ? 'Editar Usuario' : 'Crear Usuario'}</Heading>
      <Stack>
        <Box
          bg='#398BE1'
          borderWidth= '1px'
          borderRadius='lg'
          overflow='hidden'
          w={[250, 400, 700]}
          maxWidth={700}
          boxShadow={'xl'}
        >
          <Formik 
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={editSchema}
            onSubmit={async (values, actions) => {
              let data = {
                name: values.name,
                email: values.email,
                role_id: parseInt(values.role_id),
                password: values.password,
                description:values.description,
                image:values.image,
              };
              setTimeout(() => {
                if (id !== undefined) {
                  data = {
                    ...data,
                    id,
                  };
                  try {
                    dispatch(editUser(data));
                  } catch (error) {}
                  actions.setSubmitting(false);
                  history.push('/backoffice/users'); 
                } else {
                  dispatch(createUser(data));
                  history.push('/backoffice/users');
                  actions.setSubmitting(false);
                }
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Stack w={'90%'} margin={[3, 6, 8]} spacing={5}>
                  <Field name='name'>
                        
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel marginTop='1em' htmlFor='name'>
                              Nombre
                        </FormLabel>
                        <Input
                          variant='filled'
                          {...field}
                          id='name'
                          placeholder='Laura'
                          bg='white'
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel marginTop="1em" htmlFor="email">
                              Email
                        </FormLabel>
                        <Input
                          variant="filled"
                          {...field}
                          id="email"
                          placeholder="lauranavoni@gmail.com"
                          bg="white"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.password && form.touched.password}
                      >
                        <FormLabel marginTop="1em" htmlFor="password">
                              Password
                        </FormLabel>
                        <Input
                          type="password"
                          variant="filled"
                          {...field}
                          id="password"
                          placeholder="Contraseña"
                          bg="white"
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="role_id">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.role_id && form.touched.role_id}
                      >
                        <FormLabel marginTop="1em" htmlFor="role_id">
                              Rol
                        </FormLabel>
                        <Select
                          variant="filled"
                          {...field}
                          id="role_id"
                          bg="white"
                        >
                          <option value="0">Administrador</option>
                          <option value="1">Usuario</option>
                        </Select>
                        <FormErrorMessage>{form.errors.role_id}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
      
                  <FormControl>
                    <Button
                      mt={4}
                      variant={'OngSomosMas'}
                      size="sm"
                      isLoading={props.isSubmitting}
                      backgroundColor='#398BE1'
                      color='#FFF'
                      type="submit"
                    >
                      {id === undefined ? 'Crear' : 'Editar'}
                    </Button>
                  </FormControl>
                </Stack>
              </Form>
            )};
          </Formik>
        </Box>
      </Stack>
    </Stack>
  );
};
export default UsersEditForm;
    
    
    