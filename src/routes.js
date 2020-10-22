import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LayoutSearch from './pages/layoutSearch';
import Error from './pages/error';

export default () => (
  <Switch>
    <Route path="/" exact component={LayoutSearch} />
    <Route path="/" component={Error} />
  </Switch>
);
