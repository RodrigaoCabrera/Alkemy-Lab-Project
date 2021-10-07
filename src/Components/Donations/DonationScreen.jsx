import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Image,Select,Button } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import DonationImage from './DonationImage.jpg';
const DonationScreen = ({text})=>{
  text? text : text='Con tu colaboracion podemos ayudar a más jovenes a desarrollarse y tener un futuro mejor';
  const [link,setLink] = useState('');
  const changeHandler = (value)=>{
    switch (value) {
    case '100':
      setLink('https://mpago.la/2issj3F');
      break;
    case '250':
      setLink('https://mpago.la/1XxnaDZ');
      break;
    case '500':
      setLink('https://mpago.la/19bzVts');
      break;
    case '1000':
      setLink('https://mpago.la/2MVn7Mt');
      break;
    default:
      setLink('');
      break;
    }
  };
  console.log(link);
  return(
    <Flex direction='column' align='center' /* bgColor='rgba(154, 201, 251,0.5)' */ w='100%'>
      <Flex direction='column'align='center' w='100%' >
        <Heading fontWeight='bold' size='3xl' textAlign='center' p={8}>
        Ayudanos a llegar a <Text as='span' color='#DB5752' >M</Text><Text color='#FAFA88' as='span'>A</Text><Text color='#9AC9FB' as='span'>S</Text> niños!
        </Heading>
        <Image src={DonationImage} w='90%'/>
      </Flex>
      <Flex align='center' justify='center' mt={3}   w='100%' direction='column' bgColor='rgba(98%, 98%, 53%,0.5)' p={3}>
        <Text fontWeight='bold' size='2xl' textAlign='center'   p={3} >{text}</Text>
        <Formik
          initialValues={{ amount: '100' }}
        >
          {(values) => (
            <Form>
              <Flex align='center' justify='center'>
                <Field m={2}> 
                  {({ field, form }) => (
                    <Select  {...field}  placeholder='Elegi un monto' onChange={(event)=>{changeHandler(event.currentTarget.value);values.setFieldValue('amount',`${event.currentTarget.value}`);}} name='amount' value={values.amount}  bgColor='rgba(98%, 98%, 53%,1)' >
                      <option value='100'>100</option>
                      <option value='250'>250</option>
                      <option value='500'>500</option>
                      <option value='1000'>1000</option>
                    </Select>
                  )}
                </Field>
                <Button
                  m={2}
                  bgColor='rgba(98%, 98%, 53%,1)'
                  isDisabled={link===''}
                >
                  <a href={link}>
                Donar
                  </a>
                </Button></Flex>
              
            </Form>
          )}
        </Formik>
        
      </Flex>
      
    </Flex>
  );
};
export default DonationScreen;