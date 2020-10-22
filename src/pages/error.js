import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <h1>
      Error 404
      <br />
      Not found!
      <br />
      <Link to="/">Home</Link>
    </h1>
  );
}
