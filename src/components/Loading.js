import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      {/* <div className="spinner-border" role="status"> */}
      <Spinner animation="border" variant="dark" role="status" />
      {/* </div> */}
    </div>
  );
};

export default Loading;
