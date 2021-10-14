import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RegisterForm from './RegisterForm';
import { Provider } from 'react-redux';
import  store  from '../../app/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import user from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import {register,REGISTRAR_USUARIO} from '../../features/authReducer';

describe('RegisterForm tests', async() => {
  
  test(' test  dispatch ',() => {
    const mockStore = configureStore();
    const initState = {
      auth: {
        Autenticacion: false,
        Usuario: {}
      }
    };

    let store = mockStore(initState);
  
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      </Provider>
    );

    let variable ={
      name:'alejandro',
      lastName: 'Mederico',
      email: 'Mederico.ale@gmail.com',
      password: 'Al3jandr*',
      confirmPassword: 'Al3jandr*',
      role_id: 0
    };
    store.dispatch(register(variable));

    const action =  store.getActions();

    expect(action[0]).toEqual({
      type:REGISTRAR_USUARIO,
      payload:{
        name:'alejandro',
        lastName: 'Mederico',
        email: 'Mederico.ale@gmail.com',
        password: 'Al3jandr*',
        confirmPassword: 'Al3jandr*',
        role_id: 0
      }
    });

  });

  test('Complete the input to submitting a basic Formik form', async () => {
    const onSubmit = jest.fn();  
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm onSubmit={onSubmit}/>
          </BrowserRouter>
        </Provider>
      );
    });
    user.type(nombre(),'Alejandro');
    user.type(apellido(),'Mederico');
    user.type(correo(),'mederico@gmail.com');
    user.type(password(),'Al3jandr*');
    user.type(passwordCofirmado(),'Al3jandr*');
    fireEvent.click(registrar());
    screen.debug();
    await waitFor(() => { 
      expect(screen.getByRole('heading', {name: /registrarse/i})).not.toBe(null);
      expect(screen.getByRole('heading', {name: /registrarse/i})).toHaveTextContent('Registrarse');
    });
  });

  test('Verify Price Register and display Required Fields', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm/>
          </BrowserRouter>
        </Provider>
      );
    });
    fireEvent.click(registrar());
    await waitFor(() => {
    //Nombre
      expect(screen.getByTestId('ErrorNombre')).not.toBe(null);
      expect(screen.getByTestId('ErrorNombre')).toHaveTextContent('Requerido');
      //Apellido
      expect(screen.getByTestId('errorLastName')).not.toBe(null);
      expect(screen.getByTestId('errorLastName')).toHaveTextContent('Requerido');
      // //Email
      expect(screen.getByTestId('ErrorEmail')).not.toBe(null);
      expect(screen.getByTestId('ErrorEmail')).toHaveTextContent('Requerido');
      // //Password
      expect(screen.getByTestId('ErrorPassword')).not.toBe(null);
      expect(screen.getByTestId('ErrorPassword')).toHaveTextContent('Requerido');
      // //ConfirmarPassword    
      expect(screen.getByTestId('ErrorConfirmPassword')).not.toBe(null);
      expect(screen.getByTestId('ErrorConfirmPassword')).toHaveTextContent('Requerido');
    });
  });

  test('Verify the Onblur', async () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm/>
          </BrowserRouter>
        </Provider>
      );
    });
    fireEvent.blur(nombre());
    fireEvent.blur(apellido());
    fireEvent.blur(correo());
    fireEvent.blur(password());
    fireEvent.blur(passwordCofirmado());
    await waitFor(() => {
    //Nombre
      expect(screen.getByTestId('ErrorNombre')).not.toBe(null);
      expect(screen.getByTestId('ErrorNombre')).toHaveTextContent('Requerido');
      //Apellido
      expect(screen.getByTestId('errorLastName')).not.toBe(null);
      expect(screen.getByTestId('errorLastName')).toHaveTextContent('Requerido');
      //Email
      expect(screen.getByTestId('ErrorEmail')).not.toBe(null);
      expect(screen.getByTestId('ErrorEmail')).toHaveTextContent('Requerido');
      //Password
      expect(screen.getByTestId('ErrorPassword')).not.toBe(null);
      expect(screen.getByTestId('ErrorPassword')).toHaveTextContent('Requerido');
      //ConfirmarPassword    
      expect(screen.getByTestId('ErrorConfirmPassword')).not.toBe(null);
      expect(screen.getByTestId('ErrorConfirmPassword')).toHaveTextContent('Requerido');
    });
  });

  function nombre() {
    return screen.getByRole('textbox', {
      name: /nombre/i
    });
  }
  function apellido() {
    return screen.getByRole('textbox', {
      name: /apellido/i
    });
  }
  function correo() {
    return screen.getByRole('textbox', {
      name: /email/i
    });
  }
  function password() {
    return screen.getByTestId('Password');
  }

  function passwordCofirmado() {
    return screen.getByLabelText(/confirmar contraseña\*/i);
  }
  function registrar() {
    return screen.getByRole('button', {
      name: /registrarse/i
    });
  }
});