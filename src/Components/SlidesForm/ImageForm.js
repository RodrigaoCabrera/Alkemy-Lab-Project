import React from 'react';
import { Image, Box } from "@chakra-ui/react";
import { Field, ErrorMessage } from 'formik';
import '../FormStyles.css';

const ImageForm = ({ imgPreview, setImgPreview, setFieldValue }) => (
    <>
        {//Renderizado condicional. Si la imagen no existe se muestra un 'Field' para subir una, de lo contrario se la muestra.
            !imgPreview ?
                <Field
                    className="input-field"
                    name='image'
                    type='file'
                    accept=".png, .jpg,"
                    value={undefined}
                    onChange={(e) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.currentTarget.files[0]);
                        reader.onload = () => {
                            setFieldValue('image', reader.result)
                            setImgPreview(reader.result);
                        };
                    }}
                />
                :

                <Box position='relative'>
                    <Image
                        className="img-preview"
                        src={imgPreview}
                        alt='previsualización de imagen'
                        boxSize="100%"
                        objectFit="cover"
                    />
                    <Box //Boton para eliminar la imagen subida o cargada.
                        position='absolute'
                        top='5px'
                        right='5px'
                        bgColor='#c1c1c188'
                        color='#000'
                        textAlign='center'
                        pt='5px'
                        w={35}
                        h={30}
                        borderRadius='9999px'
                        cursor='pointer'
                        transition='0.3s'
                        _hover={{ bgColor: '#2E86C1' }}
                        onClick={() => {
                            setFieldValue('image', '')
                            setImgPreview('')
                            }   
                        }
                    >
                        X
                    </Box>
                </Box>
        }
        <ErrorMessage name="image" />
    </>
);

export default ImageForm;