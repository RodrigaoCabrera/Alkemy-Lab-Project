import React, { useState } from 'react';
import '../FormStyles.css';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {FormLabel,Button,Container,Alert,AlertIcon,Text} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CategoriesForm = ({categoria}) => {
  const [EnvioExitoso, setEnvioExitoso] = useState(false);
  const [EnvioError, setEnvioError] = useState(false);
  return ( 
    <Container mt={3}>
      <Formik
        initialValues={{
          name: categoria ? categoria.name : '',
          description: categoria ? categoria.description : '',
          image: '',
          id: categoria ? categoria.id : 0}}
        onSubmit ={(formData,{resetForm})=>{
          if (categoria === undefined) {
            axios.post('http://ongapi.alkemy.org/api/categories', {
              name: formData.name,
              description: formData.description,
              image: formData.image
            }).then(function () {
              setEnvioExitoso(true);
              setTimeout(()=>{
                setEnvioExitoso(false);
                resetForm();
              },3000);
              resetForm();
            }).catch(function (error) {
              console.log('No se pudo ingresar por error :',error);
              setEnvioError(true);
              setTimeout(()=>{
                setEnvioError(false);
              },3000);
            });} 
          else {
            axios.put(`http://ongapi.alkemy.org/api/categories/${categoria.id}`, {
              name: formData.name,
              description: formData.description,
              image: formData.image
            }).then(function () {
              setEnvioExitoso(true);
              setTimeout(()=>{
                setEnvioExitoso(false);
                resetForm();
              },3000);
              resetForm();
            }).catch(function (error) {
              console.log('No se pudo ingresar por error :',error);
              setEnvioError(true);
              setTimeout(()=>{
                setEnvioError(false);
              },3000);
            });}      
        }}
        validationSchema ={Yup.object({
          name: Yup.string().required('Requiere title').min(4,'Minimo 4 caracteres'),
          description: Yup.string().required('Requiere la description'),
          image: Yup.string().required('Requiere la imagen'),
        })}
      >
        {({handleSubmit,values,handleChange,initialValues,errors,touched,handleBlur})=>(
          <form  className="form-container" onSubmit={handleSubmit}>
            <Text 
              as="samp" 
              fontSize="2xl" 
              color="teal.500" 
              marginTop={7} 
              textAlign="center" 
              fontWeight="bold">Formulario Categoria</Text>
            <FormLabel 
              htmlFor="name">First name</FormLabel>
            <input 
              className="input-field" 
              id="name"type=" text" 
              name="name" value={values.name} 
              onChange={handleChange} 
              onBlur={handleBlur}></input>
            {touched.name && errors.name && <Alert status="error"><AlertIcon />{errors.name}</Alert>}
            <FormLabel 
              htmlFor="description">description</FormLabel>
            <CKEditor
              editor={ ClassicEditor }
              data={initialValues.description}
              onChange={ ( event, editor ) => values.description=editor.getData().slice(3,-4)}
            />
            {errors.description && <Alert status="error"><AlertIcon />{errors.description}</Alert>}
            <FormLabel 
              htmlFor="image">Imagen</FormLabel>
            <input className="input-field" 
              id="image" 
              type="file" 
              name="image" 
              onBlur={handleBlur}
              onChange={(e)=>{
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function () {values.image=reader.result;};
              }} 
              accept="image/jpeg, image/png"></input>
            {touched.image && errors.image &&<Alert status="error"><AlertIcon />{errors.image}</Alert>}
            <Button  
              mt={4} 
              colorScheme="teal" 
              type="submit">Send</Button>
            {EnvioExitoso && <Alert status="success"><AlertIcon />Categoria Enviada</Alert>}
            {EnvioError && <Alert status="error"><AlertIcon />Categoria No enviado</Alert>}
          </form >
        )}
      </Formik>
    </Container>
  );
};
 
export default CategoriesForm;