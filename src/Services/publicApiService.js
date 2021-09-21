import axios from 'axios';
const config = {
  headers: {
    Group: 65                //Aqui va el ID del equipo!!
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

