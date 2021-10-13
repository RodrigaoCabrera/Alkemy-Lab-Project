import { GetRequest, PutRequest, PostRequest, DeleteRequest } from './privateApiService';

const url = process.env.REACT_APP_SLIDES;

export const GetSlides = async (id) => {
  let res;
  id ? res = await GetRequest(url, id) : res = await GetRequest(url);
  return res;
};

export const getSlidesWithQuery = async(search) => {

  const res = await GetRequest(`${url}?search=${search}`); 

  return res;

};
  
export const PutSlides  = async (id, data) => {
  const res = await PutRequest(url, id, data);
  return res;
};
  
export const PostSlides  = async (data) => {
  const res = await PostRequest(url, data);
  return res;
};
  
export const DeleteSlides = async (id) => {
  const res = await DeleteRequest(url, id);
  return res;
};  

