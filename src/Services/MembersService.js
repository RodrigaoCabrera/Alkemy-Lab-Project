import { GetRequest, PutRequest, PostRequest, PatchRequest, DeleteRequest } from './privateApiService';
// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_API_MEMBERS;

export const GetMembers = async (id) => {
  let res;
  if (id === undefined) {
    res = await GetRequest(url);
  } 
  else {
    res = await GetRequest(url, id);
  }
  return res;
};

export const PutMembers = async (id, data) => {
  const res = await PutRequest(url, id, data);
  return res;
};

export const PostMembers = async (data) => {
  const res = await PostRequest(url, data);
  return res;
};
export const PatchMembers = async (id, data) => {
  const res = await PatchRequest(url, id, data);
  return res;
};

export const DeleteMembers = async (id) => {
  const res = await DeleteRequest(url, id);
  return res;
};