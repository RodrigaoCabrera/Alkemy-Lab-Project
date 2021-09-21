import { GetRequest, PutRequest, PostRequest, DeleteRequest } from './privateApiService';

// eslint-disable-next-line no-undef
const url = process.env.REACT_APP_ACTIVITIES;

export const GetActivities = async (id) => {
  let res;
  id ? res = await GetRequest(url, id) : res = await GetRequest(url);
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
