import axios from 'axios';

const config = {
  headers: {
    Group: 65                //Aqui va el ID del equipo!!
  }
};

const Get = () => {
  axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const verifyTokenAuthorization = () => {
  const token = localStorage.getItem('token');
  if(token){
    return {Authorization: 'Bearer ' + token};
  }
  return null;
};

export default Get;