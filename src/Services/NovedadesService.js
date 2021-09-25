import { GetRequest, PutRequest, PostRequest, DeleteRequest } from './privateApiService';

const url = 'http://ongapi.alkemy.org/api/news';

export const GetNews = async (id) => {
  let respuesta;
  if (id === undefined) {
    respuesta = await GetRequest(url);
  } 
  else {
    respuesta = await GetRequest(url, id);
  }
  return respuesta;
};

export const PostNews = async (data) => {
  const respuesta = await PostRequest(url, data);
  return respuesta;
};

export const PutNews = async (id, data) => {
  const respuesta = await PutRequest(url, id, data);
  return respuesta;
};

export const DeleteNews = async (id) => {
  const respuesta = await DeleteRequest(url, id);
  return respuesta;
};
