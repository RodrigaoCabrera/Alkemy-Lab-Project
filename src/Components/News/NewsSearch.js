import {React,useCallback} from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  Input,
  FormLabel,
  FormControl,
  Flex,
  FormErrorMessage
} from '@chakra-ui/react';
import {GetNewsSearch,GetNews} from '../../Services/NovedadesService';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, getNewsWithQuery } from '../../features/newsReducer';

export default function NewsSearch({Search}) {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    Novedades: yup.string().min(3,'Ingrese 3 Caracteres Para La Busqueda')
  });
  const changeNovedades = (event)=>{
    event.preventDefault();
    if(event.target.value.length<3){
      dispatch(getNews());
    }
    else{
      dispatch(getNewsWithQuery(event.target.value));
    }
  };
  const debunceNovedades = useCallback(
    debounce(changeNovedades, 400)
    , []);

  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      initialValues={{ Novedades: ''}}
    >
      {({ values,touched,errors}) => (
        <Flex  align='center' justify='center'>
          <Form  w={'60%'} height='70%'>
            <Flex
              direction='column'
              align='center'
              m={2}
              p={'5px 15px'}
              rounded={6}
            >
              <FormControl
                m={2}
                isInvalid={errors.Novedades && touched.Novedades}
              >
                <FormLabel color='#398BE1'
                  fontWeight='bold'
                  fontSize='18px'
                  alignSelf='center'
                  textAlign="center"
                >Buscador de Novedades</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='Novedades'
                  value={values.name}
                  onChange={debunceNovedades}
                />
                <FormErrorMessage textAlign="center">{errors.Novedades}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Form>
        </Flex>)}
    </Formik>
  );
}
