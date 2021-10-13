import React, { useState} from 'react';
import { useEffect } from 'react';
import SlidesSearchForm from '../Backoffice/Slides/SlidesSearchForm';
import { GetSlides } from '../../Services/SlidesService';
import '../FormStyles.css';
import SlidesForm from './SlidesForm';
import { Container, Flex } from '@chakra-ui/react';
import { createSlideAction, updateSlideAction } from '../../features/slideReducer';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessAlert, showErrorAlert } from '../../Services/alertsService';
//validación del formulario
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';


const CreateEditForm = ({ location : prop }) => {

  const object = prop.object;

  const [imgPreview, setImgPreview] = useState(object?.image || '');

  const dispatch = useDispatch();

  const Status  = useSelector(store => store.slides.Status);

  const [ submitSend, setSubmitSend ] = useState(false);

  const handleSubmit  = (formData) => {

    const data = {
      name: formData.name,
      description: formData.description,
      image: formData.image
    };
    if (object) { 
      dispatch( updateSlideAction(object.id,data) );
    } else {
      dispatch( createSlideAction(data) );
    }
    setSubmitSend(true);
  };

  if(submitSend === true){
    switch(Status){
    case 'success':
      showSuccessAlert();
      break;
    case 'failed':
      showErrorAlert();
      break;
    default:
      break;      
    }
  } 
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
        <Flex justify='space-around' w='100%' align='start' >
          <SlidesSearchForm w='70%'/>
        </Flex>
        {props => {
          return(<SlidesForm
            {...props}
            object={object}
            imgPreview={imgPreview}
            setImgPreview={setImgPreview}
            isLoading={ Status === 'loading' }
          />);}
        }
      </Formik>
      {
        (Status === 'success' && submitSend === true)  && <Redirect to='/backoffice/slides' />
      }
    </Container>
  );
};

export default CreateEditForm;