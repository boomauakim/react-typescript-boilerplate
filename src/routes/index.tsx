import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from 'views/index';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
