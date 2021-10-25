import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import HomePage from './components/HomePage/Homepage';
import { LinkPath } from './routes/utils';

const App = () => {
  return (
    <>
      {/* Routes => temp location */}
      <Switch>
        <Route path={LinkPath.UNIVERSAL} exact>
          <Redirect to={LinkPath.HOME} />
        </Route>
        <Route path={LinkPath.HOME} component={HomePage} exact />

        {/* COMMERCE ROUTE */}
        <Route path={LinkPath.ACCOUNT} />
        <Route path={LinkPath.FAVORITES} />
        <Route path={LinkPath.CART} />

        {/* Information Route */}
        <Route path={LinkPath.FAQ} />
        <Route path={LinkPath.CONTACT} />
        <Route path={LinkPath.SHIPPING} />

        {/* Not found page */}
        <Route path={LinkPath.NOTFOUND} />
      </Switch>
    </>
  );
};

export default App;
