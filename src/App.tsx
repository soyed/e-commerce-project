import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
