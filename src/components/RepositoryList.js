import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const RepositoryList = ({ repositories }) => {
  return (
    <Row>
      <Col>
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          {repositories?.map((repo, index) => (
            <div key={index.toString()}>
              <a className="text-dark" href={repo.href}>
                {repo.name}
              </a>
              {'  '}
              <Badge className="badge-dark" pill="true">
                {repo.commits}
              </Badge>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};
export default RepositoryList;
