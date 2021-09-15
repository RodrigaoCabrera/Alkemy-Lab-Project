import React, { useState } from 'react';
import '../FormStyles.css';
import Form from './Form';

import { Container } from "@chakra-ui/react";

import axios from 'axios';

//validación del formulario
import { Formik } from 'formik';
import * as Yup from 'yup';


const CreateEditForm = ({ object }) => {
    const [imgPreview, setImgPreview] = useState(object?.image || '');

    const handleSubmit = (formData, resetForm) => {
        if (object) { //Si el objeto existe, se realiza una petición patch para actualizar con los datos agregados en los campos del formulario por el administrador.
            axios
                .patch(`http://ongapi.alkemy.org/api/project/${object.id}`, { ...formData, id: object.id })
                .catch((err) => {
                    console.log(err);
                })
                .then((res) => {
                    resetForm();
                    setImgPreview('');
                    console.log(res);
                });

        } else {//Si el objeto no existe, se realiza una petición post para crear una nueva publicación.
            axios
                .post('http://ongapi.alkemy.org/api/project', formData)
                .catch((err) => {
                    console.log(err);
                })
                .then((res) => {
                    resetForm();
                    setImgPreview('');
                    console.log(res);
                });
        }
    };

    const formShema = Yup.object().shape({
        title: Yup.string().required('Campo requerido'),
        description: Yup.string().required('Campo requerido'),
        image: Yup.mixed().required('Debe seleccionar una imagen'),
        date: '',
    });

    return (
        <Container h='700px'>
            <Formik
                initialValues={{
                    title: object?.title || '',
                    description: object?.description || '',
                    image: object?.image || '',
                    date: new Date(),
                }}
                validationSchema={formShema}
                onSubmit={(formData, { resetForm }) => handleSubmit(formData, resetForm)}
            >

                {props => <Form 
                            {...props} 
                            object={object} 
                            imgPreview={imgPreview} 
                            setImgPreview={setImgPreview} 
                            />
                }

            </Formik>
        </Container>
    )
};

export default CreateEditForm;
