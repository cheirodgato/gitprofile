import React from 'react';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { Row, Button, Form, Col, Card } from 'react-bootstrap';
import { useData } from '../hooks/useData';
import TableProfile from '../components/TableProfile';

const Layout = () => {
  const { user, setUser, setData, setLoading, show, setShow } = useData();

  async function getProfile() {
    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };

      setLoading(true);

      const profile = await fetch(`https://api.github.com/users/${user}`, requestOptions);
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
            name: repos.name,
            href: repos.html_url,
            commits,
          };
        })
      );
      setData({
        name: profileJson.login,
        avatar: profileJson.avatar_url,
        repos: repoJson,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    setLoading(false);
    setShow(true);
  }

  const handleOnChange = (e) => {
    setUser(e.target.value);
    setShow(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getProfile();
  };

  return (
    <div style={{ width: '800px' }}>
      <Card className="navbar" variant="dark" expand="lg" bg="dark">
        <Form className="form-inline" onSubmit={handleOnSubmit}>
          <Row>
            <Col className="col-2">
              <a className="text-white" href="https://github.com/">
                <FaGithub className="card-img" size={38} />
              </a>
            </Col>
            <Col className="col-8">
              <Form.Group controlId="formBasicSearch">
                <Form.Control type="text" placeholder="Search for a user..." value={user} onChange={handleOnChange} />
              </Form.Group>
            </Col>
            <Col className="col-1">
              <Form.Group controlId="formBasicButton">
                <Button variant="success" type="submit">
                  <FaSearch />
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card>
      {show ? (
        <>
          <hr />
          <TableProfile />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Layout;
