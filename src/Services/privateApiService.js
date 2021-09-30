import axios from 'axios';

export const GetRequest = async(link,id) => {
  const header = verifyTokenAuthorization();
  if (id === undefined) {
    try {
      const response = await axios.get(`${link}`,{headers: header});
      return response.data;
    } catch (err) {
      return err.response.status;
    } 
  }
  else {
    try {
      const response = await axios.get(`${link}/${id}`,{headers: header});
      return response.data;
    } 
    catch (err) {
      return err.response.status;
    }
  }
};

export const PutRequest = async (url,id,data) =>{
  const requestURL = `${url}/${id}`;
  const header = verifyTokenAuthorization();
  try {
    const res = await axios.put(requestURL, data,{headers: header});
    return res.data;
  } catch (error) {
    return error.response.status;
  }
};

export const PostRequest = async (url, data) => {
  const header = verifyTokenAuthorization();
  try {
    const res = await axios.post(url, data, {headers: header});
    return res.data;
  } catch (error) {
    return error.response.status;
  }
};

export const PatchRequest = async ( url, id, data ) => {
  const header = verifyTokenAuthorization();
  const UrlRequest = `${url}/${id}`;
  try {
    const res = await axios.patch(UrlRequest, data, {headers: {header}});
    return res.data;
  } catch (error) {
    return error;
  }  
};

export const DeleteRequest = async (url, id) => {
  const requestURL =`${url}/${id}`; 
  const header = verifyTokenAuthorization();
  try{
    const res = await axios.delete(requestURL, {headers: header});
    return res.data;
  }catch (error){
    return error.response.status;
  }
};

export const verifyTokenAuthorization = () => {
  const token = localStorage.getItem('token');
  if(token){
    return {Authorization: 'Bearer ' + token, Group: 65};
  }
};
