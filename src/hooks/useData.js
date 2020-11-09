import { useContext } from 'react';
import { DataContext } from '../context/Data';

export function useData() {
  const context = useContext(DataContext);
  const { user, setUser, data, setData, loading, setLoading, show, setShow } = context;
  return { user, setUser, data, setData, loading, setLoading, show, setShow };
}
