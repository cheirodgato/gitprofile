import React, { useState } from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';
import { Row, Button, Jumbotron, Container, Card, Form, Col } from 'react-bootstrap';
import LayoutTable from './LayoutTable';

const LayoutSearch = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState('');
  const [repository, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function gets() {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', '7cfc96fe20cfa14838444b3edad8b3cab59c587b');

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      setLoading(true);

      const profile = await fetch(`https://api.github.com/users/${username}`, requestOptions);
      const profileJson = await profile.json();

      const repositories = await fetch(profileJson.repos_url);
      let repoJson = await repositories.json();
      repoJson = await Promise.all(
        repoJson.map(async (repos) => {
          const commitUrl = repos.commits_url.split('{')[0];
          let commits = await fetch(commitUrl);
          commits = await commits.json();
          commits = commits.length;
          return {
            commits,
          };
        })
      );
      setData(profileJson);
      setRepositories(repoJson);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    setLoading(false);
  }

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    gets();
  };

  return (
    <Container className="p-3">
      <Jumbotron>
        <Form>
          <Form.Group controlId="formGroupCard">
            <Card className="card" bg="dark" text="white">
              <FaGithubAlt className="card-img-top" size="48px" />
              <h1 className="header card-text card-header align-self-center"> GitProfile </h1>
            </Card>
          </Form.Group>
          <Row>
            <Col className="col-11">
              <Form.Group controlId="formBasicSearch">
                <Form.Control type="text" placeholder="Search users" value={username} onChange={onChangeHandler} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicButton">
                <Button variant="primary" type="submit" onClick={submitHandler}>
                  {/* <a className="text-white mr-2">Search</a> */}
                  <FaSearch />
                </Button>
              </Form.Group>
            </Col>
          </Row>
          <LayoutTable data={data} repositories={repository} loading={loading} />
        </Form>
      </Jumbotron>
    </Container>
  );
};

export default LayoutSearch;
