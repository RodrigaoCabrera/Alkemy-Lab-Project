import { DeleteRequest, GetRequest, PostRequest, PutRequest } from './privateApiService';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_CATEGORIES;

export const getCategories = async ()=>{
  const response = await GetRequest(url);
  return response;
};
export const getCategory = async (id)=>{
  const response = await GetRequest(url, id);
  return response;
};
export const postCategory = async (data)=>{
  const response = await PostRequest(url, data);
  return response;
};
export const putCategory =  async (id,data)=>{
  const response = await PutRequest(url, id, data);
  return response;
};
export const deleteCategory = async (id)=>{
  const response = await DeleteRequest(url, id);
  return response;
};
