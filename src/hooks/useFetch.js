import useSWR from 'swr';
import { getUsers } from '../services/api';

export const useFetch = () => {
  const { data, error } = useSWR(getUsers);
  return { seekingError: !data && !error, data, error };
};
