import React,{ useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import { showSuccessAlert, showErrorAlert } from '../../Services/alertsService';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, putActivity } from '../../features/activitiesReducer';
import Loading from '../UI/Loading';
import { Redirect } from 'react-router-dom';
const ActivitiesForm = ({ location: { activity } }) => {

  const dispatch = useDispatch();
  const { status } = useSelector(store => store.activities);
  const [ submited, setSubmited ] = useState(false);
  const schema = Yup.object().shape({
    name: Yup.string().required('Nombre requerido'),
    image: Yup
      .mixed()
      .required('Debe seleccionar una imagen')
  });

  const handleSubmit = (formData) => {

    if (activity) {
      const data = {
        id: activity.id,
        data: {
          name: formData.name,
          description: formData.description,
          image: formData.image
        }
      };
      dispatch(putActivity(data));
    } else {
      dispatch(postActivity({
        name: formData.name,
        description: formData.description,
        image: formData.image
      }));

    }
    setSubmited(true);
  };

  let content;
  switch (status) {
  case 'idle':
    content = <Stack
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
              name: activity ? activity.name : '',
              description: activity ? activity.description : '',
              image: activity ? activity.image : ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue }) => (
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
                    onBlur={() => { }}
                    onFocus={() => {
                      touched.description = true;
                    }}
                    onChange={(event, editor) => {
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
                  {activity ? 'Actualizar' : 'Crear'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Stack>;
    break;
  case 'success':
      
    content = <Stack
      height='100vh'
      alignItems='center'
      justifyContent='center'
    >
      {
        submited === true && 
          <>
            {showSuccessAlert()}
            <Redirect to='/backoffice/activities/'/>
          </>
      }
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
              name: activity ? activity.name : '',
              description: activity ? activity.description : '',
              image: activity ? activity.image : ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue }) => (
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
                    onBlur={() => { }}
                    onFocus={() => {
                      touched.description = true;
                    }}
                    onChange={(event, editor) => {
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
                  {activity ? 'Actualizar' : 'Crear'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Stack>;
    break;
  case 'failed':
    showErrorAlert('Ha ocurrido un error al recuperar la informacion de las actividades');
    content = <Stack
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
              name: activity ? activity.name : '',
              description: activity ? activity.description : '',
              image: activity ? activity.image : ''
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue }) => (
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
                    onBlur={() => { }}
                    onFocus={() => {
                      touched.description = true;
                    }}
                    onChange={(event, editor) => {
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
                  {activity ? 'Actualizar' : 'Crear'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Stack>;
    break;
  default:
    content = <Box mt={'50%'}><Loading /></Box>;
    break;
  }
  return content;
};

export default ActivitiesForm;