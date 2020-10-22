import useSWR from 'swr';
import { searchUsers } from '../services/api';

export const useFetch = (url) => {
  const { data, error } = useSWR(`https://api.github.com${url}`, searchUsers);
  return { seekingError: !data && !error, data, error };
};

export const useFetchCommit = (url) => {
  const { dt, error } = useSWR(`https://api.github.com${url}`, searchUsers);
  return { dt, error };
};
