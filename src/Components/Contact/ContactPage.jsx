import React, { useEffect, useState } from 'react';
import { Flex, Spacer, Heading, List,Button, VStack, Text} from '@chakra-ui/react';
import TitlePages from '../UI/TitlePages';
import ContactForm from './ContactForm';
import 'leaflet/dist/leaflet.css';
import { GetContact } from '../../Services/ContactService';
import L from 'leaflet';
import axios from 'axios';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import ContactInfoItem from './ContactInfoItem';
import { showErrorAlert } from '../../Services/alertsService';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const ContactPage = () =>{

  const [onForm, setOnForm] = useState(false);
  const [position, setPosition] = useState([]);
  const [error, setError] = useState(false);
  const [ContactData, setContactData] = useState([]);

  useEffect(async () => {
    GetContact()
      .then((response) => {
        if (!response.data) {
          showErrorAlert('Hubo un error al cargar el contenido, intente nuevamente');
        } else {
          setContactData(response.data);
        }
      })
      .catch(error => {
        showErrorAlert();
      });
    getPosition();
  }, [onForm]);

  const getPosition = async () => {
    const response = await axios.get('http://ongapi.alkemy.org/api/organization');
    if(response.data.success){
      let addressString = response.data.data.address; //la direccion esta en un array de string
      let posComa = addressString.indexOf(','); // calculo donde esta la coma
      let lat = addressString.slice(1, posComa); // agarrro el primer elemento
      let lon = addressString.slice(posComa + 2, -1); // agarro el segundo elemento
      setPosition([parseFloat(lat, 10), parseFloat(lon, 10)]); // lo paso a float y lo agrego al array
      setError(false);
    }
    else{
      setError(true);
    }
  };

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

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  
  return(
    <Flex direction='column'>
      <TitlePages text={'Contacto'} />
      <Spacer/>
      <Flex m='5px' align='center' p='20px' justify='center' direction={{ base: 'column', md: 'row' }}>
        {onForm ? formInfo : contactInfo }
        {position.length > 0 && !error ? 
          (
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}/>
            </MapContainer>
          ):
          (<Text fontSize="md" color='red' ml={{base: '0', md:'120px' }}>Error al cargar la direccion de la ONG</Text>) 
        }
      </Flex>
    </Flex>
  );
};
export default ContactPage;