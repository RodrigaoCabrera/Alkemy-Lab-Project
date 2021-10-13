import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import HeaderPublic from './HeaderPublic';

describe('headerPublic tests', () => {

  const mockStore = configureStore();
  
  const navigationLinks = [
    { text: 'Inicio', link: '/', onlyUserLoged: false },
    { text: 'Actividades', link: '/activity-content', onlyUserLoged: false },
    { text: 'Novedades', link: '/novedades', onlyUserLoged: false },
    { text: 'Nosotros', link: '/nosotros', onlyUserLoged: false },
    { text: 'Contacto', link: '/contacto', onlyUserLoged: false, notAdmin: true },
    { text: 'Backoffice', link: '/backoffice', onlyUserLoged: true }, 
  ];

  describe('User not logged tests', () => {

    const initState = {
      auth: {
        Autenticacion: false,
        Usuario: {}
      }
    };
    
    let store = mockStore(initState);

    beforeEach(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HeaderPublic navigation={navigationLinks} />
          </MemoryRouter>
        </Provider>
      );
    });

    test('should render login and register button if user is not logged', () => {
  
      expect(screen.getByRole('link', {
        name: /login/i
      })).toBeInTheDocument();
      
      expect(screen.getByRole('link', {
        name: /sign up/i
      })).toBeInTheDocument();
      
    });

    test('should render public links if user is not logged', () => {
  
      const navigation = screen.getByRole('navigation', {
        name: /breadcrumb/i
      });
  
      const actividades = within(navigation).getByRole('link', {
        name: /actividades/i
      });
  
      const novedades = within(navigation).getByRole('link', {
        name: /novedades/i
      });
  
      const nosotros = within(navigation).getByRole('link', {
        name: /nosotros/i
      });
  
      const contacto = within(navigation).getByRole('link', {
        name: /contacto/i
      });
  
      expect(actividades).toBeInTheDocument();
      expect(novedades).toBeInTheDocument();
      expect(nosotros).toBeInTheDocument();
      expect(contacto).toBeInTheDocument();
  
      expect(screen.getByRole('link', {
        name: /inicio/i
      })).toBeInTheDocument();
      
    });
    
  });

  describe('User logged tests', () => {

    describe('User admin', () => {
  
      const initState = {
        auth:{
          Autenticacion: true,
          Usuario: {
            role_id: 0
          }
        }
      };
      
      let store = mockStore(initState);
      
      beforeEach(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <HeaderPublic navigation={navigationLinks} />
            </MemoryRouter>
          </Provider>
        );
      });
  
      test('should render logout button if user is logged', () => {
  
        expect(screen.getByRole('button', { name: /cerrar sesion/i })).toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /login/i })).not.toBeInTheDocument();
        expect(screen.queryByRole('link', { name: /sign up/i })).not.toBeInTheDocument();
  
      });
      
      test('should not render contact if user is logged', () => {
  
        
        const navigation = screen.getByRole('navigation', {
          name: /breadcrumb/i
        });
      
        const contacto = within(navigation).queryByRole('link', {
          name: /contacto/i
        });
      
        const backoffice = screen.getByRole('link', {
          name: /backoffice/i
        });
    
        expect(contacto).not.toBeInTheDocument();
        expect(backoffice).toBeInTheDocument();
      
      });
  
      test('should not render donation button', () => {
  
        expect(screen.queryByRole('button', {
          name: /donar aqui/i
        })).not.toBeInTheDocument();
  
      });
      
    });

    describe('User not admin', () => {

      const initState = {
        auth:{
          Autenticacion: true,
          Usuario: {
            role_id: 1
          }
        }
      };
      
      let store = mockStore(initState);
      
      beforeEach(() => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <HeaderPublic navigation={navigationLinks} />
            </MemoryRouter>
          </Provider>
        );
      });
  
      test('should not render backoffice link', () => {
        
        const backoffice = screen.queryByRole('link', {
          name: /backoffice/i
        });
  
        expect(backoffice).not.toBeInTheDocument();
  
      });
  
      test('should render donation button', () => {
  
        expect(screen.queryByRole('button', {
          name: /donar aqui/i
        })).toBeInTheDocument();
        
      });
      
    });

  });
  
});