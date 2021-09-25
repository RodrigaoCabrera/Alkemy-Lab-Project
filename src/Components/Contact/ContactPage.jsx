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
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const mockData = [
  {
    'id': 2,
    'name': 'asdqwe',
    'email': 'andreagallo264@gmail.com',
    'phone': '[object Undefined]',
    'message': 'mensaje de prueba',
    'deleted_at': null,
    'created_at': '2021-04-27T15:57:11.000000Z',
    'updated_at': '2021-04-27T15:57:11.000000Z',
    'group_id': null
  },
  {
    'id': 3,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '[object Undefined]',
    'message': 'qqqqqqqqqqqqqqqqqqqqqqq',
    'deleted_at': null,
    'created_at': '2021-04-27T16:00:27.000000Z',
    'updated_at': '2021-04-27T16:00:27.000000Z',
    'group_id': null
  },
  {
    'id': 4,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '[object Undefined]',
    'message': 'qqqqqqqqqqqqqqqqqqqqqqq',
    'deleted_at': null,
    'created_at': '2021-04-27T16:00:48.000000Z',
    'updated_at': '2021-04-27T16:00:48.000000Z',
    'group_id': null
  },
  {
    'id': 5,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '2133212321',
    'message': 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
    'deleted_at': null,
    'created_at': '2021-04-27T16:02:12.000000Z',
    'updated_at': '2021-04-27T16:02:12.000000Z',
    'group_id': null
  },
  {
    'id': 6,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '13223132',
    'message': 'ddddddddddddddddddddddddddddddddd',
    'deleted_at': null,
    'created_at': '2021-04-27T16:03:19.000000Z',
    'updated_at': '2021-04-27T16:03:19.000000Z',
    'group_id': null
  },
  {
    'id': 7,
    'name': 'asdqwe',
    'email': 'andreagallo264@gmail.com',
    'phone': '6545654556',
    'message': 'eeeeeeeeeeeeeeeeeeeeeeee',
    'deleted_at': null,
    'created_at': '2021-04-27T16:04:14.000000Z',
    'updated_at': '2021-04-27T16:04:14.000000Z',
    'group_id': null
  },
  {
    'id': 8,
    'name': 'asdqwe',
    'email': 'andreagallo264@gmail.com',
    'phone': '45645656',
    'message': 'qqqqqqqqqqqqqqqqqqqqqq',
    'deleted_at': null,
    'created_at': '2021-04-27T16:05:05.000000Z',
    'updated_at': '2021-04-27T16:05:05.000000Z',
    'group_id': null
  },
  {
    'id': 9,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '456456456',
    'message': 'este es un mensaje de prueba',
    'deleted_at': null,
    'created_at': '2021-04-27T16:16:42.000000Z',
    'updated_at': '2021-04-27T16:16:42.000000Z',
    'group_id': null
  },
  {
    'id': 10,
    'name': 'Juan',
    'email': 'gabriel.rios@intive.com',
    'phone': '111111111',
    'message': 'xdasdsadsada',
    'deleted_at': null,
    'created_at': '2021-05-05T18:10:47.000000Z',
    'updated_at': '2021-05-05T18:10:47.000000Z',
    'group_id': null
  },
  {
    'id': 11,
    'name': 'asdqwe',
    'email': 'asd@asd.com',
    'phone': '132213213',
    'message': 'aaaaaaaaaaaaaaaaaaaaaa',
    'deleted_at': null,
    'created_at': '2021-05-05T18:21:27.000000Z',
    'updated_at': '2021-05-05T18:21:27.000000Z',
    'group_id': null
  }];

const ContactPage = () =>{

  const [onForm, setOnForm] = useState(false);
  const [position, setPosition] = useState([]);
  const [error, setError] = useState(false);
  const [ContactData, setContactData] = useState([]);

  useEffect(async () => {
    GetContact()
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getPosition();
  }, [setContactData]);

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