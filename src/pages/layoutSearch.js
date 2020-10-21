import React from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';
import { Form, Button } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import { Container } from './layoutStyle';
import LayoutProfile from './layoutProfile';

const LayoutSearch = () => {
  const user = '';
  const { seekingError, error } = useFetch(`/search/users?q=${user}`);
  if (seekingError) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <h1>Erro: {error.message}</h1>;
  }
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Git Profile
      </h1>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control id="Input" type="search" placeholder="Search username" />
        </Form.Group>

        <Button variant="primary" type="submit">
          <FaSearch />
        </Button>
      </Form>

      <LayoutProfile />
    </Container>
  );
};

export default LayoutSearch;
