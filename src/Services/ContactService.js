import { GetRequest, PutRequest, PostRequest/*, PatchRequest*/, DeleteRequest } from './privateApiService';

// eslint-disable-next-line no-undef
const urlRequest = process.env.REACT_APP_CONTACT;

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
