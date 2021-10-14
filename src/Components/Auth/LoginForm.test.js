import React from 'react';
import LoginForm from './LoginForm';
import { act } from '@testing-library/react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { login } from '../../features/authReducer';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

describe('Test Login Component', () => {

  test('Verify login and display errors ', async () => {
    act(()=>{
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm/>
          </BrowserRouter>
        </Provider>
      );
    });

    fireEvent.click(screen.getByRole('button', { name: /Iniciar sesión/i }));

    await waitFor(() => {
      expect(screen.getByTestId('errorEmail')).not.toBe(null);
      expect(screen.getByTestId('errorEmail')).toHaveTextContent('Requerido');

      expect(screen.getByTestId('errorPass')).not.toBe(null);
      expect(screen.getByTestId('errorPass')).toHaveTextContent('Requerido');
    });

  });


  test('Test dispatch endpoint', async () => {
    const initState = {
      auth: {
        Autenticacion: false,
        Usuario: {}
      }
    };
    const mockStore = configureStore();
    const storeMock = mockStore(initState);
    render(
      <Provider store={storeMock}>
        <BrowserRouter>
          <LoginForm/>
        </BrowserRouter>
      </Provider>
    );

    storeMock.dispatch(login({
      email: 'alkemy@test.org',
      password: 'prueba123?'
    }));
    const action = storeMock.getActions();

    expect(action[0]).toEqual({
      type: 'LOGIN_USUARIO',
      payload:{
        email: 'alkemy@test.org',
        password: 'prueba123?',
      }
    });
  });
});