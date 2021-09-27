import { DeleteRequest, GetRequest, PutRequest, PostRequest } from './privateApiService';

const url = 'http://ongapi.alkemy.org/api/users';

export const GetUsers = async (id) => {
  let state = [];
  let error = {};
  let loading = true;
  const res = await GetRequest(url, id);
  if (res.data) {
    state = res.data;
  } else {
    error = {
      status_code: res,
      message: 'User not found'
    };
  }
  loading = false;
  return {state, error, loading};
};

export const PostUser = async (data) => {
  let state = {};
  let error = {};
  let loading = true;
  const res = await PostRequest(url, data);
  if (res.data) {
    state = res.data;
  } else {
    error = {
      status_code: res,
      message: 'The given data was invalid'
    };
  }
  loading = false;
  return {state, error, loading};
};

export const PutUser = async (id, data) => {
  let state = {};
  let error = {};
  let loading = true;
  const res = await PutRequest(url, id, data);
  if (res.data) {
    state = res.data;
  } else {
    error = {
      status_code: res,
      message: 'User not found or the given data was invalid'
    };
  }
  loading = false;
  return {state, error, loading};
};

export const DeleteUser = async (id) => {
  let state = {};
  let error = {};
  let loading = true;
  const res = await DeleteRequest(url, id);
  if (res.data) {
    state = res.data;
  } else {
    error = {
      status_code: res,
      message: 'User not found'
    };
  }
  loading = false;
  return {state, error, loading};
};

