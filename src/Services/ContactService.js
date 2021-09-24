import { GetRequest, PutRequest, PostRequest/*, PatchRequest*/, DeleteRequest } from './privateApiService';


const urlRequest = 'http://ongapi.alkemy.org/api/contacts';

export const GetContact = async (id) => {
  const res = await GetRequest(urlRequest, id);
  return res;
};
  
export const PostContact = async (data) => {
  data.phone = data.phone.toString();
  const res = await PostRequest(urlRequest, data);
  return res;
};

export const PutContact = async (id, data) => {
  const res = await PutRequest(urlRequest, id, data);
  return res;
};

export const DeleteContact = async (id) => {
  const res = await DeleteRequest(urlRequest, id);
  return res;
};
/*
export const PatchContact = async (id, data) => {
  const res = await PatchRequest(urlRequest, id, data);
  return res;
};
*/
