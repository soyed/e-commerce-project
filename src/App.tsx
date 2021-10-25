import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

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
        <Route path='/home' exact component={Header} />

        {/* Social Pages redirect */}
        <Route path='/facebook'>
          <Redirect to='https://www.facebook.com' />
        </Route>
        <Route path='/twitter'>
          <Redirect to='https://www.twitter.com' />
        </Route>
        <Route path='/instagram'>
          <Redirect to='https://www.instagram.com' />
        </Route>
        {/* Not found page */}
        <Route path='*' />
      </Switch>
    </>
  );
};

export default App;
