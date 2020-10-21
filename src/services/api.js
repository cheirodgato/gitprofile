import axios from 'axios';

const searchUsers = (...args) => {
  return axios
    .get(...args)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      return response.data;
    })
    .catch((miss) => {
      // eslint-disable-next-line no-console
      console.log(miss.message);
      return miss.message;
    });
};

export { searchUsers };
