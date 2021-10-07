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
import { getActivitiesWithQuery, getActivity } from '../../../features/activitiesReducer';
const schema = yup.object().shape({
  activity: yup.string()
});
const ActivitiesSearchForm = () =>{
  const dispatch = useDispatch();
  const changeHandler = (event)=>{
    event.preventDefault();
    if(event.target.value.length<3){
      dispatch(getActivity());
    }
    else{
      dispatch(getActivitiesWithQuery(event.target.value));
    }
  };
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 400)
    , []);
  return (
    <Formik
      validationSchema={schema}
      validateOnMount={true}
      initialValues={{
        activity: ''}}
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
                isInvalid={errors.activity && touched.activity}
              >
                <FormLabel color='#398BE1'
                  fontWeight='bold'
                  fontSize='18px'
                  alignSelf='center'
                  
                >Buscador de Actividades</FormLabel>
                <Field
                  p='15px 30px'
                  as={Input}
                  type='text'
                  name='activity'
                  value={values.name}
                  onChange={debouncedChangeHandler}
                />
                <FormErrorMessage>{errors.activity}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Form>
        </Flex>)}
    </Formik>
  );
};
export default ActivitiesSearchForm;