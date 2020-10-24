import React, { useCallback } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { Jumbotron, Container, CardImg, Card, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const LayoutSearch = () => {
  const { data, error } = useFetch(`/users?per_page=5`);

  const handleOnProfile = useCallback((user) => {
    localStorage.setItem('user', user);
  }, []);
  const handleOnAvatar = useCallback((avatar) => {
    localStorage.setItem('avatar', avatar);
  }, []);

  if (!data) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>Error: {error.message}</h4>;
  }

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
          <Form.Group controlId="formGroupListUsers">
            <Card className="card-body mb-3 text-md-center">
              <ul className="no-gutters list-unstyled">
                {data.map((user) => (
                  <Link
                    onClick={() => {
                      handleOnProfile(user.login);
                      handleOnAvatar(user.avatar_url);
                    }}
                    to="/profile"
                  >
                    <li>
                      <CardImgCustom
                        className="card-img border border-dark rounded-circle  rounded-sm"
                        src={user.avatar_url}
                        alt="User"
                      />
                      <StyledP className="card-text">{user.login}</StyledP>
                    </li>
                  </Link>
                ))}
              </ul>
            </Card>
          </Form.Group>
        </Form>
      </Jumbotron>
    </Container>
  );
};

export default LayoutSearch;

const CardImgCustom = styled(CardImg)`
  width: 125px;
  margin: 5px;
  padding: 5px;
`;
// eslint-disable-next-line jsx-a11y/anchor-is-valid
const pCustom = ({ className, children }) => <a className={className}>{children}</a>;
const StyledP = styled(pCustom)`
  font-family: 'Courier New', monospace;
  font-size: 44px;
  color: dimgrey;
`;
