import React from 'react';
import HeaderPublic from '../Components/HeaderPublic/HeaderPublic';
import Footer from '../Components/Footer/Footer';
import { Box } from '@chakra-ui/layout';

const WebPublicaLayout = ({ children }) => {
  const navigation = [
    { text: 'Inicio', link: '/', onlyUserLoged: false },
    { text: 'Actividades', link: '/activity-content', onlyUserLoged: false },
    { text: 'Novedades', link: '/novedades', onlyUserLoged: false },
    { text: 'Nosotros', link: '/nosotros', onlyUserLoged: false },
    { text: 'Contacto', link: '/contacto', onlyUserLoged: false, notAdmin: true },
    { text: 'Backoffice', link: '/backoffice', onlyUserLoged: true }, 
  ];
  return (
    <Box height='100vh'>
      <HeaderPublic navigation={navigation}/>
      {children}
      <Box flex={1} alignItems='flex-end'>
        <Footer/>
      </Box>
    </Box>
  );
};

export default WebPublicaLayout;