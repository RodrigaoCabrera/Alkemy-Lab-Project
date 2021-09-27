import React, { useState} from 'react';
import '../FormStyles.css';
import SlidesForm from './SlidesForm';

import { Container } from '@chakra-ui/react';


import { PostSlides,PutSlides } from '../../Services/SlidesService';

//validación del formulario
import { Formik } from 'formik';
import * as Yup from 'yup';


const CreateEditForm = ({ object }) => {
  const [imgPreview, setImgPreview] = useState(object?.image || '');

  const handleSubmit  = (formData) => {
    console.log('submit');
    const data = {
      name: formData.name,
      description: formData.description,
      image: formData.image
    };
    if (object) { 
      PutSlides(object.id,data)
        .then(res=> console.log(res))
        .catch(err=> console.log(err));
             

    } else {
      PostSlides(data)
        .then(res=>console.log(res))
        .catch(err=> console.log(err));
     
    }
    
  };



  const formShema = Yup.object().shape({
    name: Yup.string().required('Campo requerido').min(4,'Minimo 4 caracteres'),
    description: Yup.string().required('Campo requerido'),
    order: Yup.string().required('Campo requerido'),
    image: Yup.mixed().required('Debe seleccionar una imagen'),
  });

  return (
    <Container h='800px'>
      <Formik
        initialValues={{
          name: object?.title || '',
          description: object?.description || '',
          order: object?.id || '',
          image: object?.image || '',
        }}
        validationSchema={formShema}
        onSubmit={(formData, { resetForm }) => handleSubmit(formData, resetForm)}
      >

        {props => {
          return(<SlidesForm
            {...props}
            object={object}
            imgPreview={imgPreview}
            setImgPreview={setImgPreview}
          />);}
        }

      </Formik>
    </Container>
  );
};

export default CreateEditForm;