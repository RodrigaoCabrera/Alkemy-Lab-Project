import React, { useCallback } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
    Input,
    FormControl,
    Flex
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchCategory, seachCategoryQuery } from '../../app/categories-slice';

const schema = yup.object().shape({
    category: yup
        .string()
});

const CategoriesSeach = () => {

    const dispatch = useDispatch();
    const changeHandler = (e) => {
        e.preventDefault();
        if (e.target.value.length < 3) {
            dispatch(fetchCategory());
        }
        else {
            dispatch(seachCategoryQuery(e.target.value));
        }
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
        , [] );

    return (
        <Formik
            validationSchema={schema}
            validateOnMount={true}
            initialValues={{
                category: ''
            }}
        >
            {({ values, touched, errors }) => (
                <Flex align='center' justify='center'>
                    <Form w={'80%'} height='80%'>
                        <Flex
                            direction='column'
                            align='center'
                            m={2}
                            p={3}
                            rounded={6}
                        >
                            <FormControl
                                m={2}
                                isInvalid={errors.category && touched.category}
                            >
                                <Field
                                    p={5}
                                    as={Input}
                                    type='text'
                                    name='category'
                                    value={values.name}
                                    onChange={debouncedChangeHandler}
                                    placeholder="Buscar categoria"
                                />
                            </FormControl>
                        </Flex>
                    </Form>
                </Flex>)}
        </Formik>
    );
};

export default CategoriesSeach;