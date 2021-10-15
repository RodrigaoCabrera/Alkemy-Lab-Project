import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { activitiesReducer,putActivity,postActivity  } from '../../features/activitiesReducer';
import { render, fireEvent, screen, wait, cleanup } from '@testing-library/react';
import ActivitiesForm from './ActivitiesForm';
import configureMockStore from 'redux-mock-store';
import mockAxios from 'axios';
import Swal from 'sweetalert2';

afterEach(cleanup);

const initialState = {
  activities: [],
  status: 'idle'
};

const reducer = combineReducers({
  activities: activitiesReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState: { activities: initialState },
});

describe('Activities form tests', () => {
  let component;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <ActivitiesForm />
      </Provider>,
    );
  });

  test('Form is rendered', () => {
    component.getByText('Enviar');
  });

  test('Form show a error message if the inputs are empty', async () => {
    const button = component.getByRole('button');
    await wait(async () => {
      fireEvent.click(button);
      expect(screen.getByText('El nombre es obligatorio'));
      expect(screen.getByText('Debe seleccionar una imagen'));
    });
  });

  test('Form works in a editing mode', () => {
    const activities = {
      name: 'Editing test',
    };
    component = render(
      <Provider store={store}>
        <ActivitiesForm setIsEditOpen activity={activities} />
      </Provider>,
    );
    expect(screen.getByDisplayValue('Editing test'));
  });

  jest.mock;
  test('Post a new activity HTTP and show alert', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const requestDispatch = postActivity.pending;
    const successDispatch = postActivity.fulfilled;
    const actionsResulted = store.getActions();
    const expectedActions = [requestDispatch, successDispatch];
    const mockData = {
      name: 'Activities title',
      description: 'This is a activitie description',
    };

    jest.spyOn(mockAxios, 'post').mockResolvedValue({ status: 200, data: mockData });
    await store.dispatch(postActivity());

    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(actionsResulted.length).toEqual(expectedActions.length);
    expect(actionsResulted[0].type).toEqual(expectedActions[0].type);
    const success = expect(actionsResulted[1].type).toEqual(expectedActions[1].type);
    const error =
      actionsResulted[0].type !== expectedActions[0].type &&
      actionsResulted[1].type !== expectedActions[1].type;
    if (success) {
      await expect(Swal.fire).toHaveBeenCalledWith({
        icon: 'success',
        title: 'Operacion completada con Exito',
        text: 'La actividad se creo correctamente',
      });
    }
    if (error) {
      expect(Swal.fire).toHaveBeenCalledWith({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'No se pudo editar la actividad, comprueba tu conexion a internet o vuelva a intentar mas tarde',
      });
    }
  });

  test('Update an activity HTTP and show alert', async () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const requestDispatch = putActivity.pending;
    const successDispatch = putActivity.fulfilled;
    const actionsResulted = store.getActions();
    const expectedActions = [requestDispatch, successDispatch];

    const mockData = {
      id: 450,
      name: 'Apoyo Escolar Nivel Primario',
      description:
        '<p>El espacio de apoyo escolar es el corazon del area educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno</p>',
    };

    const mockUpdateData = {
      id: 450,
      name: 'Apoyo Escolar Nivel Secundaria',
      description:
        '<p>El espacio de apoyo escolar es el corazon del area educativa. Se realizan los talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno</p>',
    };

    jest.spyOn(mockAxios, 'put').mockResolvedValue({ status: 200, data: mockData });
    await store.dispatch(putActivity(mockUpdateData));

    expect(mockAxios.put).toHaveBeenCalledTimes(1);
    expect(actionsResulted.length).toEqual(expectedActions.length);
    expect(actionsResulted[0].type).toEqual(expectedActions[0].type);
    const success = expect(actionsResulted[1].type).toEqual(expectedActions[1].type);
    const error =
      actionsResulted[0].type !== expectedActions[0].type &&
      actionsResulted[1].type !== expectedActions[1].type;
    if (success) {
      await expect(Swal.fire).toHaveBeenCalledWith({
        icon: 'success',
        title: 'Operacion completada con Exito',
        text: 'La actividad se creo correctamente',
      });
    }
    if (error) {
      expect(Swal.fire).toHaveBeenCalledWith({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'No se pudo editar la actividad, comprueba tu conexion a internet o vuelva a intentar mas tarde',
      });
    }
  });
});