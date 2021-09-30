import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Form, Field } from 'formik';
import { Button, Box, Input, FormControl, FormLabel, FormErrorMessage, Text, Heading  } from '@chakra-ui/react';
import axios from 'axios';
import '../FormStyles.css';
import { showErrorAlert } from '../../Services/alertsService';


// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_TESTIMONIALS;

const TestimonialForm = ({ values }) => {
  const [message, setMessage] = useState('');
  const [error, seterror] = useState(false);

  const [initialValues, setInitialValues] = useState({
    name: values ? values.name : '',
    description: values ? values.description : '',
    image: ''
  });

  const nameHandler = (e) => {
    setInitialValues({ ...initialValues, name: e.target.value});
  };
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setInitialValues({ ...initialValues, image: reader.result });
    };
  };

  const validateName = () => {
    if (initialValues.name.length >= 4) {
      return;
    } else if (initialValues.name.length == 0) {
      return 'Este campo es obligatorio';
    } else {
      return 'Debe contener almenos 4 caracteres';
    }
  };
  const validateDescription = () => {
    if (initialValues.description.length > 0) {
      return;
    } else {
      return 'Este campo es obligatorio';
    }
  };

  const validateImage = () => {
    if(initialValues.image.length > 0){
      return;
    }else{
      return 'Debe subir una imagen';
    }
  };

  const handleSubmit = async () => {
    try {
      let response;
      let description = initialValues.description;
      if(initialValues.description[0] === '<'){
        description = description.slice(3, -4); //CKEditor return data whit <p></p>
      }
      let objectSend = {
        name: initialValues.name,
        description,
        image: initialValues.image
      };
      console.log(objectSend);
      if(values){
        response = await axios.put(`${url}/${TestimonialForm.id}`, objectSend);
      }else{
        response = await axios.post(url, objectSend);
      }
      if(response.data.success){
        seterror(false);
        setMessage(response.data.message);
      }else{
        seterror(true);
        setMessage(response.data.message);
      }
    } catch (err) {
      seterror(true);
      setMessage('Error al enviar el testimonio');
    }
  };

  return (
    <Box maxW='sm' minH='65vh' borderWidth="1px" borderRadius="lg" p='3' boxShadow='5px 5px 15px rgba(0,0,0,0.3)'>
      <Heading align='center' color='#6BBCFA' as="h1" size="lg" mb='3'>Testimonio</Heading>
      <Formik className="form-container"
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Box as={Form} d='flex' minH='65vh' flexDirection='column' justifyContent='space-between'>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                  {Error && showErrorAlert()}
                  <FormLabel htmlFor="name">Titulo</FormLabel>
                  <Input {...field} value={initialValues.name} onChange={nameHandler} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='description' validate={validateDescription}>
              {({ form }) => (
                <FormControl isInvalid={form.errors.description && form.touched.description} isRequired>
                  <FormLabel htmlFor="description" >Descripcion</FormLabel>
                  <Field as={CKEditor} editor={ClassicEditor}
                    data={initialValues.description}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setInitialValues({ ...initialValues, description: data });
                    }}
                    onBlur={validateDescription}
                  />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="image" validate={validateImage}>
              {({ form }) => (
                <FormControl isInvalid={form.errors.image && form.touched.image} isRequired>
                  <FormLabel htmlFor="image">Imagen</FormLabel>
                  <Input pt='1' type="file" name='image' onChange={imageHandler} accept="image/jpeg , image/png" />
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt={4} bg='#319795' isLoading={props.isSubmitting} type="submit" color='#fff' _hover={{bg: '#143E3D'}}>
              Enviar
            </Button>
            {message.length > 0 && <Text align='center' color={error ? 'tomato' : '#4bc94f'}>{message}</Text>}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default TestimonialForm;