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

export const GetRequest = async(URL, id) => {
  if (id === undefined) {
    try {
      const res = await axios.get(`${URL}`,config);
      return res.data;
    } catch (err) {
      return err.response.status;
    } 
  }
  else {
    try {
      const res = await axios.get(`${URL}/${id}`, config);
      return res.data;
    } 
    catch (err) {
      return err.response.status;
    }
  }
};

export const PostRequest = async(link, data) => {
  try {
    const res = await axios.post(link, data, config);
    return res.data;
  } catch (error) {
    return error.response.status;
  }
};

