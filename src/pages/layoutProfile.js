import React from 'react';
import { useFetch, useFetchCommit } from '../hooks/useFetch';

// eslint-disable-next-line react/prop-types
export const LayoutProfile = ({ user }) => {
  const { dt } = useFetchCommit(`/repos/octocat/boysenberry-repo-1/commits`);
  const { data, error } = useFetch(`/users/${user}/repos`);

  if (!data && !dt) {
    return <p>Carregando...</p>;
  }
  if (error) {
    return <h1>Erro: {error.message}</h1>;
  }

  return (
    <>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {data.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
