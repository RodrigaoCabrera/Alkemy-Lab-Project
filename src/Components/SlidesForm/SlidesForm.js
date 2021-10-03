import React from 'react';
import ImageForm from './ImageForm';

import { FormLabel } from '@chakra-ui/form-control';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//validación del formulario
import { Field, Form, ErrorMessage } from 'formik';



const SlidesForm = ({
  handleChange,
  values,
  setFieldValue,
  isSubmitting,
  object,
  imgPreview,
  setImgPreview,
  isLoading
}) => (
  <Form className="form-container">
    <FormLabel htmlFor='title'>Nombre</FormLabel>
    <Field
      className="input-field"
      type="text"
      name="name"
      placeholder="name"
      onChange={handleChange}

    />
    <ErrorMessage name="name" />

    <FormLabel htmlFor='description'>Descripción</FormLabel>
    <CKEditor
      data={values.description}
      name='description'
      editor={ClassicEditor}
      onBlur={()=>{}}
      onChange={(event, editor) => {
        setFieldValue('description', editor.getData());
      }}
    />
    <ErrorMessage name='description' />

    <FormLabel htmlFor='order'>Órder</FormLabel>
    <Field
      className='input-field'
      type='number'
      name='order'
      placeholder='Órder'
      onChange={handleChange} 
    />
    <ErrorMessage name="order" />

    <ImageForm
      imgPreview={imgPreview}
      setImgPreview={setImgPreview}
      setFieldValue={setFieldValue}
    />

    <button
      className="submit-btn"
      type="submit"
      disabled={isSubmitting}
      isLoading = {isLoading}
    >
      {object ? 'Actualizar' : 'Crear'}
    </button>
  </Form>
);
export default SlidesForm;