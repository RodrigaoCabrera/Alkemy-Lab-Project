import React,{useCallback} from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  Input,
  FormLabel,
  FormControl,
  Flex,
  FormErrorMessage
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import {getSlides, getSlidesWithQuery} from '../../../features/slideReducer';

const schema = yup.object().shape({
  activity: yup.string()
});

const SlidesSearchForm = () =>{
  const dispatch = useDispatch();
  const changeHandler = (event)=>{
    event.preventDefault();
    if(event.target.value.length<3){
      dispatch (getSlides());
    }
    else{
      dispatch(getSlidesWithQuery (event.target.value));
    }
  };
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , []);
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      initialValues={{
        slides:''}}
    >
      {({ values,touched,errors}) => (
        <Flex  align='center' justify='center'>
          <Form /* onSubmit={handleSubmit} */ w={'60%'} height='70%'>
            <Flex
              direction='column'
              align='center'
              m={2}
              p={'5px 15px'}
    
              rounded={6}
            >
              <FormControl
                m={2}
                isInvalid={errors.slides&& touched.slides}
              >
                <FormLabel color='#398BE1'
                  fontWeight='bold'
                  fontSize='18px'
                  alignSelf='center'
                        
                >Buscador de Slides</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='activity'
                  value={values.name}
                  onChange={debouncedChangeHandler}
                />
                <FormErrorMessage>{errors.slides}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Form>
        </Flex>)}
    </Formik>
  );
};
export default SlidesSearchForm;