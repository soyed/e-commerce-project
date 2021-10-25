import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { LinkPath } from '../routes/utils';
import HomePage from '../components/HomePage/Homepage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <>
      <Header />
      {/* Routes => temp location */}
      <Switch>
        <Route path={LinkPath.UNIVERSAL} exact>
          <Redirect to={LinkPath.HOME} />
        </Route>
        <Route path={LinkPath.HOME} component={HomePage} exact />

        {/* COMMERCE ROUTE */}
        {/*  */}
        <Route path={LinkPath.ACCOUNT} />
        <Route path={LinkPath.FAVORITES} />
        <Route path={LinkPath.CART} />

        {/* Products Page => Routes */}

        {/* Information Route */}
        <Route path={LinkPath.FAQ} />
        <Route path={LinkPath.CONTACT} />
        <Route path={LinkPath.SHIPPING} />

        {/* Not found page */}
        <Route path={LinkPath.NOTFOUND} />
      </Switch>
      <Footer />
    </>
  );
};

export default AppRouter;
