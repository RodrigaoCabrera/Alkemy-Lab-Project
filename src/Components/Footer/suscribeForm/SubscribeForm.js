import  React from 'react';
import './input.css';
import Swal from 'sweetalert2';
import { FooterHeading } from './FooterHeading';
import {
  Button, 
  Input, 
  Text,
  InputGroup,
} from "@chakra-ui/react";
import { Formik } from 'formik';
import * as Yup from 'yup';

const SubscribeForm = () => {

  const local = localStorage.getItem('subcribe');

  return !local && (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Invalid Email')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          localStorage.setItem('subcribe', JSON.stringify(values));
          setSubmitting(false);
          Swal.fire('thanks for subscribing!', '', 'success' );
        }, 1000);
      }}
      render={props => {
        const {
          values,
          errors,
          initialValues,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        const hasChanged = !(values === initialValues);
        return (
          <form onSubmit={handleSubmit}>
            <FooterHeading mb="4" >GET THE LATEST NEWS</FooterHeading>
            <InputGroup>
              <Input
                id="email"
                placeholder="example@example.com"
                type="text"
                autoComplete={false}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  hasChanged ? errors.email ? (
                    'text-input error'
                  ) : (
                    'text-input success'
                  ) : (
                    'text-input'
                  )
                }
              />
              <Button type="submit"  colorScheme="blue" ml="1">
                Suscribe
              </Button>
            </InputGroup>
            {errors.email && <Text color="tomato" >{errors.email}</Text>}
          </form>
        );
      }}
    />
  );
};

export default SubscribeForm;