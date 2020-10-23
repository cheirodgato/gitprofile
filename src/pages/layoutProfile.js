import React from 'react';
import useSWR from 'swr';
import { Col, ListGroup, Container, Jumbotron, Row, CardImg, Breadcrumb } from 'react-bootstrap';
import { getApi } from '../services/api';

const useFetchRepos = (url) => {
  const { data, error } = useSWR(`https://api.github.com${url}`, getApi());
  return { data, error };
};

const LayoutProfile = () => {
  const user = localStorage.getItem('user');
  const avatar = localStorage.getItem('avatar');
  const { data, error } = useFetchRepos(`/users/${user}/repos`);
  if (!data) {
    return <h1>Loding...</h1>;
  }
  if (error) {
    return <h1>Erro: {error.message}</h1>;
  }

  return (
    <Container className="p-5">
      <Jumbotron>
        <Row>
          <Breadcrumb className="m-2 col-md-1">
            <Breadcrumb.Item href="/">Back</Breadcrumb.Item>
          </Breadcrumb>

          <CardImg
            className="t"
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              alignSelf: 'center',
              height: '20%',
              width: '20%',
              borderRadius: '100%',
            }}
            variant="top"
            src={avatar}
            alt="Owner"
          />
        </Row>
        <Col className="pt-5">
          <ListGroup className="pre-scrollable">
            {data.map((repo) => (
              <ListGroup.Item key={repo.id}>
                <a style={{ font: 'small-caps', fontFamily: 'Courier New', fontSize: '22px' }}>{repo.name}</a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Jumbotron>
    </Container>
  );
};

export default LayoutProfile;
