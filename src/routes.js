import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/error';
import LayoutSearch from './pages/layoutSearch';
import LayoutProfile from './pages/layoutProfile';

export default () => (
  <Switch>
    <Route path="/" exact component={LayoutSearch} />
    <Route path="/profile" exact component={LayoutProfile} />
    <Route path="/" component={Error} />
  </Switch>
);
