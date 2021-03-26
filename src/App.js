import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component="Home" />
        <Route exact path='/login' component="Login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
