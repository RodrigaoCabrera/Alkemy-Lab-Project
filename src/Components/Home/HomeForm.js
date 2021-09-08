import React, { useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box, Textarea, Center, Text, Heading,
  FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';
import ModalHome from './ModalHome';
import '../FormStyles.css';
import SlideHomeForm from './SlideHomeForm';

const HomeForm = (props) => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [slides, setSlides] = useState(props.slides ? props.slides : []); 
  //expected props => [{id: ..., text : '...', image: 'base64_image'}, ...]

  const handleChange = (e) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value);
    }
  };

  const handleSubmit = () =>{
    console.log('enviado ', slides, title);
  };

  const modalHandlerAdd = () => {
    if(slides.length < 3){
      setIsOpenAdd(!isOpenAdd);
    }
  };

  const validationTitle = () => {
    console.log('validation');
    if(title.length < 20){
      return 'Debe contener almenos 20 caracteres';
    }else if(title.length == 0){
      return 'Este campo es obligatorio';
    }else{
      return;
    }
  };

  const editSlideHandler = (slide) => {
    for (const element of slides){
      if(slide.id === element.id){
        element.text = slide.text;
        element.image = slide.image;
      }
    }
  };

  const addSlideHandler = (slide) => {
    setSlides([...slides, slide]);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p='3' minW='300px' maxW='md' boxShadow='5px 5px 15px rgba(0,0,0,0.3)'>
      <Heading align='center' color='#6BBCFA' as="h1" size="lg" mb='4'>Edicion Home</Heading>
      <Formik 
        initialValues={{name: '', slides: {}}}
        className="form-container" 
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Box minH='35vh' d='flex' h='100%' flexDirection='column' justifyContent='space-between'>
              <Field name="title" validate={validationTitle}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.title} isRequired>
                    <FormLabel htmlFor="title">Titulo</FormLabel>
                    <Textarea {...field} size='lg' name='title'
                      resize='none' value={title} onChange={handleChange}
                      placeholder="Titulo (min. 20 caracteres)"/>
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Center display='flex' flexDirection='column'>
                {slides.map((slide) => (
                  <SlideHomeForm key={slide.id} slide={slide} editSlideHandler={editSlideHandler}/> 
                ))}
              </Center>
              <Center m='3'>
                <Button bg='#3B96F7' color='#fff' _hover={{bg:'#9AC9FB', color:'#000'}} onClick={modalHandlerAdd}>
                  <BiAddToQueue/>
                  <Text pl='3'>Agregar Slide</Text>
                </Button>
              </Center>
              <ModalHome modalHandler={modalHandlerAdd} isOpen={isOpenAdd} slideHandler={addSlideHandler}/>
              <Button type='submit' bg='#319795' isLoading={props.isSubmitting} color='#fff' _hover={{bg: '#143E3D'}}>Listo</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default HomeForm;
