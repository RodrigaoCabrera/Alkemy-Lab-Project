import React, { useState } from 'react';
import '../FormStyles.css';
import SlidesForm from './SlidesForm';

import { Container } from "@chakra-ui/react";

import axios from 'axios';

//validación del formulario
import { Formik } from 'formik';
import * as Yup from 'yup';


const CreateEditForm = ({ object }) => {
    const [imgPreview, setImgPreview] = useState(object?.image || '');

    const handleSubmit = (formData, resetForm) => {
        console.log(formData)
        if (object) { //Si el objeto existe, se realiza una petición patch para actualizar con los datos agregados en los campos del formulario por el administrador.
            axios
                .patch(`http://ongapi.alkemy.org/api/slide/${object.id}`, { ...formData, id: object.id })
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
                .post('http://ongapi.alkemy.org/api/slide', formData)
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
                />)}
                }

            </Formik>
        </Container>
    )
};

export default CreateEditForm;