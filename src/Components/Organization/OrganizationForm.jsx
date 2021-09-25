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
import { postTitleRequest } from '../../Services/homeService';
const liURL ='(https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)';
const igURL = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/;
const twURL = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/i;
const fbURL = /^(https?:\/\/)?(?:www\.)?facebook\.com\/(#!\/)?[a-zA-Z0-9?]/;
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
  ig : yup
    .string()    
    .matches(igURL,'Por favor ingrese una URL valida.'),
  fb : yup
    .string()    
    .matches(fbURL,'Por favor ingrese una URL valida.'),
  tw : yup
    .string()
    .matches(twURL,'Por favor ingrese una URL valida.'),
  li : yup
    .string()
    .matches(liURL,'Por favor ingrese una URL valida.'),
  
    
});

const OrganizationForm = () => {
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      onSubmit={(values) => {
        console.log(values);
        postTitleRequest(values.name).then(res=> console.log(res));
        //aca van el resto de los post de organizacion.
      }}
      initialValues={{
        name: '',
        logo: '',
        shortDescription: '',
        longDescription: '',
      }}
    >
      {({  values, isValid, errors, touched, setFieldValue}) => (
        <Flex  align='center' justify='center'>
          <Form /* onSubmit={handleSubmit} */ w={'60%'} height='70%'>
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
                  onChange={(e) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(e.currentTarget.files[0]);
                    reader.onload = () => {
                      setFieldValue('logo', reader.result);
                    };
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
              <FormControl
                m={2}
                isInvalid={errors.ig && touched.ig}
              >
                <FormLabel>Instagram</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='ig'
                  value={values.ig}
                />
                <ErrorMessage component={FormErrorMessage} name='ig' />
              </FormControl>
              <FormControl
                m={2}
                isInvalid={errors.fb && touched.fb}
              >
                <FormLabel>Facebook</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='fb'
                  value={values.fb}
                />
                <ErrorMessage component={FormErrorMessage} name='fb' />
              </FormControl>
              <FormControl
                m={2}
                isInvalid={errors.li && touched.li}
              >
                <FormLabel>LinkedIn</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='li'
                  value={values.li}
                />
                <ErrorMessage component={FormErrorMessage} name='li' />
              </FormControl>
              <FormControl
                m={2}
                isInvalid={errors.tw && touched.tw}
              >
                <FormLabel>Twitter</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='tw'
                  value={values.tw}
                />
                <ErrorMessage component={FormErrorMessage} name='tw' />
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
