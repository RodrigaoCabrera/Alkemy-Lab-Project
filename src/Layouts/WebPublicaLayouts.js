import React from 'react';
import HeaderPublic from '../Components/HeaderPublic/HeaderPublic';
import Footer from '../Components/Footer/Footer';



const WebPublicaLayout = ({ children }) => {
  const navigation = [
    { text: 'Inicio', link: '/', onlyUserLoged: false },
    { text: 'Actividades', link: '/activity-content', onlyUserLoged: false },
    { text: 'Novedades', link: '/novedades', onlyUserLoged: false },
    { text: 'Nosotros', link: '/nosotros', onlyUserLoged: false },
    { text: 'Contacto', link: '/contacto', onlyUserLoged: false },
    { text: 'Backoffice', link: '/backoffice', onlyUserLoged: true }, 
  ];
  return (
    <>
      <HeaderPublic navigation={navigation}/>
      {children}
      <Footer/>
    </>
  );
};

export default WebPublicaLayout;