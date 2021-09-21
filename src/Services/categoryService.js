import { DeleteRequest, GetRequest, PostRequest, PutRequest } from './privateApiService';
const CATEGORIES_URL = 'http://ongapi.alkemy.org/api/categories';
export const getCategories = async ()=>{
  const response = await GetRequest(CATEGORIES_URL,undefined);
  return response;
};
export const getCategory = async (id)=>{
  const response = await GetRequest(CATEGORIES_URL,id);
  return response;
};
export const postCategory = async (data)=>{
  const response = await PostRequest(CATEGORIES_URL,data);
  return response;
};
export const putCategory =  async (id,data)=>{
  const response = await PutRequest(CATEGORIES_URL,id,data);
  return response;
};
export const deleteCategory = async (id)=>{
  const response = await DeleteRequest(CATEGORIES_URL,id);
  return response;
};
