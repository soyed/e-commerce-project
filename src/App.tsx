import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import HomePage from './components/HomePage/Homepage';
import { LinkPath } from './routes/utilS';

const App = () => {
  return (
    <>
      {/* Routes => temp location */}
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path={LinkPath.HOME} exact component={HomePage} />

        {/* Information Route */}
        <Route path={LinkPath.FAQ} />
        <Route path={LinkPath.CONTACT} />
        <Route path={LinkPath.SHIPPING} />

        {/* Not found page */}
        <Route path='*' />
      </Switch>
    </>
  );
};

export default App;
