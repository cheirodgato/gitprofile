import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/error';
import LayoutSearch from './pages/layoutSearch';

export default () => (
  <Switch>
    <Route path="/" exact component={LayoutSearch} />
    <Route path="/" component={Error} />
  </Switch>
);
