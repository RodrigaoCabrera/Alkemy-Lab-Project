import React from 'react';
import InputImg from './InputImg'
import { Box } from "@chakra-ui/react";
//importación de la librería datePicker para establecer la fecha
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//validación del formulario
import { Field, Form, ErrorMessage } from 'formik';

export default function Formulario({ handleChange, values, setFieldValue, isSubmitting, object, imgPreview, setImgPreview }) {
    
    return (
        <Form className="form-container">

            <Field
                className="input-field"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={values.title}

            />
            <ErrorMessage name="title" />

            <Field
                className="input-field"
                type="text"
                name="description"
                placeholder="Agrega una descripción"
                value={values.description}
                onChange={handleChange}
            />
            <ErrorMessage name="description" />

            <Box>
                <DatePicker
                    name='date'
                    selected={values.date}
                    onChange={(fecha) => setFieldValue('date', fecha)}
                />
            </Box>

            <InputImg 
                imgPreview={imgPreview} 
                setImgPreview={setImgPreview}
                setFieldValue={setFieldValue}
            />

            <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
            >
                {object ? 'Actualizar' : 'Crear'}
            </button>
        </Form>
    )
}