import { Get, PutRequest, PostRequest, DeleteRequest } from './privateApiService';

const url = 'http://ongapi.alkemy.org/api/activities';

export const GetActivities = async (id) => {
  let res;
  id ? res = await Get(url, id) : res = await Get(url);
  return res;
};

export const PutActivity = async (id, data) => {
  const res = await PutRequest(url, id, data);
  return res;
};

export const PostActivity = async (data) => {
  const res = await PostRequest(url, data);
  return res;
};

export const DeleteActivity = async (id) => {
  const res = await DeleteRequest(url, id);
  return res;
};
