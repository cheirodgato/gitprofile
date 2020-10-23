import React, { useCallback } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import useSWR from 'swr';
import { Jumbotron, Container, ListGroup, Row, CardImg, Col, Card } from 'react-bootstrap';
import { getApi } from '../services/api';

const useFetch = (url) => {
  const { data, error } = useSWR(`https://api.github.com${url}`, getApi);
  return { data, error };
};

const LayoutSearch = () => {
  const { data, error } = useFetch(`/users?per_page=5`);

  const handleOnProfile = useCallback((user) => {
    localStorage.setItem('user', user);
  }, []);
  const handleOnAvatar = useCallback((avatar) => {
    localStorage.setItem('avatar', avatar);
  }, []);

  if (!data) {
    return <h4>Carregando...</h4>;
  }
  if (error) {
    return <h4>Erro: {error.message}</h4>;
  }

  return (
    <Container className="p-3">
      <Jumbotron>
        <Row className="justify-content-md-center">
          <Card style={{ width: '50%', marginBottom: '5%', paddingTop: '2%' }} bg="dark" text="white">
            <FaGithubAlt style={{ alignSelf: 'center' }} size="48px" />
            <h1 className="header">GitProfile</h1>
          </Card>
        </Row>
        <Col className="text-md-center">
          <ListGroup>
            {data.map((user) => (
              <ListGroup.Item
                defaultActiveKey={user.id}
                action
                onClick={() => {
                  handleOnProfile(user.login);
                  handleOnAvatar(user.avatar_url);
                }}
                href="/profile"
              >
                <CardImg
                  style={{
                    width: '10%',
                    borderRadius: '100%',
                    border: '5px solid',
                  }}
                  src={user.avatar_url}
                  alt="User"
                />
                <a style={{ font: 'small-caps', fontFamily: 'Courier New', fontSize: '42px' }}>{user.login}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Jumbotron>
    </Container>
  );
};

export default LayoutSearch;
