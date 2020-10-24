import React, { useState } from 'react';
import { Col, ListGroup, Container, Jumbotron, Row, CardImg, Breadcrumb } from 'react-bootstrap';
import { useFetch } from '../hooks/useFetch';
import { api } from '../services/api';

const LayoutProfile = () => {
  const [c, setC] = useState([]);
  const user = localStorage.getItem('user');
  const avatar = localStorage.getItem('avatar');
  const { data, error } = useFetch(`/users/${user}/repos`);

  if (!data) {
    return <h1>Loding...</h1>;
  }
  if (data) {
    const commit = data.json();
    // eslint-disable-next-line no-console
    console.log('aq', commit.commits_url);
    api.get(commit.commits_url).then((r) => {
      const nCommits = r.data;
      return setC(nCommits);
    });
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
                <p className="card-text">
                  {repo.name} {c}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Jumbotron>
    </Container>
  );
};

export default LayoutProfile;
