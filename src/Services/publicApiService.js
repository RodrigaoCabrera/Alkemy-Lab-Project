import axios from 'axios';
const config = {
   headers: {
        Group: 65                //Aqui va el ID del equipo!!
    }
}

const Get = (URL, id, config) => {
    const enlace = `${URL}/${id}`;

    if (id === undefined) {
        axios.get(URL, { header: { config } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    } else {
        axios.get(enlace, { header: { config } })
            .then(res => console.log(res))
            .catch(err => console.log(err))
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


