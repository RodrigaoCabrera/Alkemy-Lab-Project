import axios from 'axios';
//constante
const dataInicial ={
  Autenticacion:false,
  Usuario:{}
};

//types
const LOGIN_USUARIO = 'LOGIN_USUARIO';
const REGISTRAR_USUARIO = 'REGISTRAR_USUARIO';
const LOGOUT = 'LOGOUT';

//reducer
export default function authReducer(state = dataInicial,action){

  switch (action.type) {
  case LOGIN_USUARIO:
    return {Autenticacion:true, Usuario:action.payload};
  case REGISTRAR_USUARIO:
    return {Autenticacion:true, Usuario:action.payload};
  case LOGOUT:
    return {Autenticacion:action.payload.Autenticacion, Usuario:action.payload.Usuario};
  default:
    return state;
  }
}

//acciones
export const loginUsuarioAction = (correo,contra) => async (dispatch, getState) => {
  const data={
    email:correo,
    password:contra
  };
  try {
    const res = await axios.get('http://ongapi.alkemy.org/api/login',data);
    dispatch({
      type: LOGIN_USUARIO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT,
      payload: {Autenticacion:false, Usuario:{}}
    });
  }
};
export const registrarUsuarioAction = (nombre,correo,contra) =>  async(dispatch, getState) => {
  const data={
    name:nombre,
    email:correo,
    password:contra
  };
  try {
    const res = await axios.get('http://ongapi.alkemy.org/api/register',data);
    dispatch({
      type: REGISTRAR_USUARIO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT,
      payload: {Autenticacion:false, Usuario:{}}
    });
  }

};
export const logoutAction = () =>  (dispatch, getState) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT,
    payload: {Autenticacion:false, Usuario:{}}
  });
};

