import useSWR from 'swr';
import { searchUsers } from '../services/api';

const baseURL = 'https://api.github.com';
export const useFetch = () => {
  const { data, error } = useSWR(baseURL, searchUsers);
  return { seekingError: !data && !error, data, error };
};
