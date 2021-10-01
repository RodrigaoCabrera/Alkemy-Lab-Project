import { GetRequest, PostRequest } from './publicApiService';

const ORG_API_URL = 'http://ongapi.alkemy.org/api/organization';
//conectado con el  home.
export const getWelcomeTextRequest = async ()=>{
  const res = await GetRequest(ORG_API_URL);
  return res;
};
//conectado con el formulario de home.
export const postWelcomeTextRequest = async (data) =>{
  const getRes = await GetRequest(ORG_API_URL);
  getRes.data['welcome_text'] = data;
  delete getRes.data.logo;
  const res = await PostRequest(ORG_API_URL,getRes.data);
  return res;
};
//conectado con el home.
export const getTitleRequest = async ()=>{
  const getRes = await GetRequest(ORG_API_URL);
  return getRes;
};
//conectado con el formulario de organizacion.
export const postTitleRequest = async (data) =>{
  const getRes = await GetRequest(ORG_API_URL);
  getRes.data.name = data;
  delete getRes.data.logo;
  //getRes.data.logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgA…hhBBCCCGEEEIIIcQeVq36f4XXXwFMX8vWAAAAAElFTkSuQmCC';
  const res = await PostRequest(ORG_API_URL,getRes.data);
  return res;
};