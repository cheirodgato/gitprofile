import React, { useEffect } from 'react';
import { useData } from '../hooks/useData';
import RepositoryList from './RepositoryList';
import Loading from './Loading';

const TableProfile = () => {
  const { data, loading } = useData();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, [data]);

  return loading ? (
    <Loading />
  ) : (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img style={{ width: '350px', margin: '5px', padding: '5px' }} src={data.avatar} alt={data.avatar} />
          </td>
          <td>{data.name}</td>
          <td>
            <RepositoryList repositories={data.repos} loading={loading} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProfile;
