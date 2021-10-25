import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { LinkPath } from './routes/utilS';

const App = () => {
  return (
    <>
      <Header />
      <Footer />

      {/* Routes => temp location */}
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path={LinkPath.HOME} exact component={Header} />

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
