import axios from 'axios';

const api = {
  baseURL: 'https://api.github.com',
  client_id: '7cfc96fe20cfa14838444b3edad8b3cab59c587b',
};

const getAuth = ({ data, error }) => {
  return axios
    .get(`${api.baseURL}/login/oauth/authorize`, { Authorization: api.client_id })
    .then((response) => {
      data(response.data);
    })
    .catch((miss) => {
      error(miss.message);
    });
};

const getUsers = ({ data, error }, user) => {
  return axios
    .get(`${api.baseURL}/search/users?q=${user}`, { Authorization: api.client_id })
    .then((response) => {
      return data(response.data);
    })
    .catch((miss) => {
      return error(miss.message);
    });
};

export { getAuth, getUsers };
