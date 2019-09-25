  
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './History';
import App from '../containers/App';
import HomePage from '../containers/homePage/HomePage';

const Routes = (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" component={HomePage} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);

export default Routes;