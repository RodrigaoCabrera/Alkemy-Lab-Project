import axios from 'axios';
const config = {
  headers: {
    Group: 65                //Aqui va el ID del equipo!!
  }
};
  

export const Post =   async(link,data) => {
  axios.post(`${link}`, data,config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
