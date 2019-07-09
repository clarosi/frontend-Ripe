import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../Home';
import Weather from '../Weather';
import NotFound from '../404';

const Main = props => {
  return (
    <Switch>
      <Route {...props} exact path={'/'} component={Home} />
      <Route {...props} path={'/weather'} component={Weather} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Main;
