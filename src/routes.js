import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Error from './pages/ErrorPage';
import Layout from './pages/Layout';

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/" component={Error} />
    </Switch>
  </BrowserRouter>
);
