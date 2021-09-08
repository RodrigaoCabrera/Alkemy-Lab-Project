import { React } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AiOutlineSend } from 'react-icons/ai';
import {
  Button,
  Input,
  FormLabel,
  FormControl,
  Flex,
  Heading,
  FormErrorMessage,
} from '@chakra-ui/react';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Por favor ingrese un nombre'),
  logo: yup.mixed().required('Por favor selecciona un archivo'),
  shortDescription: yup
    .string()
    .required('Por favor ingrese la descripcion breve')
    .test('shortDescription','Por favor ingrese la descripcion breve jeje',(value)=>{
      return value && value.length>0;
    }),
  longDescription: yup
    .string()
    .required('Por favor ingrese la descripcion completa'),
});
const OrganizationForm = () => {
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={() => {
      }}
      initialValues={{
        name: '',
        logo: '',
        shortDescription: '',
        longDescription: '',
      }}
    >
      {({ handleSubmit, values, isValid, errors, touched, setFieldValue}) => (
        <Flex  align='center' justify='center'>
          <Form onSubmit={handleSubmit} w={'60%'} height='70%'>
            <Flex
              direction='column'
              align='center'
              m={3}
              p={'20px'}
              bg='gray.100'
              rounded={6}
            >
              <Heading mb={6}>Editor de Datos de la Organización</Heading>
              <FormControl
                m={2}
                isRequired
                isInvalid={errors.name && touched.name}
              >
                <FormLabel>Nombre</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='name'
                  value={values.name}
                />

                <ErrorMessage component={FormErrorMessage} name='name' />
              </FormControl>
              <FormControl
                m={2}
                isRequired
                isInvalid={touched.logo && errors.logo}
              >
                <FormLabel>Logo</FormLabel>
                <Field
                  as={Input}
                  p='5px 5px'
                  accept='image/jpeg, image/jpg , image/png'
                  name='logo'
                  type='file'
                  onChange={(event) => {
                    setFieldValue('logo', event.currentTarget.files[0]);
                  }} 
                  value={undefined}
                  
                />
                <ErrorMessage component={FormErrorMessage} name='logo' />
              </FormControl>
              <FormControl
                m={2}
                isRequired
                isInvalid={touched.shortDescription && errors.shortDescription}
              >
                <FormLabel>Descripcion Breve</FormLabel>
                <Field
                  as={CKEditor}
                  id='shortDescription'
                  name='shortDescription'
                  editor={ClassicEditor}
                  onBlur={()=>{}}
                  onFocus={()=>{
                    touched.shortDescription=true;
                  }}
                  onChange={(event,editor) => {
                    setFieldValue('shortDescription', editor.getData());
                  }}
                  data={values.shortDescription}
                />  
                <ErrorMessage
                  component={FormErrorMessage}
                  name='shortDescription'
                />
              </FormControl>
              <FormControl
                m={2}
                isRequired
                isInvalid={touched.longDescription && errors.longDescription}
              >
                <FormLabel>Descripcion Completa</FormLabel>
                <Field
                  as={CKEditor}
                  id='longDescription'
                  name='longDescription'
                  editor={ClassicEditor}
                  onBlur={()=>{}}
                  onFocus={()=>{
                    touched.longDescription=true;
                  }}
                  onChange={(event,editor) => {
                    setFieldValue('longDescription', editor.getData());
                  }}
                  data={values.longDescription}
                />  
                <ErrorMessage
                  component={FormErrorMessage}
                  name='longDescription'
                />
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
                Guardar
              </Button>
            </Flex>
          </Form>
        </Flex>)}
    </Formik>
  );
};
export default OrganizationForm;
