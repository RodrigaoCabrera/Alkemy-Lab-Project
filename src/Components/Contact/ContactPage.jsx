import React, { useState, useEffect } from 'react';
import { Flex, Spacer, Heading, List,Button, VStack } from '@chakra-ui/react';
import TitlePages from '../UI/TitlePages';
import ContactForm from './ContactForm';
import { GetContact } from '../../Services/ContactService';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import ContactInfoItem from './ContactInfoItem';
const ContactPage = () =>{

  const [onForm, setOnForm] = useState(false);
  const [ContactData, setContactData] = useState([]);

  useEffect(() => {
    GetContact()
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setContactData]);

  const contactInfo = 
    (
      <Flex p='10px 5px'>
        {ContactData && 
        <Flex 
          direction='column'
          align='center'
          p={'20px'}
          bg='gray.100'
          rounded={6}
        >
          <VStack spacing={5}>
            <Heading as='h3'>Información de Contacto</Heading>
            <List w='100%' height='330px' overflow='scroll'>
              {ContactData.map((item)=><ContactInfoItem key={item.id} element={item}/>)}
            </List>
            <Heading as='h4' size="lg" p='0 10px'>Tambien podes escribirnos aqui!</Heading>
            <Button
              m={2}
              p='10px 15px'
              color='#fff'
              type='submit'
              onClick={()=>{setOnForm(true);}}
              bg='#398be1'
            >
                Formulario de Contacto
            </Button>
          </VStack>
        </Flex>}
      </Flex>
    );
  const formInfo = 
  (<>
    <Button
      m={5}
      color='#fff'
      onClick={()=>{setOnForm(false);}}
      bg='#398be1'
      rightIcon={<AiOutlineArrowLeft />}
      rounded={10}
      iconSpacing={0}
    >
    </Button>
    <ContactForm/>
  </>
  );
  return(
    <Flex direction='column'>
      <TitlePages text={'Contacto'} />
      <Spacer/>
      <Flex m='5px' align='center' p='20px' justify='center'>
        {onForm ? formInfo : contactInfo }
      </Flex>
    </Flex>
  );
};
export default ContactPage;