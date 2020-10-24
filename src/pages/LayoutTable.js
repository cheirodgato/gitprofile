import React from 'react';
import { DiGithub } from 'react-icons/all';
import styled from 'styled-components';
import { Spinner, CardImg } from 'react-bootstrap';

const LayoutTable = (data, repositories, loading) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{!data.avatar_url ? ' ' : <CardImgCustom className="" src={data.avatar_url} alt={data.avatar_url} />}</td>
          <td>{data.name}</td>
          <td>
            {loading ? (
              <Spinner animation="border" />
            ) : (
              repositories.map((repo, index) => {
                return (
                  <div className="list-unstyled" key={repo.name}>
                    <div className="item" key={index.toString()}>
                      <DiGithub />
                      <div className="content">
                        <StyledP href={repo.html_url} className="header" target="_blank">
                          {repo.name}
                        </StyledP>
                        <StyledP>{repo.commits}</StyledP>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LayoutTable({}, {}, {});

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
