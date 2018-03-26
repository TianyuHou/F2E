import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Education from '../components/Education/Education';
import Financial from '../components/Financial/Financial';
import Home from '../components/Home/Home';
import Message from '../components/Message/Message';
import Profile from '../components/Profile/Profile';
import Jobboard from '../components/Jobboard/Jobboard';
import Register from '../components/Register/Register';
import NotFound from '../components/NotFound';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Home} exact={true} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/education" component={Education} />
        <PrivateRoute path="/financial" component={Financial} />
        <PrivateRoute path="/message" component={Message} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/job" component={Jobboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
