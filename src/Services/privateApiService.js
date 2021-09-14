/* eslint-disable no-extra-semi */
import axios from 'axios';
const config = {
  headers: {
    Group: 65                //Aqui va el ID del equipo!!
  }
};

export const Get =   async(link,id) => {
  const header = verifyTokenAuthorization();
  if (id === undefined) {
    try {
      const response = await axios.get(`${link}`,{headers: {header}});
      return response.data;
    } catch (err) {
      console.log(err);
    } 
  }
  else {
    try {
      const response = await axios.get(`${link}/${id}`,{headers: {header}});
      return response.data;
    } 
    catch (err) {
      console.log(err);
    }
  }
};
export const PutRequest = async (url,id,data) =>{
  const requestURL = `${url}/${id}`;
  const header = verifyTokenAuthorization();
  try {
    const res = await axios.put(requestURL, data,{headers: header});
    if(!(res.status===200||res.status===204)){
      throw new Error(res.status);
    }else{
      return res;
    }
  } catch (error) {
    return error;
  }
};


export const PostRequest = async (url, data) => {
  const header = verifyTokenAuthorization();
  try {
    await axios.post(url, data, {headers: {header}});
  } catch (error) {
    console.error(error);
  }
};

export const verifyTokenAuthorization = () => {
  const token = localStorage.getItem('token');
  if(token){
    return {Authorization: 'Bearer ' + token};
  }
};
