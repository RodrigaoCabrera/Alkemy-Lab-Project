import React from 'react';
import HeaderPublic from '../Components/HeaderPublic/HeaderPublic';
import Footer from '../Components/Footer/Footer';



const WebPublicaLayout = ({ children }) => {
  const LinkInside = [
    { text: 'Inicio', link: '/', onlyUserLoged: true },
    { text: 'Actividades', link: '/activity-content', onlyUserLoged: true },
    { text: 'Novedades', link: '/novedades', onlyUserLoged: true },
    { text: 'Nosotros', link: '/nosotros', onlyUserLoged: true },
    { text: 'Contacto', link: '/contacto', onlyUserLoged: true },
    { text: 'CrearUsuario', link:'/create-user', onlyUserLoged:true },
  ];
  return (
    <>
  
      <HeaderPublic options = {LinkInside}/>
      {children}
      <Footer/>
    </>
  );
};

export default WebPublicaLayout;