import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './pages/layout';
import LayoutProfile from './pages/layoutProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route path="/profile" component={LayoutProfile} />
      </Switch>
    </BrowserRouter>
  );
}
